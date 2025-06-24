import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    <nav className="w-72 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 -mt-10 pt-10 h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="space-y-10 pb-10 pr-4">
          {navigation.map((section) => (
            <div key={section.title}>
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-2xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300"
                    >
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
                        <item.icon className="h-4 w-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          item.badge === 'Popular'
                            ? 'bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300'
                            : 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300'
                        }`}>
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Zenix Assistant Button - Premium Style */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            {/* Button */}
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full p-5 shadow-premium hover:shadow-premium-lg transform hover:scale-110 transition-all duration-300">
              {/* Tooltip */}
              <div className="absolute -top-24 right-0 glass-premium rounded-2xl shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <p className="text-base font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  ¡Hola! Soy Zenix 🦊
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  ¿Necesitas ayuda con la documentación?
                </p>
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-slate-900 border-b border-r border-white/20"></div>
              </div>
              
              {/* Zenix Image */}
              <div className="relative w-14 h-14">
                <Image
                  src="/images/zenix-hero.png"
                  alt="Zenix, tu asistente de documentación"
                  width={56}
                  height={70}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              
              {/* Status indicator */}
              <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
              </span>
            </div>
          </button>
        </div>
        <div className="flex gap-12 relative">
          {/* Sidebar */}
          <DocsSidebar />
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 py-16">
            {/* Hero Section */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <BookOpenIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Documentación completa y actualizada
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Centro de
                <span className="block gradient-text-emerald">Documentación</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl font-medium animate-fade-in-up animation-delay-200">
                Todo lo que necesitas para dominar InfraUX y transformar la manera en que gestionas tu infraestructura cloud.
              </p>
              
              {/* Premium Search Bar */}
              <div className="relative max-w-2xl animate-fade-in-up animation-delay-400">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl" />
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <input
                    type="search"
                    placeholder="Buscar documentación, guías, API..."
                    className="w-full pl-14 pr-4 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  />
                  <kbd className="absolute right-5 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* Quick Start Section */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  Inicio Rápido
                </h2>
                <Link
                  href="/docs/quickstart"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  Ver guía completa
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {quickStartCards.map((card, index) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative hover-lift-premium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <card.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                              {card.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                              {card.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="bg-slate-900 dark:bg-black rounded-2xl p-4 font-mono text-sm shadow-inner">
                          <span className="text-emerald-400">$</span> <span className="text-slate-100">{card.code}</span>
                        </div>
                        
                        <ArrowRightIcon className="absolute top-8 right-8 h-5 w-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Featured Tutorials */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  Tutoriales Destacados
                </h2>
                <Link
                  href="/docs/tutorials"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  Ver todos los tutoriales
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="grid gap-8">
                {tutorials.map((tutorial, index) => (
                  <Link
                    key={tutorial.title}
                    href={tutorial.href}
                    className="group relative hover-lift-premium"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex gap-8 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <tutorial.icon className="h-10 w-10" />
                        </div>
                      </div>
                      
                      <div className="relative z-10 flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {tutorial.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                          {tutorial.description}
                        </p>
                        <div className="flex items-center gap-6">
                          <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <ClockIcon className="h-5 w-5 text-emerald-500" />
                            <span className="font-medium">{tutorial.duration}</span>
                          </span>
                          <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                            tutorial.level === 'Principiante'
                              ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300'
                              : tutorial.level === 'Intermedio'
                              ? 'bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 text-yellow-700 dark:text-yellow-300'
                              : 'bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 text-red-700 dark:text-red-300'
                          }`}>
                            {tutorial.level}
                          </span>
                        </div>
                      </div>
                      
                      <ArrowRightIcon className="h-6 w-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 self-center transform group-hover:translate-x-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Resources Grid */}
            <section className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                Recursos Adicionales
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600" />
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <div className="relative z-10 p-10">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                      <PlayCircleIcon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Video Tutoriales</h3>
                    <p className="text-lg mb-6 text-purple-100">
                      Aprende con nuestra colección de videos paso a paso, desde conceptos básicos hasta técnicas avanzadas.
                    </p>
                    <Link href="/docs/videos" className="inline-flex items-center gap-3 font-bold text-white hover:gap-4 transition-all group/link">
                      Ver videos
                      <ArrowRightIcon className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600" />
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <div className="relative z-10 p-10">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                      <UserGroupIcon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Comunidad</h3>
                    <p className="text-lg mb-6 text-emerald-100">
                      Únete a miles de usuarios, comparte experiencias y obtén ayuda de la comunidad InfraUX.
                    </p>
                    <Link href="https://community.infraux.com" className="inline-flex items-center gap-3 font-bold text-white hover:gap-4 transition-all group/link">
                      Unirse ahora
                      <ArrowRightIcon className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference Preview */}
            <section className="mb-20">
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                
                <div className="relative z-10 p-10 text-white">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-3">Referencia API</h2>
                      <p className="text-lg text-slate-300">
                        Integra InfraUX en tus aplicaciones con nuestra API REST completa.
                      </p>
                    </div>
                    <Link
                      href="/docs/api"
                      className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Explorar API
                    </Link>
                  </div>
                  
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 font-mono text-sm border border-slate-800">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-bold">
                        GET
                      </span>
                      <span className="text-slate-200 font-medium">/api/v1/diagrams</span>
                    </div>
                    <pre className="text-slate-300 leading-relaxed">
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
              </div>
            </section>

            {/* Help Section */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-12 text-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl shadow-lg mb-6">
                  <QuestionMarkCircleIcon className="h-14 w-14 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  ¿Necesitas ayuda?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                  Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta o problema.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/support"
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Contactar Soporte
                  </Link>
                  <Link
                    href="/docs/faq"
                    className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Ver FAQ
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      
      <FooterNew />
    </div>
  )
}