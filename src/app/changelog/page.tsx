import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  SparklesIcon,
  BoltIcon,
  BugAntIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarIcon,
  TagIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Changelog | InfraUX - Novedades y Actualizaciones',
  description: 'Todas las nuevas funcionalidades, mejoras y correcciones de InfraUX. Mantente al día con nuestro desarrollo.',
  keywords: ['changelog', 'actualizaciones', 'nuevas funcionalidades', 'release notes', 'infraux updates'],
  openGraph: {
    title: 'Changelog - InfraUX',
    description: 'Últimas actualizaciones y mejoras',
    url: 'https://infraux.com/changelog',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const releaseTypes = {
  feature: { icon: SparklesIcon, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  improvement: { icon: ArrowTrendingUpIcon, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  fix: { icon: BugAntIcon, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  security: { icon: ShieldCheckIcon, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/30' },
  performance: { icon: BoltIcon, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/30' }
}

const releases = [
  {
    version: 'v2.5.0',
    date: '15 de Julio, 2024',
    title: 'Multi-Cloud Analytics & AI Assistant',
    description: 'Nueva funcionalidad de analytics multi-cloud y asistente AI para optimización de infraestructura.',
    highlights: [
      'Dashboard unificado de costos multi-cloud',
      'AI Assistant para recomendaciones de arquitectura',
      'Nuevas integraciones con Oracle Cloud y Alibaba Cloud',
      'Export de reportes en PDF con branding personalizado'
    ],
    changes: [
      { type: 'feature', description: 'Analytics Dashboard con métricas en tiempo real de AWS, GCP y Azure' },
      { type: 'feature', description: 'InfraUX AI: Asistente inteligente para optimización de costos' },
      { type: 'feature', description: 'Soporte para Oracle Cloud Infrastructure' },
      { type: 'improvement', description: 'Reducción del 40% en tiempo de carga del editor visual' },
      { type: 'fix', description: 'Corregido error en sincronización de estados con Terraform 1.5+' },
      { type: 'security', description: 'Actualización de dependencias críticas de seguridad' }
    ]
  },
  {
    version: 'v2.4.0',
    date: '28 de Junio, 2024',
    title: 'GitOps Workflows & Team Collaboration',
    description: 'Flujos GitOps mejorados y nuevas herramientas de colaboración en equipo.',
    highlights: [
      'GitOps workflows con aprobaciones automáticas',
      'Comentarios en tiempo real en el editor',
      'Historial de cambios con diff visual',
      'Roles y permisos granulares'
    ],
    changes: [
      { type: 'feature', description: 'GitOps: Auto-sync con GitHub, GitLab y Bitbucket' },
      { type: 'feature', description: 'Sistema de comentarios y anotaciones en componentes' },
      { type: 'feature', description: 'Diff visual para comparar versiones de infraestructura' },
      { type: 'improvement', description: 'Nueva UI para gestión de permisos de equipo' },
      { type: 'performance', description: 'Optimización de queries: 60% más rápido en proyectos grandes' },
      { type: 'fix', description: 'Solucionado problema con hot-reload en desarrollo local' }
    ]
  },
  {
    version: 'v2.3.0',
    date: '10 de Junio, 2024',
    title: 'Kubernetes Native & Enhanced Security',
    description: 'Soporte nativo para Kubernetes y mejoras significativas en seguridad.',
    highlights: [
      'Editor visual para Kubernetes manifests',
      'Escaneo automático de vulnerabilidades',
      'Secrets management integrado',
      'Compliance dashboards (SOC2, ISO27001)'
    ],
    changes: [
      { type: 'feature', description: 'Editor drag-and-drop para recursos Kubernetes' },
      { type: 'feature', description: 'Vulnerability scanning con Trivy integrado' },
      { type: 'feature', description: 'Vault integration para gestión de secrets' },
      { type: 'security', description: 'MFA obligatorio para cuentas enterprise' },
      { type: 'improvement', description: 'Nuevos templates para EKS, GKE y AKS' },
      { type: 'fix', description: 'Corregido error en generación de Helm charts' }
    ]
  }
]

const upcomingFeatures = [
  {
    icon: BeakerIcon,
    title: 'InfraUX Labs',
    description: 'Ambiente sandbox para experimentar con nuevas tecnologías cloud',
    eta: 'Q3 2024'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Edge Computing Support',
    description: 'Deploy y gestión de infraestructura en edge locations',
    eta: 'Q3 2024'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Custom Providers API',
    description: 'Crea tus propios providers para clouds privados',
    eta: 'Q4 2024'
  }
]

export default function ChangelogPage() {
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
                <SparklesIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Changelog
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Siempre mejorando
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  para ti
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Descubre las últimas funcionalidades, mejoras y correcciones. 
                Nos actualizamos constantemente basándonos en tu feedback.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <RocketLaunchIcon className="h-5 w-5" />
                  Probar nuevas features
                </Link>
                <Link
                  href="#upcoming"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver roadmap
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Banner */}
        <section className="py-8 bg-gradient-to-r from-indigo-600 to-emerald-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-1">
                  Recibe actualizaciones en tu email
                </h3>
                <p className="text-indigo-100">
                  Entérate primero de nuevas funcionalidades y mejoras
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                />
                <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Releases */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-16">
              {releases.map((release) => (
                <div key={release.version} className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                  
                  <div className="relative">
                    {/* Version badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {release.version.replace('v', '')}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {release.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CalendarIcon className="h-4 w-4" />
                          {release.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-20">
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        {release.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-6 mb-6">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                          ✨ Highlights
                        </h3>
                        <ul className="space-y-2">
                          {release.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Detailed changes */}
                      <div className="space-y-3">
                        {release.changes.map((change, index) => {
                          const typeConfig = releaseTypes[change.type as keyof typeof releaseTypes];
                          const Icon = typeConfig.icon;
                          
                          return (
                            <div key={index} className="flex items-start gap-3">
                              <div className={`${typeConfig.bg} rounded-lg p-2`}>
                                <Icon className={`h-5 w-5 ${typeConfig.color}`} />
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 flex-1">
                                {change.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          href={`/changelog/${release.version}`}
                          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                        >
                          Ver detalles completos
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load more */}
            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200">
                Cargar más versiones
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section id="upcoming" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Próximamente en InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Un vistazo a lo que estamos construyendo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {upcomingFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg text-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">
                      <TagIcon className="h-4 w-4" />
                      {feature.eta}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                ¿Tienes una idea para InfraUX?
              </p>
              <Link
                href="/feedback"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Enviar sugerencia
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Release Cycle */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
              <CalendarIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">
                Ciclo de releases predecible
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Lanzamos nuevas funcionalidades cada 2 semanas, con patches de seguridad 
                cuando son necesarios. Siempre puedes contar con mejoras constantes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">Bi-semanal</div>
                  <p className="text-indigo-100">Nuevas features</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">Semanal</div>
                  <p className="text-indigo-100">Bug fixes</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-2">Inmediato</div>
                  <p className="text-indigo-100">Security patches</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}