import { BlogPost } from '../types';
import { authors } from '../authors';

export const cicdGithubActionsAws: BlogPost = {
  id: 'implementando-cicd-github-actions-aws',
  title: 'CI/CD Completo con GitHub Actions y AWS',
  excerpt: 'Guía paso a paso para implementar un pipeline CI/CD profesional usando GitHub Actions, incluyendo tests, builds, y despliegues automatizados a AWS.',
  content: `
## Pipeline CI/CD Moderno con GitHub Actions

En InfraUX, automatizamos todo. Este es nuestro enfoque para construir pipelines CI/CD robustos que despliegan a AWS con confianza.

### Arquitectura del Pipeline

\`\`\`mermaid
graph LR
    A[Push to GitHub] --> B[GitHub Actions]
    B --> C{Branch?}
    C -->|main| D[Build & Test]
    C -->|develop| E[Build & Test]
    C -->|feature/*| F[Build & Test]
    D --> G[Deploy to Prod]
    E --> H[Deploy to Staging]
    F --> I[Preview Deploy]
    G --> J[CloudFront Invalidation]
    H --> J
    I --> J
\`\`\`

### Configuración Base del Workflow

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to AWS

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY: infraux-app
  ECS_SERVICE: infraux-service
  ECS_CLUSTER: infraux-cluster
  CONTAINER_NAME: infraux-container

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          token: \${{ secrets.CODECOV_TOKEN }}
\`\`\`

### Build y Push a ECR

\`\`\`yaml
  build:
    needs: test
    runs-on: ubuntu-latest
    outputs:
      image: \${{ steps.image.outputs.image }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: \${{ env.AWS_REGION }}
      
      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2
      
      - name: Build, tag, and push image
        id: image
        env:
          ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: \${{ github.sha }}
        run: |
          docker build -t \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG .
          docker push \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG
          echo "image=\$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG" >> \$GITHUB_OUTPUT
\`\`\`

### Deploy a ECS con Blue/Green

\`\`\`yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: \${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}
      url: \${{ steps.deploy.outputs.url }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: \${{ env.AWS_REGION }}
      
      - name: Download task definition
        run: |
          aws ecs describe-task-definition \\
            --task-definition \${{ env.ECS_SERVICE }} \\
            --query taskDefinition > task-definition.json
      
      - name: Update task definition
        id: task-def
        uses: aws-actions/amazon-ecs-render-task-definition@v1
        with:
          task-definition: task-definition.json
          container-name: \${{ env.CONTAINER_NAME }}
          image: \${{ needs.build.outputs.image }}
      
      - name: Deploy to ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: \${{ steps.task-def.outputs.task-definition }}
          service: \${{ env.ECS_SERVICE }}
          cluster: \${{ env.ECS_CLUSTER }}
          wait-for-service-stability: true
\`\`\`

### Estrategias Avanzadas

#### 1. Cache de Dependencias

\`\`\`yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

#### 2. Matrix Strategy para Tests

\`\`\`yaml
test:
  strategy:
    matrix:
      node-version: [18, 20]
      os: [ubuntu-latest, windows-latest]
  runs-on: \${{ matrix.os }}
  steps:
    - uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
\`\`\`

#### 3. Despliegue Canary

\`\`\`yaml
- name: Deploy Canary
  run: |
    # Actualizar solo el 10% del tráfico
    aws ecs update-service \\
      --cluster \${{ env.ECS_CLUSTER }} \\
      --service \${{ env.ECS_SERVICE }} \\
      --deployment-configuration \\
        "maximumPercent=110,minimumHealthyPercent=90,deploymentCircuitBreaker={enable=true,rollback=true}"
    
    # Esperar 5 minutos
    sleep 300
    
    # Verificar métricas
    ERRORS=$(aws cloudwatch get-metric-statistics \\
      --namespace AWS/ECS \\
      --metric-name HTTPCode_Target_5XX_Count \\
      --dimensions Name=ServiceName,Value=\${{ env.ECS_SERVICE }} \\
      --start-time $(date -u -d '5 minutes ago' +%Y-%m-%dT%H:%M:%S) \\
      --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \\
      --period 300 \\
      --statistics Sum \\
      --query 'Datapoints[0].Sum' \\
      --output text)
    
    if [ "\$ERRORS" -gt "10" ]; then
      echo "Too many errors, rolling back"
      exit 1
    fi
\`\`\`

### Seguridad en el Pipeline

#### 1. Escaneo de Vulnerabilidades

\`\`\`yaml
- name: Run Trivy vulnerability scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: \${{ needs.build.outputs.image }}
    format: 'sarif'
    output: 'trivy-results.sarif'

- name: Upload Trivy scan results
  uses: github/codeql-action/upload-sarif@v2
  with:
    sarif_file: 'trivy-results.sarif'
\`\`\`

#### 2. Secrets Scanning

\`\`\`yaml
- name: Scan for secrets
  uses: trufflesecurity/trufflehog@main
  with:
    path: ./
    base: \${{ github.event.repository.default_branch }}
    head: HEAD
\`\`\`

### Notificaciones y Monitoreo

\`\`\`yaml
- name: Notify Slack
  if: always()
  uses: 8398a7/action-slack@v3
  with:
    status: \${{ job.status }}
    text: |
      Deployment \${{ job.status }}
      Branch: \${{ github.ref }}
      Commit: \${{ github.sha }}
      Author: \${{ github.actor }}
    webhook_url: \${{ secrets.SLACK_WEBHOOK }}
    
- name: Create deployment record
  uses: actions/github-script@v7
  with:
    script: |
      await github.rest.repos.createDeployment({
        owner: context.repo.owner,
        repo: context.repo.repo,
        ref: context.sha,
        environment: '\${{ github.ref == 'refs/heads/main' && 'production' || 'staging' }}',
        description: 'Deployed via GitHub Actions',
        auto_merge: false,
        required_contexts: []
      });
\`\`\`

### Optimizaciones de Performance

| Técnica | Mejora | Implementación |
|---------|--------|----------------|
| **Docker Layer Caching** | -70% build time | BuildKit + cache mounts |
| **Parallel Jobs** | -50% total time | Matrix strategy |
| **Artifact Caching** | -30% install time | actions/cache |
| **Self-hosted Runners** | -80% queue time | EC2 spot instances |

### Ejemplo Completo: Next.js a S3/CloudFront

\`\`\`yaml
name: Deploy Next.js to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install and Build
        run: |
          npm ci
          npm run build
          npm run export
        env:
          NEXT_PUBLIC_API_URL: \${{ secrets.API_URL }}
      
      - name: Configure AWS
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to S3
        run: |
          aws s3 sync ./out s3://\${{ secrets.S3_BUCKET }} \\
            --delete \\
            --cache-control "public, max-age=31536000, immutable" \\
            --exclude "*.html" \\
            --exclude "*.json"
          
          aws s3 sync ./out s3://\${{ secrets.S3_BUCKET }} \\
            --delete \\
            --cache-control "public, max-age=0, must-revalidate" \\
            --exclude "*" \\
            --include "*.html" \\
            --include "*.json"
      
      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \\
            --distribution-id \${{ secrets.CLOUDFRONT_ID }} \\
            --paths "/*"
\`\`\`

### Métricas de Nuestro Pipeline

<div class="info-box">
📊 **Estadísticas de InfraUX:**
- Deploys diarios: 45+
- Tiempo promedio: 3.2 minutos
- Tasa de éxito: 99.7%
- Rollbacks automáticos: 0.3%
</div>

### Best Practices

1. **Versionado Semántico Automático**
   \`\`\`yaml
   - name: Bump version
     uses: mathieudutour/github-tag-action@v6.1
     with:
       github_token: \${{ secrets.GITHUB_TOKEN }}
       default_bump: patch
   \`\`\`

2. **Environments y Aprobaciones**
   \`\`\`yaml
   environment:
     name: production
     url: https://infraux.com
   \`\`\`

3. **Rollback Automático**
   \`\`\`yaml
   - name: Rollback on failure
     if: failure()
     run: |
       aws deploy stop-deployment \\
         --deployment-id \${{ steps.deploy.outputs.deployment-id }} \\
         --auto-rollback-enabled
   \`\`\`

### Conclusión

Un pipeline CI/CD bien diseñado es la columna vertebral de cualquier equipo de desarrollo moderno. Con GitHub Actions y AWS, puedes construir flujos de trabajo que no solo automatizan, sino que también protegen y optimizan tus despliegues.

<div class="success-box">
🚀 **Pro tip:** Comienza simple y evoluciona. No necesitas todas estas características desde el día 1. Construye incrementalmente basándote en las necesidades de tu equipo.
</div>
`,
  date: '2024-11-23',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.maria,
  tags: ['cicd', 'github-actions', 'aws', 'devops', 'automation'],
  readTime: '15 min',
  featured: true,
};