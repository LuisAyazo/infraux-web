import { BlogPost } from '../types';
import { authors } from '../authors';

export const monitoreoObservabilidadCloud: BlogPost = {
  id: 'monitoreo-observabilidad-cloud-native',
  title: 'Monitoreo y Observabilidad Cloud Native',
  excerpt: 'Implementa un stack completo de observabilidad con Prometheus, Grafana, Loki y Jaeger. Métricas, logs y traces en un solo lugar.',
  content: `
## Observabilidad: Los Tres Pilares del Monitoreo Moderno

En InfraUX, la observabilidad no es una opción, es una necesidad. Este es nuestro enfoque para implementar monitoreo completo en arquitecturas cloud native.

### Los Tres Pilares de la Observabilidad

<div class="info-box">
📊 **Métricas**: Datos numéricos agregados en el tiempo (CPU, memoria, latencia)
📝 **Logs**: Eventos discretos con contexto detallado
🔍 **Traces**: Seguimiento de requests a través de sistemas distribuidos
</div>

### Stack de Observabilidad Completo

\`\`\`yaml
# docker-compose.yml - Stack local para desarrollo
version: '3.8'

services:
  # Métricas
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/usr/share/prometheus/console_libraries'
      - '--web.console.templates=/usr/share/prometheus/consoles'
    ports:
      - "9090:9090"
  
  # Visualización
  grafana:
    image: grafana/grafana:latest
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    ports:
      - "3000:3000"
  
  # Logs
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
    volumes:
      - loki_data:/loki
  
  # Traces
  jaeger:
    image: jaegertracing/all-in-one:latest
    environment:
      - COLLECTOR_ZIPKIN_HOST_PORT=:9411
    ports:
      - "5775:5775/udp"
      - "6831:6831/udp"
      - "6832:6832/udp"
      - "5778:5778"
      - "16686:16686"
      - "14268:14268"
      - "14250:14250"
      - "9411:9411"

volumes:
  prometheus_data:
  grafana_data:
  loki_data:
\`\`\`

### Configuración de Prometheus

\`\`\`yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s
  external_labels:
    cluster: 'production'
    region: 'us-east-1'

# Alerting
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

# Rules
rule_files:
  - "alerts/*.yml"
  - "recording/*.yml"

# Scrape configs
scrape_configs:
  # Prometheus self-monitoring
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  # Node Exporter
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']
  
  # Kubernetes metrics
  - job_name: 'kubernetes-apiservers'
    kubernetes_sd_configs:
      - role: endpoints
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
      - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
        action: keep
        regex: default;kubernetes;https
  
  # Application metrics
  - job_name: 'apps'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
\`\`\`

### Instrumentación de Aplicaciones

#### 1. Métricas con Prometheus (Node.js)

\`\`\`javascript
// metrics.js
const client = require('prom-client');
const express = require('express');
const app = express();

// Crear registro
const register = new client.Registry();

// Métricas predefinidas (CPU, memoria, etc.)
client.collectDefaultMetrics({ register });

// Métricas custom
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});
register.registerMetric(httpRequestDuration);

const httpRequestTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});
register.registerMetric(httpRequestTotal);

// Middleware para tracking
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration / 1000);
    
    httpRequestTotal
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .inc();
  });
  
  next();
});

// Endpoint de métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
\`\`\`

#### 2. Logging Estructurado con Loki

\`\`\`javascript
// logging.js
const winston = require('winston');
const LokiTransport = require('winston-loki');

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { 
    service: 'api-service',
    environment: process.env.NODE_ENV 
  },
  transports: [
    new LokiTransport({
      host: 'http://loki:3100',
      labels: { job: 'api-service' },
      json: true,
      format: winston.format.json(),
      replaceTimestamp: true,
      onConnectionError: (err) => console.error(err)
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Uso
logger.info('User logged in', {
  userId: user.id,
  email: user.email,
  ip: req.ip,
  userAgent: req.headers['user-agent']
});

// Log de errores con contexto
logger.error('Database connection failed', {
  error: err.message,
  stack: err.stack,
  query: query,
  duration: Date.now() - startTime
});
\`\`\`

#### 3. Distributed Tracing con Jaeger

\`\`\`javascript
// tracing.js
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');

// Configurar provider
const provider = new NodeTracerProvider({
  resource: {
    attributes: {
      'service.name': 'api-service',
      'service.version': '1.0.0',
      'deployment.environment': process.env.NODE_ENV
    }
  }
});

// Configurar exporter
const jaegerExporter = new JaegerExporter({
  endpoint: 'http://jaeger:14268/api/traces',
});

// Agregar processor
provider.addSpanProcessor(new BatchSpanProcessor(jaegerExporter));

// Registrar provider
provider.register();

// Auto-instrumentación
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation({
      requestHook: (span, request) => {
        span.setAttributes({
          'http.request.body': JSON.stringify(request.body)
        });
      }
    }),
    new ExpressInstrumentation(),
  ],
});

// Tracing manual
const tracer = provider.getTracer('api-service');

async function processPayment(userId, amount) {
  const span = tracer.startSpan('process-payment', {
    attributes: {
      'user.id': userId,
      'payment.amount': amount,
      'payment.currency': 'USD'
    }
  });
  
  try {
    // Validación
    const validationSpan = tracer.startSpan('validate-payment', { parent: span });
    await validatePayment(userId, amount);
    validationSpan.end();
    
    // Procesamiento
    const processingSpan = tracer.startSpan('charge-payment', { parent: span });
    const result = await chargeCard(userId, amount);
    processingSpan.end();
    
    span.setStatus({ code: 1 }); // OK
    return result;
  } catch (error) {
    span.recordException(error);
    span.setStatus({ code: 2, message: error.message }); // ERROR
    throw error;
  } finally {
    span.end();
  }
}
\`\`\`

### Dashboards de Grafana

#### Dashboard de Aplicación

\`\`\`json
{
  "dashboard": {
    "title": "Application Performance",
    "panels": [
      {
        "title": "Request Rate",
        "targets": [{
          "expr": "sum(rate(http_requests_total[5m])) by (method, route)"
        }],
        "type": "graph"
      },
      {
        "title": "Response Time P95",
        "targets": [{
          "expr": "histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, route))"
        }],
        "type": "graph"
      },
      {
        "title": "Error Rate",
        "targets": [{
          "expr": "sum(rate(http_requests_total{status_code=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m]))"
        }],
        "type": "stat"
      },
      {
        "title": "Active Connections",
        "targets": [{
          "expr": "nodejs_active_handles_total"
        }],
        "type": "gauge"
      }
    ]
  }
}
\`\`\`

### Alertas Inteligentes

\`\`\`yaml
# alerts/application.yml
groups:
  - name: application
    interval: 30s
    rules:
      - alert: HighErrorRate
        expr: |
          sum(rate(http_requests_total{status_code=~"5.."}[5m])) by (service)
          /
          sum(rate(http_requests_total[5m])) by (service)
          > 0.05
        for: 5m
        labels:
          severity: critical
          team: backend
        annotations:
          summary: "High error rate on {{ $labels.service }}"
          description: "Error rate is {{ $value | humanizePercentage }} for the last 5 minutes"
          
      - alert: HighResponseTime
        expr: |
          histogram_quantile(0.95,
            sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service)
          ) > 1
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "High response time on {{ $labels.service }}"
          description: "95th percentile response time is {{ $value }}s"
          
      - alert: PodCrashLooping
        expr: |
          rate(kube_pod_container_status_restarts_total[15m]) > 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Pod {{ $labels.namespace }}/{{ $labels.pod }} is crash looping"
          description: "Pod has restarted {{ $value }} times in the last 15 minutes"
\`\`\`

### Correlación de Datos

\`\`\`javascript
// Correlación entre métricas, logs y traces
class ObservabilityContext {
  constructor() {
    this.traceId = this.generateTraceId();
  }
  
  // Agregar trace ID a logs
  enrichLog(logData) {
    return {
      ...logData,
      traceId: this.traceId,
      spanId: this.currentSpanId,
      timestamp: new Date().toISOString()
    };
  }
  
  // Agregar trace ID a métricas
  enrichMetric(labels) {
    return {
      ...labels,
      trace_id: this.traceId
    };
  }
  
  // Middleware Express
  middleware() {
    return (req, res, next) => {
      req.observability = new ObservabilityContext();
      
      // Propagar trace ID en headers
      res.setHeader('X-Trace-Id', req.observability.traceId);
      
      next();
    };
  }
}
\`\`\`

### Mejores Prácticas

| Práctica | Descripción | Beneficio |
|----------|-------------|-----------|
| **USE Method** | Utilization, Saturation, Errors | Diagnóstico rápido |
| **RED Method** | Rate, Errors, Duration | Métricas de servicio |
| **Golden Signals** | Latency, Traffic, Errors, Saturation | SLIs completos |
| **Cardinality Control** | Limitar labels únicos | Costos controlados |

### Optimización de Costos

<div class="warning-box">
⚠️ **Control de Cardinality**: Evita labels con alta cardinalidad (IDs únicos, timestamps) que pueden explotar los costos de almacenamiento.
</div>

\`\`\`javascript
// ❌ MAL: Alta cardinalidad
httpRequestTotal.labels(userId, timestamp, sessionId).inc();

// ✅ BIEN: Cardinalidad controlada
httpRequestTotal.labels(userType, endpoint, statusCode).inc();
\`\`\`

### ROI de Observabilidad

- **MTTR reducido en 70%**: De 4 horas a 1.2 horas promedio
- **Incidentes prevenidos**: 40% menos incidentes en producción
- **Ahorro en costos**: $50k/mes en tiempo de ingeniería

La observabilidad no es un gasto, es una inversión en la confiabilidad y eficiencia de tu infraestructura.
`,
  date: '2024-11-27',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.miguel,
  tags: ['monitoreo', 'observabilidad', 'prometheus', 'grafana', 'jaeger'],
  readTime: '25 min',
  featured: false,
};