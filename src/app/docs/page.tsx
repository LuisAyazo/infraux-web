import { Metadata } from 'next'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  CubeIcon, 
  RocketLaunchIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BeakerIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Documentación | InfraUX - Centro de Aprendizaje',
  description: 'Documentación completa de InfraUX. Aprende a diseñar, desplegar y gestionar tu infraestructura cloud de manera visual.',
}

// Sidebar navigation structure
const navigation = [
  {
    title: 'Introducción',
    items: [
      { name: '¿Qué es InfraUX?', href: '/docs/intro', icon: LightBulbIcon },
      { name: 'Inicio Rápido', href: '/docs/quickstart', icon: RocketLaunchIcon, badge: 'Popular' },
      { name: 'Conceptos Clave', href: '/docs/concepts', icon: AcademicCapIcon },
    ]
  },
  {
    title: 'Guías',
    items: [
      { name: 'Tu Primer Proyecto', href: '/docs/guides/first-project', icon: BeakerIcon },
      { name: 'Mejores Prácticas', href: '/docs/guides/best-practices', icon: CheckIcon },
      { name: 'Casos de Uso', href: '/docs/guides/use-cases', icon: UserGroupIcon },
    ]
  },
  {
    title: 'Editor Visual',
    items: [
      { name: 'Interfaz', href: '/docs/editor/interface', icon: CubeIcon },
      { name: 'Nodos y Conexiones', href: '/docs/editor/nodes', icon: CodeBracketIcon },
      { name: 'Colaboración', href: '/docs/editor/collaboration', icon: UserGroupIcon, badge: 'Nuevo' },
    ]
  },
  {
    title: 'Proveedores Cloud',
    items: [
      { name: 'AWS', href: '/docs/providers/aws', icon: CloudIcon },
      { name: 'Google Cloud', href: '/docs/providers/gcp', icon: CloudIcon },
      { name: 'Azure', href: '/docs/providers/azure', icon: CloudIcon },
    ]
  },
  {
    title: 'IaC & Deployment',
    items: [
      { name: 'Terraform', href: '/docs/iac/terraform', icon: CodeBracketIcon },
      { name: 'CI/CD Pipelines', href: '/docs/deployment/cicd', icon: CommandLineIcon },
      { name: 'GitOps', href: '/docs/deployment/gitops', icon: ServerIcon },
    ]
  },
  {
    title: 'Referencia',
    items: [
      { name: 'API REST', href: '/docs/api/rest', icon: ServerIcon },
      { name: 'CLI', href: '/docs/cli', icon: CommandLineIcon },
      { name: 'Webhooks', href: '/docs/webhooks', icon: CpuChipIcon },
    ]
  }
]

// Featured tutorials
const tutorials = [
  {
    title: 'Construye una Arquitectura Multi-Region en AWS',
    description: 'Aprende a diseñar y desplegar una aplicación resiliente en múltiples regiones.',
    duration: '45 min',
    level: 'Intermedio',
    icon: CloudIcon,
    href: '/docs/tutorials/multi-region-aws'
  },
  {
    title: 'De Monolito a Microservicios',
    description: 'Guía paso a paso para migrar tu aplicación a una arquitectura de microservicios.',
    duration: '60 min',
    level: 'Avanzado',
    icon: CubeIcon,
    href: '/docs/tutorials/microservices'
  },
  {
    title: 'Optimización de Costos Cloud',
    description: 'Estrategias probadas para reducir hasta un 40% tus gastos en la nube.',
    duration: '30 min',
    level: 'Principiante',
    icon: SparklesIcon,
    href: '/docs/tutorials/cost-optimization'
  }
]

// Quick start cards
const quickStartCards = [
  {
    title: 'Instala InfraUX CLI',
    description: 'Configura tu entorno local en minutos',
    icon: CommandLineIcon,
    code: 'npm install -g @infraux/cli',
    href: '/docs/quickstart/cli'
  },
  {
    title: 'Crea tu Primer Diagrama',
    description: 'Diseña infraestructura visualmente',
    icon: CubeIcon,
    code: 'infraux init my-project',
    href: '/docs/quickstart/first-diagram'
  },
  {
    title: 'Despliega a Producción',
    description: 'De diagrama a infraestructura real',
    icon: RocketLaunchIcon,
    code: 'infraux deploy --env prod',
    href: '/docs/quickstart/deploy'
  }
]

function DocsSidebar() {
  return (
    <nav className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 -mt-10 pt-10 h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="space-y-8 pb-10">
          {navigation.map((section) => (
            <div key={section.title}>
              <h5 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex gap-12 relative">
          {/* Sidebar */}
          <DocsSidebar />
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 py-12">
            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                Centro de Documentación
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Todo lo que necesitas para dominar InfraUX y transformar la manera en que gestionas tu infraestructura cloud.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Buscar documentación, guías, API..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
                <kbd className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 rounded">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Quick Start Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Inicio Rápido
                </h2>
                <Link 
                  href="/docs/quickstart"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Ver guía completa →
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {quickStartCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                        <card.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-3 font-mono text-sm text-slate-100">
                      <span className="text-slate-500">$</span> {card.code}
                    </div>
                    <ArrowRightIcon className="absolute top-6 right-6 h-5 w-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Featured Tutorials */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Tutoriales Destacados
                </h2>
                <Link 
                  href="/docs/tutorials"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Ver todos los tutoriales →
                </Link>
              </div>
              
              <div className="grid gap-6">
                {tutorials.map((tutorial) => (
                  <Link
                    key={tutorial.title}
                    href={tutorial.href}
                    className="group flex gap-6 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white">
                        <tutorial.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <ClockIcon className="h-4 w-4" />
                          {tutorial.duration}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tutorial.level === 'Principiante' 
                            ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                            : tutorial.level === 'Intermedio'
                            ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
                            : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors self-center" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Resources Grid */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Recursos Adicionales
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
                  <PlayCircleIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Video Tutoriales</h3>
                  <p className="mb-4 text-indigo-100">
                    Aprende con nuestra colección de videos paso a paso, desde conceptos básicos hasta técnicas avanzadas.
                  </p>
                  <Link href="/docs/videos" className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all">
                    Ver videos
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
                  <UserGroupIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
                  <p className="mb-4 text-emerald-100">
                    Únete a miles de usuarios, comparte experiencias y obtén ayuda de la comunidad InfraUX.
                  </p>
                  <Link href="https://community.infraux.com" className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all">
                    Unirse ahora
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* API Reference Preview */}
            <section className="mb-16">
              <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-8 text-white">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Referencia API</h2>
                    <p className="text-slate-400">
                      Integra InfraUX en tus aplicaciones con nuestra API REST completa.
                    </p>
                  </div>
                  <Link 
                    href="/docs/api"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
                  >
                    Explorar API
                  </Link>
                </div>
                
                <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-bold">
                      GET
                    </span>
                    <span className="text-slate-300">/api/v1/diagrams</span>
                  </div>
                  <pre className="text-slate-400">
{`{
  "diagrams": [
    {
      "id": "dgr_1234567890",
      "name": "Production Infrastructure",
      "environment": "prod",
      "provider": "aws",
      "nodes": 42,
      "last_modified": "2025-06-17T14:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "total": 156
  }
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Help Section */}
            <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 text-center">
              <QuestionMarkCircleIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                ¿Necesitas ayuda?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta o problema.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contactar Soporte
                </Link>
                <Link
                  href="/docs/faq"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Ver FAQ
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
      
      <FooterNew />
    </div>
  )
}