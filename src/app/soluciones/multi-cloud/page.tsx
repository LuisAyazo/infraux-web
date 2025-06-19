import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CloudIcon,
  GlobeAltIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LockClosedIcon,
  ServerStackIcon,
  BoltIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Solución Multi-Cloud | InfraUX - Libertad Total en la Nube',
  description: 'Gestiona AWS, Google Cloud y Azure desde una sola plataforma. Evita vendor lock-in, optimiza costos y maximiza disponibilidad.',
  keywords: ['multi-cloud', 'aws', 'google cloud', 'azure', 'cloud agnostic', 'vendor lock-in'],
  openGraph: {
    title: 'Multi-Cloud con InfraUX',
    description: 'Una plataforma, todas las nubes',
    url: 'https://infraux.com/soluciones/multi-cloud',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const cloudProviders = [
  {
    name: 'Amazon Web Services',
    logo: '☁️',
    services: ['EC2', 'ECS', 'Lambda', 'RDS', 'S3', 'CloudFront'],
    strengths: ['Mayor catálogo de servicios', 'Madurez enterprise', 'Global reach']
  },
  {
    name: 'Google Cloud Platform',
    logo: '🌐',
    services: ['GCE', 'GKE', 'Cloud Run', 'BigQuery', 'Cloud SQL', 'Firebase'],
    strengths: ['Mejor en AI/ML', 'Kubernetes nativo', 'Análisis de datos']
  },
  {
    name: 'Microsoft Azure',
    logo: '🔷',
    services: ['VMs', 'AKS', 'Functions', 'Cosmos DB', 'Blob Storage', 'CDN'],
    strengths: ['Integración Microsoft', 'Hybrid cloud', 'Enterprise ready']
  }
]

const multiCloudBenefits = [
  {
    icon: LockClosedIcon,
    title: 'Sin Vendor Lock-in',
    description: 'Cambia de proveedor o distribuye cargas entre nubes sin reescribir código.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Optimización de Costos',
    description: 'Usa el servicio más económico de cada proveedor. Ahorra hasta 40%.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Cobertura Global',
    description: 'Despliega en las regiones más cercanas a tus usuarios, sin importar el proveedor.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Alta Disponibilidad',
    description: 'Si un proveedor falla, tu aplicación sigue funcionando en otros.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BoltIcon,
    title: 'Mejor Rendimiento',
    description: 'Usa las fortalezas de cada cloud. GPU de AWS, AI de Google, AD de Azure.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ArrowsRightLeftIcon,
    title: 'Migración Sencilla',
    description: 'Mueve workloads entre nubes con un clic. Sin downtime.',
    color: 'from-pink-500 to-rose-500'
  }
]

const multiCloudFeatures = [
  {
    category: 'Gestión Unificada',
    features: [
      'Dashboard único para todas las nubes',
      'Billing consolidado y reportes',
      'Políticas de seguridad centralizadas',
      'Monitoreo y alertas multi-cloud'
    ]
  },
  {
    category: 'Abstracción Inteligente',
    features: [
      'API unificada para todos los servicios',
      'Traducción automática entre clouds',
      'Templates cloud-agnostic',
      'Portabilidad garantizada'
    ]
  },
  {
    category: 'Optimización Automática',
    features: [
      'Recomendaciones de ahorro',
      'Balanceo de carga inteligente',
      'Auto-scaling multi-cloud',
      'Disaster recovery automático'
    ]
  }
]

const useCases = [
  {
    title: 'Cumplimiento Regional',
    icon: GlobeAltIcon,
    description: 'Cumple con regulaciones locales usando el proveedor adecuado en cada región.',
    example: 'Datos en AWS Frankfurt para GDPR, Azure China para compliance local'
  },
  {
    title: 'Optimización de Costos',
    icon: CurrencyDollarIcon,
    description: 'Ejecuta cada workload donde sea más económico sin cambiar tu código.',
    example: 'Compute en GCP, storage en AWS S3, CDN en Azure'
  },
  {
    title: 'Disaster Recovery',
    icon: ShieldCheckIcon,
    description: 'Backup automático en una nube diferente para máxima resiliencia.',
    example: 'Producción en AWS, DR automático en Google Cloud'
  },
  {
    title: 'Best of Breed',
    icon: SparklesIcon,
    description: 'Usa el mejor servicio de cada proveedor para cada necesidad.',
    example: 'BigQuery para analytics, AWS Lambda para serverless, Azure AD para auth'
  }
]

export default function MultiCloudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
                <CloudIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Multi-Cloud Strategy
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Una plataforma,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  todas las nubes
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Gestiona AWS, Google Cloud y Azure desde un solo lugar. 
                Sin vendor lock-in, con total libertad para elegir lo mejor de cada nube.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <CloudIcon className="h-5 w-5" />
                  Empezar multi-cloud
                </Link>
                <Link
                  href="/demos/multi-cloud"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver demo
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todos los proveedores, una interfaz
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Gestiona servicios de múltiples clouds como si fueran uno solo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {cloudProviders.map((provider) => (
                <div key={provider.name} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{provider.logo}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {provider.name}
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Servicios soportados:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Fortalezas:
                    </h4>
                    <ul className="space-y-2">
                      {provider.strengths.map((strength) => (
                        <li key={strength} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                + Soporte para Alibaba Cloud, IBM Cloud, Oracle Cloud y más
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ventajas de una estrategia multi-cloud
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Flexibilidad, resiliencia y optimización al máximo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {multiCloudBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`h-12 w-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo lo que necesitas para multi-cloud
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Herramientas diseñadas para simplificar la complejidad
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {multiCloudFeatures.map((category) => (
                <div key={category.category} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Casos de uso multi-cloud
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Estrategias probadas para maximizar el valor de cada nube
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <div key={useCase.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {useCase.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {useCase.description}
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Ejemplo:
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {useCase.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Optimization */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <CurrencyDollarIcon className="h-16 w-16 mb-6 text-white/80" />
                  <h2 className="text-3xl font-bold mb-4">
                    Ahorra hasta 40% en costos cloud
                  </h2>
                  <p className="text-xl text-indigo-100 mb-6">
                    Nuestro optimizador multi-cloud analiza continuamente precios 
                    y rendimiento para recomendarte la mejor opción.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Análisis de precios en tiempo real</h3>
                        <p className="text-indigo-100">
                          Compara costos entre proveedores automáticamente
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Migración automática de workloads</h3>
                        <p className="text-indigo-100">
                          Mueve cargas al proveedor más económico sin downtime
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Reserved instances multi-cloud</h3>
                        <p className="text-indigo-100">
                          Gestiona compromisos de todos los proveedores
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <h3 className="text-xl font-semibold mb-6">
                      Ejemplo de ahorro mensual
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Antes (solo AWS)</span>
                          <span className="font-bold">$12,450</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div className="bg-red-400 h-3 rounded-full" style={{width: '100%'}} />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Después (Multi-cloud)</span>
                          <span className="font-bold">$7,890</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div className="bg-emerald-400 h-3 rounded-full" style={{width: '63%'}} />
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-white/20">
                        <div className="flex justify-between text-xl font-bold">
                          <span>Ahorro total:</span>
                          <span className="text-emerald-300">$4,560 (37%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Migración sin dolor
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Proceso probado para adoptar multi-cloud sin riesgos
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Análisis y Assessment
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Evaluamos tu infraestructura actual y identificamos oportunidades 
                      de optimización multi-cloud.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Diseño de Arquitectura
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Creamos una arquitectura multi-cloud optimizada para tus necesidades 
                      específicas de negocio.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Migración Gradual
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Migramos workloads de forma incremental, validando cada paso 
                      para garantizar cero downtime.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Optimización Continua
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monitoreamos y optimizamos constantemente tu infraestructura 
                      multi-cloud para máximo rendimiento y ahorro.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link
                  href="/recursos/guia-migracion-multicloud"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Descargar guía completa de migración
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Libera el poder de multi-cloud
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a las empresas que ya disfrutan de libertad total en la nube
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Hablar con un experto
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ArrowPathIcon className="h-5 w-5" />
                <span>Sin vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <ServerStackIcon className="h-5 w-5" />
                <span>3 clouds soportados</span>
              </div>
              <div className="flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5" />
                <span>ROI en 3 meses</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}