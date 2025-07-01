import { BlogPost } from '../types';
import { authors } from '../authors';

export const seguridadCloudAwsAzureGcp: BlogPost = {
  id: 'seguridad-cloud-aws-azure-gcp',
  title: 'Seguridad Multi-Cloud: AWS vs Azure vs GCP',
  excerpt: 'Comparación exhaustiva de las herramientas y mejores prácticas de seguridad en las tres principales nubes públicas.',
  content: `
## Seguridad en la Nube: La Trinidad AWS, Azure y GCP

La seguridad en la nube no es opcional, es fundamental. Aquí está nuestra guía comparativa basada en implementaciones reales en las tres grandes nubes.

### Modelo de Responsabilidad Compartida

| Capa | AWS | Azure | GCP | Tu Responsabilidad |
|------|-----|-------|-----|-------------------|
| **Datos** | ❌ | ❌ | ❌ | ✅ Encriptación, clasificación |
| **Aplicación** | ❌ | ❌ | ❌ | ✅ Código seguro, patches |
| **OS/Runtime** | Depende | Depende | Depende | ✅ En IaaS, ❌ en PaaS |
| **Red Virtual** | ⚠️ | ⚠️ | ⚠️ | ✅ Configuración |
| **Hypervisor** | ✅ | ✅ | ✅ | ❌ |
| **Físico** | ✅ | ✅ | ✅ | ❌ |

### Identity & Access Management (IAM)

#### AWS IAM
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/InfraUXDeveloper"
      },
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::infraux-prod/*",
      "Condition": {
        "StringEquals": {
          "s3:x-amz-server-side-encryption": "AES256"
        },
        "IpAddress": {
          "aws:SourceIp": ["10.0.0.0/8"]
        }
      }
    }
  ]
}
\`\`\`

#### Azure RBAC
\`\`\`powershell
# Crear rol personalizado
$role = Get-AzRoleDefinition "Virtual Machine Contributor"
$role.Id = $null
$role.Name = "InfraUX VM Operator"
$role.Description = "Can manage VMs but not access them"
$role.Actions.Clear()
$role.Actions.Add("Microsoft.Compute/virtualMachines/*")
$role.Actions.Add("Microsoft.Network/networkInterfaces/*")
$role.NotActions.Add("Microsoft.Compute/virtualMachines/delete")
$role.AssignableScopes.Clear()
$role.AssignableScopes.Add("/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
New-AzRoleDefinition -Role $role
\`\`\`

#### GCP IAM
\`\`\`yaml
# custom-role.yaml
title: "InfraUX Developer"
description: "Custom role for InfraUX developers"
stage: "GA"
includedPermissions:
- compute.instances.get
- compute.instances.list
- compute.instances.start
- compute.instances.stop
- storage.buckets.get
- storage.buckets.list
- storage.objects.create
- storage.objects.delete
- storage.objects.get
- storage.objects.list
\`\`\`

### Encriptación de Datos

#### Comparación de Servicios

| Servicio | AWS | Azure | GCP |
|----------|-----|-------|-----|
| **Key Management** | KMS | Key Vault | Cloud KMS |
| **HSM** | CloudHSM | Dedicated HSM | Cloud HSM |
| **Secrets Manager** | Secrets Manager | Key Vault | Secret Manager |
| **Certificate Manager** | ACM | Key Vault | Certificate Authority Service |

#### Implementación Multi-Cloud

\`\`\`python
# encryption_wrapper.py
from abc import ABC, abstractmethod
import boto3
from azure.keyvault.secrets import SecretClient
from google.cloud import secretmanager

class CloudEncryption(ABC):
    @abstractmethod
    def encrypt(self, data: bytes, key_id: str) -> bytes:
        pass
    
    @abstractmethod
    def decrypt(self, data: bytes, key_id: str) -> bytes:
        pass

class AWSEncryption(CloudEncryption):
    def __init__(self):
        self.kms = boto3.client('kms')
    
    def encrypt(self, data: bytes, key_id: str) -> bytes:
        response = self.kms.encrypt(
            KeyId=key_id,
            Plaintext=data,
            EncryptionContext={'purpose': 'infraux-encryption'}
        )
        return response['CiphertextBlob']
    
    def decrypt(self, data: bytes, key_id: str) -> bytes:
        response = self.kms.decrypt(
            CiphertextBlob=data,
            EncryptionContext={'purpose': 'infraux-encryption'}
        )
        return response['Plaintext']

class AzureEncryption(CloudEncryption):
    def __init__(self, vault_url: str, credential):
        self.client = SecretClient(vault_url=vault_url, credential=credential)
        # Implementación con Azure Key Vault
        
class GCPEncryption(CloudEncryption):
    def __init__(self, project_id: str):
        self.client = secretmanager.SecretManagerServiceClient()
        self.project_id = project_id
        # Implementación con Cloud KMS
\`\`\`

### Network Security

#### AWS VPC Security
\`\`\`terraform
# AWS Security Groups + NACLs
resource "aws_security_group" "web_tier" {
  name_prefix = "infraux-web-"
  vpc_id      = aws_vpc.main.id
  
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_network_acl_rule" "web_ingress" {
  network_acl_id = aws_network_acl.web.id
  rule_number    = 100
  protocol       = "tcp"
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 443
  to_port        = 443
}
\`\`\`

#### Azure NSG
\`\`\`terraform
resource "azurerm_network_security_group" "web_tier" {
  name                = "infraux-web-nsg"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  
  security_rule {
    name                       = "HTTPS"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "443"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
  
  security_rule {
    name                       = "DenyAllInbound"
    priority                   = 4096
    direction                  = "Inbound"
    access                     = "Deny"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_range     = "*"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}
\`\`\`

#### GCP Firewall Rules
\`\`\`terraform
resource "google_compute_firewall" "web_tier" {
  name    = "infraux-web-firewall"
  network = google_compute_network.main.name
  
  allow {
    protocol = "tcp"
    ports    = ["443"]
  }
  
  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["web-server"]
  
  log_config {
    metadata = "INCLUDE_ALL_METADATA"
  }
}
\`\`\`

### Compliance y Auditoría

#### Herramientas Nativas

| Feature | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **Audit Logs** | CloudTrail | Activity Log | Cloud Audit Logs |
| **Compliance** | Config | Policy | Security Command Center |
| **Vulnerability Scan** | Inspector | Security Center | Security Scanner |
| **SIEM Integration** | SecurityHub | Sentinel | Chronicle |

#### Configuración Multi-Cloud con Terraform

\`\`\`hcl
# main.tf - Auditoría multi-cloud
module "aws_logging" {
  source = "./modules/aws-logging"
  
  cloudtrail_name = "infraux-audit"
  s3_bucket_name  = "infraux-audit-logs"
  enable_log_file_validation = true
  enable_logging = true
  
  event_selector {
    read_write_type           = "All"
    include_management_events = true
    
    data_resource {
      type   = "AWS::S3::Object"
      values = ["arn:aws:s3:::*/*"]
    }
  }
}

module "azure_logging" {
  source = "./modules/azure-logging"
  
  log_analytics_workspace_name = "infraux-logs"
  retention_in_days           = 90
  
  diagnostic_settings = {
    name = "infraux-audit"
    log_categories = ["Administrative", "Security", "Alert"]
  }
}

module "gcp_logging" {
  source = "./modules/gcp-logging"
  
  project_id = var.gcp_project_id
  sink_name  = "infraux-audit-sink"
  
  destination = "storage.googleapis.com/\${google_storage_bucket.audit.name}"
  filter = "severity >= WARNING"
}
\`\`\`

### Detección de Amenazas

#### AWS GuardDuty vs Azure Sentinel vs GCP Security Command Center

\`\`\`python
# threat_detection.py
import json
from datetime import datetime
from typing import List, Dict

class ThreatDetector:
    def __init__(self, cloud_provider: str):
        self.provider = cloud_provider
        self.severity_mapping = {
            'aws': {'Low': 1, 'Medium': 5, 'High': 8},
            'azure': {'Informational': 1, 'Low': 3, 'Medium': 5, 'High': 8},
            'gcp': {'LOW': 1, 'MEDIUM': 5, 'HIGH': 8, 'CRITICAL': 10}
        }
    
    def normalize_findings(self, findings: List[Dict]) -> List[Dict]:
        normalized = []
        for finding in findings:
            if self.provider == 'aws':
                normalized.append({
                    'id': finding['Id'],
                    'severity': self.severity_mapping['aws'][finding['Severity']],
                    'type': finding['Type'],
                    'resource': finding['Resource']['ResourceArn'],
                    'timestamp': finding['CreatedAt']
                })
            elif self.provider == 'azure':
                normalized.append({
                    'id': finding['name'],
                    'severity': self.severity_mapping['azure'][finding['properties']['severity']],
                    'type': finding['properties']['alertType'],
                    'resource': finding['properties']['associatedResource'],
                    'timestamp': finding['properties']['timeGenerated']
                })
            elif self.provider == 'gcp':
                normalized.append({
                    'id': finding['name'],
                    'severity': self.severity_mapping['gcp'][finding['severity']],
                    'type': finding['category'],
                    'resource': finding['resourceName'],
                    'timestamp': finding['eventTime']
                })
        return normalized
\`\`\`

### Mejores Prácticas por Servicio

#### 1. Compute Security

<div class="info-box">
💡 **AWS EC2**: Usar IMDSv2, deshabilitar puertos innecesarios, Systems Manager para patches
</div>

<div class="info-box">
💡 **Azure VM**: Habilitar Azure Security Center, usar Managed Identities, Update Management
</div>

<div class="info-box">
💡 **GCP Compute**: Shielded VMs, OS Login, automación con OS Config
</div>

#### 2. Container Security

\`\`\`yaml
# Pod Security Policy (Kubernetes)
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: infraux-restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'persistentVolumeClaim'
  hostNetwork: false
  hostIPC: false
  hostPID: false
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'RunAsAny'
  fsGroup:
    rule: 'RunAsAny'
\`\`\`

### Incident Response Plan

| Fase | AWS Tools | Azure Tools | GCP Tools |
|------|-----------|-------------|-----------|
| **Detección** | GuardDuty, SecurityHub | Sentinel, Security Center | Security Command Center |
| **Análisis** | CloudTrail, VPC Flow Logs | Log Analytics, NSG Flow Logs | Cloud Logging, VPC Flow Logs |
| **Contención** | Lambda, Systems Manager | Automation Runbooks | Cloud Functions, OS Config |
| **Erradicación** | Config Rules | Policy | Security Health Analytics |
| **Recuperación** | Backup, DR | Site Recovery | Backup and DR |

### Automatización de Seguridad

\`\`\`python
# security_automation.py
class SecurityAutomation:
    def __init__(self, cloud_providers: List[str]):
        self.providers = cloud_providers
        self.remediation_actions = {
            'public_s3_bucket': self.fix_public_s3,
            'open_security_group': self.fix_open_sg,
            'unencrypted_volume': self.encrypt_volume,
            'weak_password_policy': self.strengthen_password_policy
        }
    
    async def auto_remediate(self, finding: Dict):
        action = self.remediation_actions.get(finding['type'])
        if action:
            await action(finding)
            await self.notify_team(finding, 'auto_remediated')
        else:
            await self.notify_team(finding, 'manual_review_required')
\`\`\`

### Costos de Seguridad (Mensual)

| Servicio | AWS | Azure | GCP |
|----------|-----|-------|-----|
| **WAF** | $5 + $0.60/millón requests | $0.008/hora + $0.008/10k requests | $0.75/política + $0.75/millón requests |
| **DDoS Protection** | Shield Standard: Gratis | Basic: Gratis | Cloud Armor: $0.025/hora |
| **SIEM** | SecurityHub: $0.001/check | Sentinel: $2.46/GB | Chronicle: Contactar ventas |

### Conclusión

<div class="success-box">
✅ **Recomendación**: No hay un ganador claro. AWS tiene la suite más madura, Azure la mejor integración empresarial, y GCP la más innovadora. La clave es implementar defensa en profundidad independientemente de la nube.
</div>

La seguridad multi-cloud requiere un enfoque unificado pero con conocimiento profundo de cada plataforma. En InfraUX, abstraemos estas complejidades para que puedas enfocarte en construir, no en configurar.
`,
  date: '2024-11-25',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Seguridad',
  author: authors.luis,
  tags: ['seguridad', 'aws', 'azure', 'gcp', 'cloud-security'],
  readTime: '20 min',
  featured: true,
};