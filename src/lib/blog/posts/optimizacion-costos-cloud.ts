import { BlogPost } from '../types';
import { authors } from '../authors';

export const optimizacionCostosCloud: BlogPost = {
  id: 'optimizacion-costos-cloud-guia-completa',
  title: 'Optimización de Costos Cloud: Ahorra 40% o Más',
  excerpt: 'Estrategias probadas para reducir costos en AWS, Azure y GCP. Casos reales donde ahorramos millones en infraestructura cloud.',
  content: `
## La Guía Definitiva para Optimizar Costos en la Nube

En InfraUX hemos ayudado a empresas a ahorrar más de $2M anuales en costos cloud. Estas son las estrategias que funcionan.

### El Problema: Por Qué las Facturas Se Disparan

<div class="warning-box">
⚠️ **Dato alarmante**: El 35% del gasto cloud es desperdicio puro. Recursos no utilizados, sobredimensionamiento y falta de gobernanza.
</div>

### Análisis de Costos: El Primer Paso

#### 1. Herramientas de Análisis por Proveedor

| Herramienta | AWS | Azure | GCP |
|-------------|-----|-------|-----|
| **Nativa** | Cost Explorer | Cost Management | Cost Management |
| **Recomendaciones** | Trusted Advisor | Advisor | Recommender |
| **Budgets** | AWS Budgets | Cost Alerts | Budget Alerts |
| **Tags** | Cost Allocation Tags | Cost Tags | Labels |

#### 2. Script Multi-Cloud para Análisis

\`\`\`python
# cloud_cost_analyzer.py
import boto3
import pandas as pd
from azure.mgmt.costmanagement import CostManagementClient
from google.cloud import billing_v1

class CloudCostAnalyzer:
    def __init__(self):
        self.aws_ce = boto3.client('ce')
        self.azure_client = CostManagementClient(credential, subscription_id)
        self.gcp_client = billing_v1.CloudBillingClient()
    
    def get_monthly_costs(self, months=6):
        costs = {
            'aws': self._get_aws_costs(months),
            'azure': self._get_azure_costs(months),
            'gcp': self._get_gcp_costs(months)
        }
        return pd.DataFrame(costs)
    
    def find_waste(self):
        waste = {
            'unattached_volumes': self._find_unattached_volumes(),
            'idle_instances': self._find_idle_instances(),
            'oversized_instances': self._find_oversized_instances(),
            'old_snapshots': self._find_old_snapshots(),
            'unused_ips': self._find_unused_elastic_ips()
        }
        return waste
    
    def calculate_savings_potential(self, waste):
        total_savings = 0
        for category, items in waste.items():
            for item in items:
                total_savings += item['monthly_cost']
        return total_savings
\`\`\`

### Estrategias de Optimización por Categoría

#### 1. Compute (EC2/VMs/Compute Engine)

**Rightsizing Automático**
\`\`\`bash
# AWS - Análisis de utilización
aws cloudwatch get-metric-statistics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\
  --statistics Average \\
  --start-time 2024-01-01T00:00:00Z \\
  --end-time 2024-01-31T23:59:59Z \\
  --period 3600
\`\`\`

**Recomendaciones de Rightsizing**
| Utilización CPU | Utilización Memoria | Acción Recomendada | Ahorro Potencial |
|-----------------|--------------------|--------------------|------------------|
| < 20% | < 30% | Reducir 2 tamaños | 50-60% |
| < 40% | < 50% | Reducir 1 tamaño | 25-30% |
| > 80% | > 80% | Considerar aumentar | -20% (evita problemas) |

#### 2. Reserved Instances vs Savings Plans vs Spot

\`\`\`python
# savings_calculator.py
class SavingsCalculator:
    def __init__(self, usage_data):
        self.usage = usage_data
        self.on_demand_rates = self._load_rates()
    
    def calculate_best_option(self):
        options = {
            'on_demand': self._calculate_on_demand(),
            'reserved_1yr': self._calculate_reserved(term=1),
            'reserved_3yr': self._calculate_reserved(term=3),
            'savings_plan': self._calculate_savings_plan(),
            'spot': self._calculate_spot()
        }
        
        # Análisis de riesgo vs ahorro
        for option, data in options.items():
            data['risk_score'] = self._calculate_risk(option)
            data['savings_percentage'] = (
                (options['on_demand']['cost'] - data['cost']) / 
                options['on_demand']['cost'] * 100
            )
        
        return options
\`\`\`

**Matriz de Decisión**
| Carga de Trabajo | Mejor Opción | Ahorro | Riesgo |
|------------------|--------------|--------|--------|
| **Producción 24/7** | Reserved 3yr | 72% | Bajo |
| **Dev/Test** | Spot + On-Demand | 60-90% | Medio |
| **Variable** | Savings Plans | 40-50% | Bajo |
| **Batch Processing** | Spot | 90% | Alto |

#### 3. Storage Optimization

**Lifecycle Policies Inteligentes**
\`\`\`yaml
# s3-lifecycle-policy.yaml
Rules:
  - Id: ArchiveOldLogs
    Status: Enabled
    Transitions:
      - Days: 30
        StorageClass: STANDARD_IA
      - Days: 90
        StorageClass: GLACIER
      - Days: 365
        StorageClass: DEEP_ARCHIVE
    NoncurrentVersionTransitions:
      - Days: 7
        StorageClass: STANDARD_IA
    AbortIncompleteMultipartUpload:
      DaysAfterInitiation: 7
  
  - Id: DeleteOldVersions
    Status: Enabled
    NoncurrentVersionExpiration:
      NoncurrentDays: 30
    ExpiredObjectDeleteMarker: true
\`\`\`

**Comparación de Clases de Storage**
| Clase | AWS S3 | Azure Blob | GCP Storage | Uso Ideal |
|-------|--------|------------|-------------|-----------|
| **Hot** | Standard | Hot | Standard | Acceso frecuente |
| **Warm** | Standard-IA | Cool | Nearline | Acceso mensual |
| **Cold** | Glacier | Archive | Coldline | Acceso anual |
| **Archive** | Deep Archive | - | Archive | Backup largo plazo |

#### 4. Database Optimization

\`\`\`sql
-- Identificar queries costosas en RDS
SELECT 
    query,
    calls,
    total_time,
    mean_time,
    (total_time / sum(total_time) OVER ()) * 100 as percentage_total_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 20;
\`\`\`

**Estrategias de Optimización DB**
\`\`\`python
# db_optimizer.py
class DatabaseOptimizer:
    def analyze_usage_patterns(self, db_instance):
        patterns = {
            'peak_hours': self._identify_peak_hours(),
            'idle_periods': self._identify_idle_periods(),
            'query_patterns': self._analyze_query_patterns(),
            'storage_growth': self._analyze_storage_growth()
        }
        
        recommendations = []
        
        # Auto-pause para dev/test
        if patterns['idle_periods'] > 8:
            recommendations.append({
                'action': 'Enable Aurora Serverless v2',
                'savings': '40-60%',
                'implementation': 'aurora_serverless_config.tf'
            })
        
        # Read replicas vs caching
        if patterns['read_write_ratio'] > 5:
            recommendations.append({
                'action': 'Implement ElastiCache',
                'savings': '30-40%',
                'implementation': 'elasticache_redis.tf'
            })
        
        return recommendations
\`\`\`

### Automatización de Optimización

#### 1. Auto-Scaling Inteligente

\`\`\`yaml
# k8s-vpa-config.yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: app-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app
  updatePolicy:
    updateMode: "Auto"
  resourcePolicy:
    containerPolicies:
    - containerName: app
      minAllowed:
        cpu: 100m
        memory: 128Mi
      maxAllowed:
        cpu: 2
        memory: 2Gi
      controlledResources: ["cpu", "memory"]
\`\`\`

#### 2. Spot Instance Automation

\`\`\`python
# spot_fleet_manager.py
import boto3
from datetime import datetime, timedelta

class SpotFleetManager:
    def __init__(self):
        self.ec2 = boto3.client('ec2')
        self.cloudwatch = boto3.client('cloudwatch')
    
    def create_diversified_fleet(self, base_capacity):
        # Diversificar entre tipos de instancia y AZs
        instance_types = ['t3.large', 't3a.large', 't2.large']
        azs = ['us-east-1a', 'us-east-1b', 'us-east-1c']
        
        launch_specs = []
        for instance_type in instance_types:
            for az in azs:
                launch_specs.append({
                    'InstanceType': instance_type,
                    'SpotPrice': self._get_bid_price(instance_type),
                    'Placement': {'AvailabilityZone': az},
                    'WeightedCapacity': 1.0
                })
        
        response = self.ec2.request_spot_fleet(
            SpotFleetRequestConfig={
                'AllocationStrategy': 'diversified',
                'TargetCapacity': base_capacity,
                'LaunchSpecifications': launch_specs,
                'ReplaceUnhealthyInstances': True,
                'InstanceInterruptionBehavior': 'terminate',
                'Type': 'maintain'
            }
        )
        return response
\`\`\`

### Casos de Éxito Reales

#### Caso 1: E-commerce - Ahorro 45%

**Antes:**
- 50 instancias m5.xlarge 24/7
- 10TB S3 Standard
- 5 RDS db.r5.2xlarge Multi-AZ
- **Costo mensual: $28,000**

**Optimización:**
- Reserved Instances 3 años: -60%
- Auto-scaling 20-50 instancias: -30%
- S3 Intelligent Tiering: -40%
- Aurora Serverless para dev: -70%
- **Nuevo costo: $15,400 (-45%)**

#### Caso 2: SaaS B2B - Ahorro 52%

\`\`\`python
# Implementación real
optimizations = {
    'compute': {
        'before': 'On-demand c5.4xlarge x 20',
        'after': 'Mix: 10 RI + 10 Spot',
        'savings': '$8,000/mes'
    },
    'storage': {
        'before': '50TB EBS gp2',
        'after': '30TB gp3 + 20TB sc1',
        'savings': '$2,000/mes'
    },
    'network': {
        'before': 'NAT Gateway x 3 AZ',
        'after': 'NAT Instance + VPC Endpoints',
        'savings': '$1,500/mes'
    }
}
\`\`\`

### Herramientas de Monitoreo Continuo

#### Dashboard de Costos

\`\`\`javascript
// cost-dashboard.js
const CostDashboard = {
  metrics: [
    {
      name: 'Daily Spend',
      query: 'SELECT SUM(cost) FROM aws_costs WHERE date = CURRENT_DATE',
      threshold: 1000,
      alert: true
    },
    {
      name: 'Unutilized Resources',
      query: 'SELECT * FROM resources WHERE utilization < 10',
      action: 'terminate_or_rightsize'
    },
    {
      name: 'Forecast',
      query: 'SELECT FORECAST(cost, 30) FROM costs',
      visualization: 'line_chart'
    }
  ],
  
  automations: [
    {
      trigger: 'utilization < 20% for 7 days',
      action: 'recommend_downsize',
      approval: 'required'
    },
    {
      trigger: 'unattached_volume',
      action: 'snapshot_and_delete',
      approval: 'automatic'
    }
  ]
};
\`\`\`

### ROI de la Optimización

| Inversión | Tiempo | Ahorro Año 1 | ROI |
|-----------|--------|--------------|-----|
| **Análisis Inicial** | 2 semanas | $50,000 | 500% |
| **Automatización** | 1 mes | $120,000 | 300% |
| **Governance** | Continuo | $200,000+ | 400% |

### Plan de Acción: 30 Días para Reducir 40%

<div class="success-box">
✅ **Semana 1**: Análisis y Quick Wins
- Eliminar recursos no utilizados
- Apagar ambientes de desarrollo fuera de horario
- Identificar instancias sobredimensionadas
</div>

<div class="success-box">
✅ **Semana 2**: Implementar Reservations
- Analizar patrones de uso estable
- Comprar Reserved Instances o Savings Plans
- Configurar alertas de presupuesto
</div>

<div class="success-box">
✅ **Semana 3**: Optimización de Storage
- Implementar lifecycle policies
- Mover datos fríos a clases económicas
- Eliminar snapshots antiguos
</div>

<div class="success-box">
✅ **Semana 4**: Automatización
- Implementar auto-scaling
- Configurar schedules de on/off
- Establecer políticas de tagging
</div>

### Conclusión

La optimización de costos no es un proyecto único, es una práctica continua. Con las herramientas y estrategias correctas, reducir costos en 40% o más no solo es posible, es esperado.

En InfraUX, automatizamos todo este proceso. Nuestros clientes ahorran en promedio 45% en sus facturas cloud, sin sacrificar performance o disponibilidad.
`,
  date: '2024-11-26',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.maria,
  tags: ['cloud', 'costos', 'optimizacion', 'aws', 'azure', 'gcp'],
  readTime: '22 min',
  featured: true,
};