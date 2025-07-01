import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  CodeBracketIcon,
  CommandLineIcon,
  BookOpenIcon,
  ServerIcon,
  KeyIcon,
  BoltIcon,
  CubeIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.api()

const apiEndpoints = [
  {
    category: 'Diagramas',
    icon: CubeIcon,
    endpoints: [
      { method: 'GET', path: '/api/v1/diagrams', description: 'Listar todos los diagramas' },
      { method: 'POST', path: '/api/v1/diagrams', description: 'Crear un nuevo diagrama' },
      { method: 'GET', path: '/api/v1/diagrams/{id}', description: 'Obtener un diagrama específico' },
      { method: 'PUT', path: '/api/v1/diagrams/{id}', description: 'Actualizar un diagrama' },
      { method: 'DELETE', path: '/api/v1/diagrams/{id}', description: 'Eliminar un diagrama' }
    ]
  },
  {
    category: 'Proyectos',
    icon: ServerIcon,
    endpoints: [
      { method: 'GET', path: '/api/v1/projects', description: 'Listar proyectos' },
      { method: 'POST', path: '/api/v1/projects', description: 'Crear proyecto' },
      { method: 'GET', path: '/api/v1/projects/{id}/environments', description: 'Listar ambientes' },
      { method: 'POST', path: '/api/v1/projects/{id}/deploy', description: 'Iniciar despliegue' }
    ]
  },
  {
    category: 'Despliegues',
    icon: BoltIcon,
    endpoints: [
      { method: 'GET', path: '/api/v1/deployments', description: 'Historial de despliegues' },
      { method: 'GET', path: '/api/v1/deployments/{id}', description: 'Estado del despliegue' },
      { method: 'POST', path: '/api/v1/deployments/{id}/rollback', description: 'Rollback de despliegue' },
      { method: 'GET', path: '/api/v1/deployments/{id}/logs', description: 'Logs del despliegue' }
    ]
  },
  {
    category: 'Recursos Cloud',
    icon: CloudIcon,
    endpoints: [
      { method: 'GET', path: '/api/v1/resources', description: 'Listar recursos' },
      { method: 'GET', path: '/api/v1/resources/costs', description: 'Análisis de costos' },
      { method: 'POST', path: '/api/v1/resources/validate', description: 'Validar configuración' },
      { method: 'GET', path: '/api/v1/resources/recommendations', description: 'Recomendaciones' }
    ]
  }
]

const apiFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Autenticación Segura',
    description: 'OAuth 2.0 y API Keys para máxima seguridad'
  },
  {
    icon: ChartBarIcon,
    title: 'Rate Limiting',
    description: '1000 requests/hora con límites personalizables'
  },
  {
    icon: ClockIcon,
    title: 'Webhooks',
    description: 'Notificaciones en tiempo real de eventos'
  },
  {
    icon: DocumentTextIcon,
    title: 'SDKs Oficiales',
    description: 'Librerías para Python, Node.js, Go y más'
  }
]

const codeExamples = [
  {
    language: 'Python',
    code: `import infraux

client = infraux.Client(api_key="your_api_key")

# Crear un nuevo diagrama
diagram = client.diagrams.create(
    name="Production Infrastructure",
    provider="aws",
    region="us-east-1"
)

# Desplegar el diagrama
deployment = client.deployments.create(
    diagram_id=diagram.id,
    environment="production"
)

print(f"Deployment started: {deployment.id}")`
  },
  {
    language: 'Node.js',
    code: `const InfraUX = require('@infraux/sdk');

const client = new InfraUX({
  apiKey: process.env.INFRAUX_API_KEY
});

// Listar todos los diagramas
const diagrams = await client.diagrams.list();

// Obtener métricas de un recurso
const metrics = await client.resources.getMetrics({
  resourceId: 'res_123456',
  timeRange: '24h'
});

console.log(metrics);`
  },
  {
    language: 'cURL',
    code: `# Autenticación con API Key
curl -X GET https://api.infraux.com/v1/diagrams \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Crear un nuevo proyecto
curl -X POST https://api.infraux.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Project",
    "description": "Production environment"
  }'`
  }
]

export default function ApiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/20 dark:from-black dark:via-slate-950 dark:to-green-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <CodeBracketIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Para Desarrolladores
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                API REST
                <span className="block gradient-text-green">
                  Poderosa y Simple
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Automatiza tus flujos de trabajo, integra InfraUX con tus sistemas y construye sobre nuestra plataforma con la API REST.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://api.infraux.com/docs"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Documentación Interactiva
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/docs/api/quickstart"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Guía de Inicio Rápido
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Características de la API
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Todo lo que necesitas para construir integraciones poderosas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Empieza en Minutos
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Ejemplos de código en tu lenguaje favorito.
              </p>
            </div>

            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <div 
                  key={example.language}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {example.language}
                    </h3>
                    <button className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                      Copiar código
                    </button>
                  </div>
                  <div className="bg-slate-900 dark:bg-black rounded-2xl p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-100 font-mono">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Endpoints Principales
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Explora los recursos disponibles en nuestra API.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {apiEndpoints.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.category}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.endpoints.map((endpoint) => (
                        <div key={endpoint.path} className="flex items-start gap-3 group">
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            endpoint.method === 'GET' 
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : endpoint.method === 'POST'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : endpoint.method === 'PUT'
                              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                          }`}>
                            {endpoint.method}
                          </span>
                          <div className="flex-1">
                            <code className="text-sm font-mono text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                              {endpoint.path}
                            </code>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                              {endpoint.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <CpuChipIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  SDKs Oficiales
                </h2>
                <p className="text-xl lg:text-2xl text-green-50 mb-10 max-w-3xl mx-auto font-medium">
                  Acelera tu desarrollo con nuestras librerías oficiales. Disponibles para los lenguajes más populares.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Python', 'Node.js', 'Go', 'Ruby', 'PHP', 'Java', '.NET'].map((lang) => (
                    <span key={lang} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-bold">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              ¿Listo para construir?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Obtén tu API Key y empieza a automatizar tu infraestructura hoy mismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Obtener API Key Gratis
                <KeyIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto?departamento=api"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Hablar con el equipo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}