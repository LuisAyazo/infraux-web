import { BlogPost } from '../types';
import { authors } from '../authors';

export const kubernetesProduccionMejoresPracticas: BlogPost = {
  id: 'kubernetes-produccion-mejores-practicas',
  title: 'Kubernetes en Producción: Guía de Mejores Prácticas',
  excerpt: 'Todo lo que aprendimos desplegando Kubernetes en producción. Desde configuración de clusters hasta monitoreo, seguridad y troubleshooting.',
  content: `
## Kubernetes en Producción: Lecciones del Campo de Batalla

Después de gestionar clusters de Kubernetes que sirven millones de requests diarios, estas son las lecciones más valiosas que hemos aprendido.

### Arquitectura del Cluster

#### Topología Recomendada

\`\`\`yaml
# cluster-topology.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    environment: production
    team: platform
---
# Separación por namespaces
namespaces:
  - kube-system       # Componentes del sistema
  - kube-public       # Recursos públicos
  - default           # No usar en producción
  - production        # Aplicaciones de producción
  - staging           # Ambiente de staging
  - monitoring        # Stack de monitoreo
  - ingress-nginx     # Controlador de ingress
  - cert-manager      # Gestión de certificados
\`\`\`

### Resource Management

#### 1. Siempre Define Limits y Requests

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
  namespace: production
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: infraux/api:v1.2.3
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        # Liveness y Readiness son críticos
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
\`\`\`

#### 2. Horizontal Pod Autoscaler

\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-server-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-server
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  # Métricas custom
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "1000"
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
      - type: Pods
        value: 4
        periodSeconds: 15
      selectPolicy: Max
\`\`\`

### Seguridad en Kubernetes

#### 1. Network Policies

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-server-netpol
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: api-server
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    # Solo permitir tráfico del ingress controller
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080
  egress:
  # Permitir DNS
  - to:
    - namespaceSelector:
        matchLabels:
          name: kube-system
    ports:
    - protocol: UDP
      port: 53
  # Permitir acceso a base de datos
  - to:
    - podSelector:
        matchLabels:
          app: postgres
    ports:
    - protocol: TCP
      port: 5432
\`\`\`

#### 2. Pod Security Standards

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: infraux/app:latest
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop:
        - ALL
    volumeMounts:
    - name: tmp
      mountPath: /tmp
    - name: cache
      mountPath: /app/cache
  volumes:
  - name: tmp
    emptyDir: {}
  - name: cache
    emptyDir: {}
\`\`\`

### Monitoreo y Observabilidad

#### Stack Completo con Prometheus

\`\`\`yaml
# prometheus-values.yaml
prometheus:
  prometheusSpec:
    retention: 30d
    storageSpec:
      volumeClaimTemplate:
        spec:
          accessModes: ["ReadWriteOnce"]
          resources:
            requests:
              storage: 100Gi
    resources:
      requests:
        memory: 2Gi
        cpu: 1
      limits:
        memory: 4Gi
        cpu: 2
    # Reglas de alerta críticas
    additionalScrapeConfigs:
    - job_name: 'kubernetes-pods'
      kubernetes_sd_configs:
      - role: pod
      relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true

alertmanager:
  config:
    route:
      group_by: ['alertname', 'cluster', 'service']
      group_wait: 10s
      group_interval: 10s
      repeat_interval: 12h
      receiver: 'slack-critical'
      routes:
      - match:
          severity: critical
        receiver: pagerduty-critical
    receivers:
    - name: 'slack-critical'
      slack_configs:
      - api_url: 'YOUR_SLACK_WEBHOOK'
        channel: '#alerts-critical'
\`\`\`

#### Dashboards Esenciales

\`\`\`json
{
  "dashboard": {
    "title": "Kubernetes Cluster Health",
    "panels": [
      {
        "title": "CPU Usage by Namespace",
        "targets": [{
          "expr": "sum(rate(container_cpu_usage_seconds_total[5m])) by (namespace)"
        }]
      },
      {
        "title": "Memory Usage by Pod",
        "targets": [{
          "expr": "sum(container_memory_working_set_bytes) by (pod, namespace)"
        }]
      },
      {
        "title": "Pod Restart Count",
        "targets": [{
          "expr": "sum(increase(kube_pod_container_status_restarts_total[1h])) by (pod)"
        }]
      }
    ]
  }
}
\`\`\`

### Gestión de Configuración

#### 1. ConfigMaps y Secrets

\`\`\`yaml
# Usar Sealed Secrets para encriptación
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  name: api-secrets
  namespace: production
spec:
  encryptedData:
    database-url: AgBvV2x5M3J0... # Encriptado
    api-key: AgCmV9x2M5K1...      # Encriptado
---
# ConfigMap para configuración no sensible
apiVersion: v1
kind: ConfigMap
metadata:
  name: api-config
data:
  config.yaml: |
    server:
      port: 8080
      timeout: 30s
    features:
      rateLimit: true
      cache: true
    redis:
      host: redis-service
      port: 6379
\`\`\`

#### 2. Helm Charts Profesionales

\`\`\`yaml
# Chart.yaml
apiVersion: v2
name: infraux-app
description: InfraUX Application Helm Chart
type: application
version: 1.0.0
appVersion: "2.1.0"

# values.yaml
replicaCount: 3

image:
  repository: infraux/app
  pullPolicy: IfNotPresent
  tag: ""  # Sobrescrito por CI/CD

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/rate-limit: "100"
  hosts:
    - host: api.infraux.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: api-tls
      hosts:
        - api.infraux.com

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 20
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80
\`\`\`

### Disaster Recovery

#### 1. Backup con Velero

\`\`\`bash
# Instalar Velero
velero install \\
  --provider aws \\
  --plugins velero/velero-plugin-for-aws:v1.5.0 \\
  --bucket velero-backups \\
  --secret-file ./credentials-velero \\
  --backup-location-config region=us-east-1 \\
  --snapshot-location-config region=us-east-1

# Crear backup schedule
velero schedule create daily-backup \\
  --schedule="0 2 * * *" \\
  --include-namespaces production,staging \\
  --ttl 720h
\`\`\`

#### 2. Multi-Region Setup

\`\`\`yaml
# Federation config para multi-region
apiVersion: v1
kind: Service
metadata:
  name: api-service
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
    service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
spec:
  type: LoadBalancer
  selector:
    app: api-server
  ports:
  - port: 443
    targetPort: 8080
\`\`\`

### Troubleshooting Avanzado

#### Comandos Esenciales

\`\`\`bash
# Debug de pods que no arrancan
kubectl describe pod <pod-name> -n production
kubectl logs <pod-name> -n production --previous

# Verificar recursos del nodo
kubectl top nodes
kubectl describe node <node-name>

# Debug de networking
kubectl exec -it <pod-name> -n production -- nslookup kubernetes.default
kubectl exec -it <pod-name> -n production -- curl -v telnet://service-name:port

# Analizar eventos del cluster
kubectl get events --sort-by='.lastTimestamp' -A

# Debug de permisos RBAC
kubectl auth can-i --list --as=system:serviceaccount:production:api-sa
\`\`\`

### Optimizaciones de Performance

| Área | Optimización | Impacto |
|------|--------------|---------|
| **Image Size** | Distroless images | -80% tamaño |
| **Startup Time** | Init containers paralelos | -50% tiempo |
| **DNS** | NodeLocal DNSCache | -90% latencia DNS |
| **Scheduling** | Pod Topology Spread | +40% disponibilidad |

### Métricas Clave para Monitorear

<div class="warning-box">
⚠️ **Alertas Críticas:**
- CPU/Memory > 80% por más de 5 minutos
- Pod restarts > 5 en 1 hora
- Node NotReady
- PVC casi lleno (>85%)
- Certificate expiration < 7 días
</div>

### Lecciones Aprendidas

<div class="info-box">
💡 **Los 5 Mandamientos de K8s en Producción:**
1. Nunca confíes en un pod sin health checks
2. Los recursos sin límites son bombas de tiempo
3. El monitoreo no es opcional, es crítico
4. Los backups no probados no son backups
5. La seguridad por defecto es insuficiente
</div>

### Herramientas Indispensables

- **kubectl-neat**: Limpia YAMLs para reutilizar
- **k9s**: Terminal UI para Kubernetes
- **stern**: Multi-pod log tailing
- **kubectx/kubens**: Cambio rápido de contexto
- **kustomize**: Gestión de configuración sin templates

Kubernetes es poderoso pero complejo. Con estas prácticas, puedes dormir tranquilo sabiendo que tu cluster está preparado para cualquier cosa.
`,
  date: '2024-11-24',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.carlos,
  tags: ['kubernetes', 'k8s', 'devops', 'containers', 'orchestration'],
  readTime: '18 min',
  featured: true,
};