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
    version: 'v1.0-beta',
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
    version: 'v0.9.0',
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
    version: 'v0.8.0',
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-black dark:via-black dark:to-indigo-950/20" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium border border-slate-200 dark:border-slate-800 mb-8 fade-in">
                <SparklesIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Changelog
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Siempre mejorando
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mt-2">
                  para ti
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Descubre las últimas funcionalidades, mejoras y correcciones. 
                Nos actualizamos constantemente basándonos en tu feedback.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <RocketLaunchIcon className="h-5 w-5" />
                  Probar nuevas features
                </Link>
                <Link
                  href="#upcoming"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-colors"
                >
                  Ver roadmap
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Banner - Premium Style */}
        <section className="py-12 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Recibe actualizaciones en tu email
                </h3>
                <p className="text-emerald-100 text-lg">
                  Entérate primero de nuevas funcionalidades y mejoras
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white min-w-[250px]"
                />
                <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Releases - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-20">
              {releases.map((release, releaseIndex) => (
                <div key={release.version} className="relative fade-in-up" style={{ animationDelay: `${releaseIndex * 0.1}s` }}>
                  {/* Timeline line */}
                  {releaseIndex < releases.length - 1 && (
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-transparent" />
                  )}
                  
                  <div className="relative">
                    {/* Version badge */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-white font-black text-lg shadow-premium">
                        {release.version.replace('v', '')}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                          {release.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-2">
                          <CalendarIcon className="h-4 w-4" />
                          {release.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-26">
                      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                        {release.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="glass-premium rounded-3xl p-8 mb-8 border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                          <SparklesIcon className="h-6 w-6 text-emerald-500" />
                          Highlights
                        </h3>
                        <ul className="space-y-3">
                          {release.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3">
                              <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300 text-lg">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Detailed changes */}
                      <div className="space-y-4">
                        {release.changes.map((change, index) => {
                          const typeConfig = releaseTypes[change.type as keyof typeof releaseTypes];
                          const Icon = typeConfig.icon;
                          
                          return (
                            <div key={index} className="flex items-start gap-4 glass-premium rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300">
                              <div className={`${typeConfig.bg} rounded-xl p-3`}>
                                <Icon className={`h-6 w-6 ${typeConfig.color}`} />
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 flex-1 text-lg pt-1">
                                {change.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="mt-8">
                        <Link
                          href={`/changelog/${release.version}`}
                          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline text-lg"
                        >
                          Ver detalles completos
                          <ArrowRightIcon className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load more */}
            <div className="mt-20 text-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300">
                Cargar más versiones
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Features - Premium Style */}
        <section id="upcoming" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Próximamente en InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
                Un vistazo a lo que estamos construyendo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {upcomingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="glass-premium rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="h-20 w-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-premium">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-bold">
                      <TagIcon className="h-4 w-4" />
                      {feature.eta}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                ¿Tienes una idea para InfraUX?
              </p>
              <Link
                href="/feedback"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Enviar sugerencia
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Release Cycle - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <CalendarIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl lg:text-5xl font-black mb-6 text-center">
                  Ciclo de releases predecible
                </h2>
                <p className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto text-center font-medium">
                  Lanzamos nuevas funcionalidades cada 2 semanas, con patches de seguridad 
                  cuando son necesarios. Siempre puedes contar con mejoras constantes.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center">
                    <div className="text-4xl font-black mb-3">Bi-semanal</div>
                    <p className="text-emerald-100 text-lg">Nuevas features</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center">
                    <div className="text-4xl font-black mb-3">Semanal</div>
                    <p className="text-emerald-100 text-lg">Bug fixes</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center">
                    <div className="text-4xl font-black mb-3">Inmediato</div>
                    <p className="text-emerald-100 text-lg">Security patches</p>
                  </div>
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