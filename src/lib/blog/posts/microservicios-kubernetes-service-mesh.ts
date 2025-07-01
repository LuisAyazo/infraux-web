import { BlogPost } from '../types';
import { authors } from '../authors';

export const microserviciosKubernetesServiceMesh: BlogPost = {
  id: 'microservicios-kubernetes-service-mesh',
  title: 'Microservicios en Kubernetes con Service Mesh',
  excerpt: 'Guía completa para implementar microservicios en Kubernetes usando Istio. Desde la arquitectura hasta la implementación en producción.',
  content: `
## Microservicios: De la Teoría a la Práctica con Kubernetes e Istio

Después de migrar monolitos a microservicios en múltiples empresas, estas son las lecciones más valiosas que hemos aprendido.

### ¿Por Qué Microservicios?

| Ventajas | Desventajas |
|----------|-------------|
| ✅ Escalabilidad independiente | ❌ Complejidad operacional |
| ✅ Despliegues independientes | ❌ Latencia de red |
| ✅ Tecnologías heterogéneas | ❌ Debugging distribuido |
| ✅ Equipos autónomos | ❌ Consistencia de datos |

### Arquitectura de Referencia

\`\`\`yaml
# namespace.yaml - Organización por dominios
apiVersion: v1
kind: Namespace
metadata:
  name: ecommerce
  labels:
    istio-injection: enabled
---
apiVersion: v1
kind: Namespace
metadata:
  name: payments
  labels:
    istio-injection: enabled
---
apiVersion: v1
kind: Namespace
metadata:
  name: inventory
  labels:
    istio-injection: enabled
\`\`\`

### Microservicio Base con Spring Boot

\`\`\`java
// OrderService.java
@RestController
@RequestMapping("/api/v1/orders")
@Slf4j
public class OrderController {
    
    private final OrderService orderService;
    private final PaymentClient paymentClient;
    private final InventoryClient inventoryClient;
    private final MeterRegistry meterRegistry;
    
    @PostMapping
    @CircuitBreaker(name = "order-creation", fallbackMethod = "createOrderFallback")
    @Retry(name = "order-creation")
    @Timed(value = "order.creation.time", description = "Time taken to create order")
    public ResponseEntity<OrderResponse> createOrder(@Valid @RequestBody OrderRequest request) {
        
        // Distributed tracing
        Span span = tracer.currentSpan();
        span.tag("order.items.count", String.valueOf(request.getItems().size()));
        
        try {
            // Verificar inventario
            CompletableFuture<InventoryResponse> inventoryFuture = 
                CompletableFuture.supplyAsync(() -> 
                    inventoryClient.checkAvailability(request.getItems())
                );
            
            // Validar pago
            CompletableFuture<PaymentValidation> paymentFuture = 
                CompletableFuture.supplyAsync(() -> 
                    paymentClient.validatePaymentMethod(request.getPaymentInfo())
                );
            
            // Esperar respuestas
            CompletableFuture.allOf(inventoryFuture, paymentFuture).join();
            
            if (!inventoryFuture.get().isAvailable()) {
                throw new InsufficientInventoryException();
            }
            
            // Crear orden
            Order order = orderService.createOrder(request);
            
            // Publicar evento
            eventPublisher.publishEvent(new OrderCreatedEvent(order));
            
            // Métricas
            meterRegistry.counter("orders.created", "status", "success").increment();
            
            return ResponseEntity.ok(OrderResponse.from(order));
            
        } catch (Exception e) {
            meterRegistry.counter("orders.created", "status", "failure").increment();
            span.error(e);
            throw new OrderCreationException("Failed to create order", e);
        }
    }
    
    // Fallback method
    public ResponseEntity<OrderResponse> createOrderFallback(OrderRequest request, Exception ex) {
        log.error("Order creation failed, executing fallback", ex);
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
            .body(OrderResponse.fallback());
    }
}
\`\`\`

### Configuración de Istio Service Mesh

\`\`\`yaml
# istio-gateway.yaml
apiVersion: networking.istio.io/v1beta1
kind: Gateway
metadata:
  name: ecommerce-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "api.infraux.com"
  - port:
      number: 443
      name: https
      protocol: HTTPS
    tls:
      mode: SIMPLE
      credentialName: api-tls-cert
    hosts:
    - "api.infraux.com"
---
# Virtual Service
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: ecommerce-routes
spec:
  hosts:
  - "api.infraux.com"
  gateways:
  - ecommerce-gateway
  http:
  - match:
    - uri:
        prefix: "/api/v1/orders"
    route:
    - destination:
        host: order-service.ecommerce.svc.cluster.local
        port:
          number: 8080
      weight: 100
  - match:
    - uri:
        prefix: "/api/v1/payments"
    route:
    - destination:
        host: payment-service.payments.svc.cluster.local
        port:
          number: 8080
\`\`\`

### Traffic Management Avanzado

#### 1. Canary Deployments

\`\`\`yaml
# canary-deployment.yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service-canary
spec:
  hosts:
  - order-service
  http:
  - match:
    - headers:
        canary:
          exact: "true"
    route:
    - destination:
        host: order-service
        subset: v2
  - route:
    - destination:
        host: order-service
        subset: v1
      weight: 90
    - destination:
        host: order-service
        subset: v2
      weight: 10
---
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: order-service-destination
spec:
  host: order-service
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
    trafficPolicy:
      connectionPool:
        tcp:
          maxConnections: 10
        http:
          http1MaxPendingRequests: 5
          http2MaxRequests: 10
\`\`\`

#### 2. Circuit Breaker y Retry

\`\`\`yaml
# resilience-config.yaml
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: payment-service-circuit-breaker
spec:
  host: payment-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 50
        http2MaxRequests: 100
        maxRequestsPerConnection: 2
    outlierDetection:
      consecutiveErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
      minHealthPercent: 30
      splitExternalLocalOriginErrors: true
---
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: payment-service-retry
spec:
  hosts:
  - payment-service
  http:
  - retries:
      attempts: 3
      perTryTimeout: 5s
      retryOn: 5xx,reset,connect-failure,refused-stream
    timeout: 15s
    route:
    - destination:
        host: payment-service
\`\`\`

### Seguridad con mTLS

\`\`\`yaml
# mtls-policy.yaml
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system
spec:
  mtls:
    mode: STRICT
---
# Authorization Policy
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: order-service-authz
  namespace: ecommerce
spec:
  selector:
    matchLabels:
      app: order-service
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/frontend/sa/webapp"]
    to:
    - operation:
        methods: ["GET", "POST"]
        paths: ["/api/v1/orders/*"]
  - from:
    - source:
        namespaces: ["payments"]
    to:
    - operation:
        methods: ["GET"]
        paths: ["/api/v1/orders/*/status"]
\`\`\`

### Observabilidad Distribuida

#### 1. Distributed Tracing

\`\`\`javascript
// tracing-middleware.js
const opentelemetry = require('@opentelemetry/api');
const { W3CTraceContextPropagator } = require('@opentelemetry/core');

class TracingMiddleware {
  constructor() {
    this.tracer = opentelemetry.trace.getTracer('order-service', '1.0.0');
    this.propagator = new W3CTraceContextPropagator();
  }
  
  middleware() {
    return async (req, res, next) => {
      // Extraer contexto del header
      const parentContext = this.propagator.extract(
        opentelemetry.context.active(),
        req.headers
      );
      
      // Crear nuevo span
      const span = this.tracer.startSpan(
        \`\${req.method} \${req.path}\`,
        {
          kind: opentelemetry.SpanKind.SERVER,
          attributes: {
            'http.method': req.method,
            'http.url': req.url,
            'http.target': req.path,
            'http.host': req.hostname,
            'http.scheme': req.protocol,
            'http.user_agent': req.get('user-agent'),
          }
        },
        parentContext
      );
      
      // Propagar contexto
      req.span = span;
      req.traceId = span.spanContext().traceId;
      
      // Agregar trace ID a logs
      req.log = (level, message, meta = {}) => {
        logger[level](message, {
          ...meta,
          traceId: req.traceId,
          spanId: span.spanContext().spanId,
          service: 'order-service'
        });
      };
      
      // Continuar
      res.on('finish', () => {
        span.setAttributes({
          'http.status_code': res.statusCode,
          'http.response.size': res.get('content-length') || 0
        });
        
        if (res.statusCode >= 400) {
          span.setStatus({
            code: opentelemetry.SpanStatusCode.ERROR,
            message: \`HTTP \${res.statusCode}\`
          });
        }
        
        span.end();
      });
      
      next();
    };
  }
}
\`\`\`

#### 2. Métricas Personalizadas

\`\`\`go
// metrics.go
package main

import (
    "github.com/prometheus/client_golang/prometheus"
    "github.com/prometheus/client_golang/prometheus/promauto"
)

var (
    ordersProcessed = promauto.NewCounterVec(
        prometheus.CounterOpts{
            Name: "orders_processed_total",
            Help: "Total number of processed orders",
        },
        []string{"status", "payment_method"},
    )
    
    orderProcessingDuration = promauto.NewHistogramVec(
        prometheus.HistogramOpts{
            Name:    "order_processing_duration_seconds",
            Help:    "Time taken to process orders",
            Buckets: prometheus.ExponentialBuckets(0.001, 2, 10),
        },
        []string{"service"},
    )
    
    inventoryLevel = promauto.NewGaugeVec(
        prometheus.GaugeOpts{
            Name: "inventory_level",
            Help: "Current inventory levels",
        },
        []string{"product_id", "warehouse"},
    )
)

func processOrder(order Order) error {
    timer := prometheus.NewTimer(orderProcessingDuration.WithLabelValues("order-service"))
    defer timer.ObserveDuration()
    
    // Procesar orden
    err := orderService.Process(order)
    
    if err != nil {
        ordersProcessed.WithLabelValues("failed", order.PaymentMethod).Inc()
        return err
    }
    
    ordersProcessed.WithLabelValues("success", order.PaymentMethod).Inc()
    return nil
}
\`\`\`

### Service Mesh Patterns

#### 1. Sidecar Pattern

\`\`\`yaml
# deployment-with-sidecar.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  template:
    metadata:
      annotations:
        sidecar.istio.io/inject: "true"
        sidecar.istio.io/proxyCPU: "100m"
        sidecar.istio.io/proxyMemory: "128Mi"
    spec:
      containers:
      - name: order-service
        image: infraux/order-service:v2.1.0
        ports:
        - containerPort: 8080
        env:
        - name: JAEGER_AGENT_HOST
          value: "localhost"
        - name: JAEGER_AGENT_PORT
          value: "6831"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

### Testing de Microservicios

\`\`\`javascript
// integration-test.js
const { ServiceMesh } = require('@infraux/testing');

describe('Order Service Integration', () => {
  let mesh;
  
  beforeAll(async () => {
    mesh = new ServiceMesh({
      services: [
        { name: 'order-service', port: 8080 },
        { name: 'payment-service', port: 8081 },
        { name: 'inventory-service', port: 8082 }
      ]
    });
    
    await mesh.start();
  });
  
  afterAll(async () => {
    await mesh.stop();
  });
  
  test('should create order with payment and inventory check', async () => {
    // Mock responses
    mesh.mock('payment-service', '/validate', {
      status: 200,
      body: { valid: true, transactionId: '12345' }
    });
    
    mesh.mock('inventory-service', '/check', {
      status: 200,
      body: { available: true, items: [{ id: 'SKU123', quantity: 10 }] }
    });
    
    // Test order creation
    const response = await mesh.request('order-service', {
      method: 'POST',
      path: '/api/v1/orders',
      body: {
        items: [{ productId: 'SKU123', quantity: 2 }],
        paymentInfo: { method: 'credit_card', token: 'tok_123' }
      }
    });
    
    expect(response.status).toBe(201);
    expect(response.body.orderId).toBeDefined();
    
    // Verify interactions
    expect(mesh.interactions('payment-service')).toHaveLength(1);
    expect(mesh.interactions('inventory-service')).toHaveLength(1);
  });
});
\`\`\`

### Mejores Prácticas

<div class="info-box">
💡 **Domain-Driven Design**: Organiza microservicios alrededor de dominios de negocio, no capas técnicas.
</div>

<div class="warning-box">
⚠️ **Evita Distributed Monolith**: Si todos tus servicios se despliegan juntos, no tienes microservicios.
</div>

<div class="success-box">
✅ **API First**: Define contratos API antes de implementar. Usa OpenAPI/AsyncAPI.
</div>

### Métricas de Éxito

| Métrica | Antes (Monolito) | Después (Microservicios) |
|---------|------------------|--------------------------|
| **Deploy Frequency** | 1/mes | 50+/día |
| **Lead Time** | 3 semanas | 2 horas |
| **MTTR** | 4 horas | 15 minutos |
| **Change Failure Rate** | 15% | 2% |

### Conclusión

Los microservicios no son una bala de plata. Son una herramienta poderosa cuando se usan correctamente, pero requieren madurez organizacional y técnica. Con Kubernetes e Istio, puedes construir arquitecturas resilientes y escalables que realmente entreguen valor.

En InfraUX, simplificamos esta complejidad para que puedas enfocarte en tu lógica de negocio, no en la infraestructura.
`,
  date: '2024-11-28',
  week: 4,
  month: 'Noviembre',
  year: 2024,
  category: 'Técnico',
  author: authors.diego,
  tags: ['microservicios', 'kubernetes', 'istio', 'service-mesh', 'arquitectura'],
  readTime: '30 min',
  featured: false,
};