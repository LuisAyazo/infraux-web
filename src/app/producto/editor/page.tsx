import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  SparklesIcon,
  CursorArrowRaysIcon,
  CubeIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  CommandLineIcon,
  EyeIcon,
  BoltIcon,
  PuzzlePieceIcon,
  CloudIcon,
  ShieldCheckIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.product.editor()

const features = [
  {
    icon: CursorArrowRaysIcon,
    title: 'Drag & Drop Intuitivo',
    description: 'Arrastra componentes cloud y conéctalos visualmente. Tan fácil como hacer un diagrama.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CloudIcon,
    title: 'Multi-Cloud Nativo',
    description: 'Componentes pre-configurados para AWS, GCP y Azure. Cambia de proveedor con un clic.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: EyeIcon,
    title: 'Vista Previa en Tiempo Real',
    description: 'Ve exactamente cómo se verá tu infraestructura antes de desplegarla.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BoltIcon,
    title: 'Validación Instantánea',
    description: 'Detecta errores de configuración mientras diseñas. Sin sorpresas en producción.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Componentes Reutilizables',
    description: 'Crea tus propios componentes y reutilízalos en todos tus proyectos.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Documentación Automática',
    description: 'Genera documentación visual de tu arquitectura automáticamente.',
    color: 'from-pink-500 to-rose-500'
  }
]

const editorCapabilities = [
  'Más de 200 componentes cloud pre-configurados',
  'Conexiones inteligentes entre recursos',
  'Agrupación y organización visual',
  'Zoom y navegación fluida',
  'Búsqueda rápida de componentes',
  'Undo/Redo ilimitado',
  'Exportación en múltiples formatos',
  'Modo oscuro y claro'
]

export default function EditorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <SparklesIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Editor Visual
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Diseña infraestructura
                <span className="block gradient-text-emerald">
                  sin escribir código
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                El editor visual más poderoso para crear y gestionar tu infraestructura cloud. 
                Arrastra, conecta y despliega. Así de simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demos/visual-builder"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <PlayIcon className="h-6 w-6" />
                  Ver demo en vivo
                </Link>
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Probar gratis
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                  <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-black text-slate-900 dark:text-white">Infra</span>
                        <span className="font-black text-emerald-500">UX</span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium"> - Editor Visual</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <CubeIcon className="h-32 w-32 text-slate-300 dark:text-slate-600 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Demo interactiva del editor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Todo lo que necesitas para diseñar
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Herramientas profesionales con la simplicidad que mereces
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities List - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Un editor que piensa como tú
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Diseñado por ingenieros para ingenieros. Cada detalle está pensado 
                  para hacer tu trabajo más eficiente y placentero.
                </p>
                
                <ul className="space-y-4">
                  {editorCapabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <CommandLineIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <ShieldCheckIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  Integración perfecta con tu workflow
                </h2>
                <p className="text-xl lg:text-2xl text-emerald-50 mb-10 max-w-3xl mx-auto font-medium">
                  El editor se integra con tus herramientas favoritas.
                  Exporta a Terraform, conecta con Git, despliega con un clic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/producto/iac"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Ver generación de código
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/producto/deployment"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-2xl hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Ver deployment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Empieza a diseñar visualmente hoy
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Únete a miles de equipos que ya diseñan su infraestructura de forma visual
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Comenzar gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}