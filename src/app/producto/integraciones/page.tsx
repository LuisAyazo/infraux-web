import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  PuzzlePieceIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.product.integrations()

const categories = [
  {
    name: 'Proveedores Cloud',
    icon: CloudIcon,
    description: 'Despliega en cualquier nube con un solo clic',
    logos: ['aws-light.svg', 'gcp-light.svg', 'azure-light.svg', 'digitalocean-light.svg', 'oracle-light.svg', 'alibaba-light.svg']
  },
  {
    name: 'Control de Versiones',
    icon: CodeBracketSquareIcon,
    description: 'Sincroniza tus diagramas con tu código fuente',
    logos: ['github-light.svg', 'gitlab-light.svg', 'bitbucket-light.svg']
  },
  {
    name: 'CI/CD',
    icon: BoltIcon,
    description: 'Automatiza tus pipelines de despliegue',
    logos: ['jenkins-light.svg', 'circleci-light.svg', 'travisci-light.svg', 'githubactions-light.svg']
  },
  {
    name: 'Monitorización y Alertas',
    icon: BellIcon,
    description: 'Visualiza métricas y recibe alertas en tiempo real',
    logos: ['datadog-light.svg', 'newrelic-light.svg', 'prometheus-light.svg', 'grafana-light.svg']
  },
  {
    name: 'Comunicación y Colaboración',
    icon: ChatBubbleLeftRightIcon,
    description: 'Mantén a tu equipo informado y coordinado',
    logos: ['slack-light.svg', 'msteams-light.svg', 'jira-light.svg', 'discord-light.svg']
  },
  {
    name: 'Seguridad',
    icon: ShieldCheckIcon,
    description: 'Asegura tu infraestructura desde el diseño',
    logos: ['snyk-light.svg', 'sonarqube-light.svg', 'vault-light.svg']
  },
]

const featuredIntegrations = [
  {
    name: 'GitHub Actions',
    description: 'Despliega automáticamente cuando haces push a tu repositorio',
    icon: '🚀',
    features: [
      'Triggers automáticos en push/PR',
      'Validación de diagramas',
      'Despliegue multi-ambiente',
      'Rollback automático'
    ]
  },
  {
    name: 'Slack',
    description: 'Recibe notificaciones de cambios y despliegues en tiempo real',
    icon: '💬',
    features: [
      'Notificaciones de despliegue',
      'Alertas de errores',
      'Aprobaciones desde Slack',
      'Resumen diario de cambios'
    ]
  },
  {
    name: 'Datadog',
    description: 'Monitorea el rendimiento de tu infraestructura visualmente',
    icon: '📊',
    features: [
      'Métricas en tiempo real',
      'Dashboards personalizados',
      'Alertas inteligentes',
      'Análisis de costos'
    ]
  },
  {
    name: 'Terraform Cloud',
    description: 'Gestiona tu estado de Terraform de forma segura y colaborativa',
    icon: '🔧',
    features: [
      'Estado remoto seguro',
      'Planes de ejecución',
      'Políticas as Code',
      'Historial de cambios'
    ]
  }
]

const useCases = [
  {
    title: 'DevOps Automatizado',
    description: 'Conecta GitHub, Jenkins y Slack para un pipeline completo',
    workflow: ['Commit → ', 'Build → ', 'Test → ', 'Deploy → ', 'Notify']
  },
  {
    title: 'Observabilidad Total',
    description: 'Integra Datadog, Prometheus y PagerDuty para monitoreo 24/7',
    workflow: ['Monitor → ', 'Alert → ', 'Diagnose → ', 'Fix → ', 'Report']
  },
  {
    title: 'Seguridad Continua',
    description: 'Usa Snyk, SonarQube y Vault para seguridad en cada paso',
    workflow: ['Scan → ', 'Detect → ', 'Remediate → ', 'Verify → ', 'Comply']
  }
]

const integrationBenefits = [
  'Automatiza tus pipelines de despliegue desde el diseño hasta la producción.',
  'Mantén tus diagramas y tu código perfectamente sincronizados con Git.',
  'Recibe notificaciones de despliegues y cambios de estado en Slack o Teams.',
  'Visualiza métricas de rendimiento de tu infraestructura directamente en InfraUX.',
  'Crea y gestiona incidencias en Jira a partir de alertas de infraestructura.',
  'Asegura que tu infraestructura cumple con las políticas de seguridad de tu empresa.'
]

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-black dark:via-slate-950 dark:to-purple-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <PuzzlePieceIcon className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Integraciones
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Conecta tu stack,
                <span className="block gradient-text-purple">
                  potencia tu workflow
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                InfraUX se integra de forma nativa con las herramientas que ya usas y amas.
                Automatiza, colabora y despliega más rápido que nunca.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/integrations"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Explorar Integraciones
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/contacto?request=integration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Solicitar una integración
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Un ecosistema conectado
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Integraciones profundas con los líderes de cada categoría.
              </p>
            </div>

            <div className="space-y-16">
              {categories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 150}ms` }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl">
                        <Icon className="h-8 w-8 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{category.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
                      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />
                      <div className="flex items-center gap-12 overflow-x-auto py-4 no-scrollbar">
                        {category.logos.map(logo => (
                          <img key={logo} src={`/logos/${logo}`} alt={logo.split('.')[0]} className="h-12 dark:invert" />
                        ))}
                        {/* Duplicate for infinite scroll effect */}
                        {category.logos.map(logo => (
                          <img key={`${logo}-2`} src={`/logos/${logo}`} alt={logo.split('.')[0]} className="h-12 dark:invert" />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Automatiza tu workflow de DevOps
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Conecta InfraUX a tu ecosistema para eliminar tareas manuales, reducir errores y acelerar la entrega de valor.
                </p>
                
                <ul className="space-y-4">
                  {integrationBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-purple-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <PuzzlePieceIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Integrations Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Integraciones destacadas
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Las herramientas más populares, perfectamente integradas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredIntegrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="group relative hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-5xl">{integration.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {integration.name}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {integration.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircleIcon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Casos de uso populares
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Descubre cómo otros equipos están usando nuestras integraciones.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="relative group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-full bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl p-8 text-white shadow-premium">
                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-purple-100 mb-6">{useCase.description}</p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center gap-2 text-sm font-mono">
                        {useCase.workflow.map((step, stepIndex) => (
                          <span key={stepIndex} className="text-purple-100">
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <CodeBracketSquareIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  API abierta para integraciones personalizadas
                </h2>
                <p className="text-xl lg:text-2xl text-purple-50 mb-10 max-w-3xl mx-auto font-medium">
                  ¿No encuentras la integración que necesitas? Usa nuestra API REST para construirla tú mismo. El límite es tu imaginación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/api"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Documentación de la API
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Listo para conectar tu mundo?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Empieza a usar InfraUX y descubre un nuevo nivel de automatización y eficiencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Comenzar gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Hablar con ventas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}