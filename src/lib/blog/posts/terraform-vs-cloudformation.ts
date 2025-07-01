import { BlogPost } from '../types';
import { authors } from '../authors';

export const terraformVsCloudformation: BlogPost = {
  id: 'terraform-vs-cloudformation-cual-elegir',
  title: 'Terraform vs CloudFormation: ¿Cuál Elegir en 2024?',
  excerpt: 'Una comparación detallada entre Terraform y CloudFormation, analizando sintaxis, ecosistema, portabilidad y casos de uso ideales para cada herramienta.',
  content: `
## La Eterna Batalla: Terraform vs CloudFormation

Si trabajas con AWS, inevitablemente te enfrentarás a esta decisión: ¿Terraform o CloudFormation? Después de años usando ambas herramientas en producción, aquí está nuestra perspectiva honesta.

### Comparación Rápida

| Aspecto | Terraform | CloudFormation |
|---------|-----------|----------------|
| **Multi-cloud** | ✅ Sí | ❌ Solo AWS |
| **Sintaxis** | HCL (más legible) | JSON/YAML |
| **Estado** | Archivo externo | Gestionado por AWS |
| **Rollback** | Manual | Automático |
| **Costo** | Gratis (OSS) | Gratis |
| **Módulos** | Registry público | Limitado |

### Sintaxis: La Primera Impresión

#### CloudFormation (YAML)
\`\`\`yaml
Resources:
  WebServerInstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !Ref LatestAmiId
      InstanceType: t3.micro
      SecurityGroups:
        - !Ref WebServerSecurityGroup
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          yum update -y
          yum install -y httpd
          systemctl start httpd
          systemctl enable httpd
          echo "<h1>Hello from \${AWS::Region}</h1>" > /var/www/html/index.html
  
  WebServerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable HTTP access
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
\`\`\`

#### Terraform (HCL)
\`\`\`hcl
resource "aws_instance" "web_server" {
  ami           = data.aws_ami.latest.id
  instance_type = "t3.micro"
  
  vpc_security_group_ids = [aws_security_group.web_server.id]
  
  user_data = <<-EOF
    #!/bin/bash
    yum update -y
    yum install -y httpd
    systemctl start httpd
    systemctl enable httpd
    echo "<h1>Hello from \${data.aws_region.current.name}</h1>" > /var/www/html/index.html
  EOF
  
  tags = {
    Name = "WebServer"
  }
}

resource "aws_security_group" "web_server" {
  name        = "web-server-sg"
  description = "Enable HTTP access"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
\`\`\`

<div class="info-box">
💡 **Observación:** HCL es generalmente más conciso y legible que YAML/JSON, especialmente en configuraciones complejas.
</div>

### Gestión del Estado: La Gran Diferencia

#### CloudFormation
- Estado gestionado automáticamente por AWS
- No necesitas preocuparte por archivos de estado
- Drift detection integrado

#### Terraform
- Archivo de estado local o remoto (S3, Terraform Cloud)
- Requiere gestión cuidadosa del estado
- Posibilidad de corrupción del estado

\`\`\`hcl
# Backend remoto en S3 para Terraform
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}
\`\`\`

### Ecosistema y Módulos

#### Terraform Registry
\`\`\`hcl
# Usar un módulo del registry público
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  
  enable_nat_gateway = true
  enable_vpn_gateway = true
}
\`\`\`

#### CloudFormation Nested Stacks
\`\`\`yaml
Resources:
  VPCStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/my-bucket/vpc-template.yaml
      Parameters:
        VPCCidr: 10.0.0.0/16
        EnableNatGateway: true
\`\`\`

### Funcionalidades Avanzadas

#### 1. Condicionales

**CloudFormation:**
\`\`\`yaml
Conditions:
  CreateProdResources: !Equals [!Ref Environment, production]

Resources:
  Database:
    Type: AWS::RDS::DBInstance
    Condition: CreateProdResources
    Properties:
      DBInstanceClass: db.t3.large
\`\`\`

**Terraform:**
\`\`\`hcl
resource "aws_db_instance" "database" {
  count = var.environment == "production" ? 1 : 0
  
  instance_class = "db.t3.large"
  # ...
}
\`\`\`

#### 2. Loops y Generación Dinámica

**Terraform (más poderoso):**
\`\`\`hcl
# Crear múltiples instancias con configuración dinámica
resource "aws_instance" "web" {
  for_each = var.instance_config
  
  ami           = each.value.ami
  instance_type = each.value.type
  
  tags = {
    Name = each.key
    Type = each.value.type
  }
}

variable "instance_config" {
  default = {
    web1 = { ami = "ami-123", type = "t3.micro" }
    web2 = { ami = "ami-123", type = "t3.small" }
    web3 = { ami = "ami-456", type = "t3.medium" }
  }
}
\`\`\`

### Casos de Uso Ideales

#### Usa CloudFormation cuando:
- 🔸 Tu infraestructura es 100% AWS
- 🔸 Quieres rollbacks automáticos
- 🔸 Prefieres no gestionar estado
- 🔸 Necesitas integración profunda con AWS (StackSets, Service Catalog)
- 🔸 Tu equipo ya conoce YAML/JSON

#### Usa Terraform cuando:
- 🔹 Necesitas multi-cloud o híbrido
- 🔹 Quieres sintaxis más expresiva
- 🔹 Necesitas módulos reutilizables complejos
- 🔹 Prefieres un ecosistema más amplio
- 🔹 Planeas usar Terraform Cloud/Enterprise

### Migración Entre Herramientas

#### De CloudFormation a Terraform
\`\`\`bash
# Usar cf2tf para convertir templates
pip install cf2tf
cf2tf my-stack.yaml > my-stack.tf

# Importar recursos existentes
terraform import aws_instance.web i-1234567890abcdef0
\`\`\`

#### De Terraform a CloudFormation
\`\`\`bash
# Usar former2 para generar templates desde recursos existentes
# https://github.com/iann0036/former2
\`\`\`

### Nuestra Experiencia en InfraUX

En InfraUX soportamos ambas herramientas, pero internamente usamos Terraform por estas razones:

1. **Multi-cloud**: Necesitamos soportar AWS, Azure y GCP
2. **Modularidad**: Nuestros módulos son complejos y reutilizables
3. **Programabilidad**: HCL nos permite lógica más compleja
4. **Ecosistema**: El Terraform Registry es invaluable

### Ejemplo Real: Despliegue de EKS

**Terraform (usando módulo oficial):**
\`\`\`hcl
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.0.0"
  
  cluster_name    = "my-cluster"
  cluster_version = "1.27"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  eks_managed_node_groups = {
    general = {
      desired_size = 2
      min_size     = 1
      max_size     = 10
      
      instance_types = ["t3.large"]
    }
  }
}
\`\`\`

**CloudFormation (más verboso):**
\`\`\`yaml
# Requiere ~300 líneas de YAML para la misma funcionalidad
# Incluyendo roles IAM, security groups, node groups, etc.
\`\`\`

### Métricas de Adopción (2024)

| Métrica | Terraform | CloudFormation |
|---------|-----------|----------------|
| **Usuarios activos** | 5M+ | 2M+ |
| **Contribuidores** | 1,700+ | N/A (cerrado) |
| **Providers** | 3,000+ | 1 (AWS) |
| **Módulos públicos** | 15,000+ | ~500 |

### Conclusión

No hay una respuesta correcta universal. La elección depende de tu contexto:

<div class="success-box">
✅ **CloudFormation** es excelente si estás 100% en AWS y valoras la simplicidad operacional sobre la flexibilidad.
</div>

<div class="success-box">
✅ **Terraform** brilla cuando necesitas flexibilidad, multi-cloud, o tienes requisitos complejos de infraestructura.
</div>

En InfraUX, creemos que ambas herramientas tienen su lugar. Por eso nuestro editor visual puede exportar a ambos formatos, permitiéndote elegir la mejor herramienta para cada situación.

### Pro Tip: Usa Ambas

\`\`\`hcl
# Terraform puede gestionar stacks de CloudFormation
resource "aws_cloudformation_stack" "legacy_app" {
  name = "legacy-application"
  
  template_body = file("\${path.module}/legacy-app.yaml")
  
  parameters = {
    InstanceType = "t3.medium"
  }
}
\`\`\`

La infraestructura como código no se trata de elegir un bando, sino de usar la herramienta correcta para el trabajo correcto.
`,
  date: '2024-11-22',
  week: 3,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.carlos,
  tags: ['terraform', 'cloudformation', 'iac', 'aws', 'devops'],
  readTime: '12 min',
  featured: true,
};