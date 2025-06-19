import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Editor Visual de Infraestructura | InfraUX',
  description: 'Diseña tu infraestructura cloud con drag & drop. Sin código, sin YAML, sin complejidad. Compatible con AWS, GCP y Azure.',
  keywords: ['editor visual', 'drag and drop', 'infraestructura visual', 'no-code infrastructure', 'diseño cloud'],
  openGraph: {
    title: 'Editor Visual - InfraUX',
    description: 'La forma más intuitiva de diseñar infraestructura cloud',
    url: 'https://infraux.com/producto/editor',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

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
                  Editor Visual
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Diseña infraestructura
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  sin escribir código
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                El editor visual más poderoso para crear y gestionar tu infraestructura cloud. 
                Arrastra, conecta y despliega. Así de simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demos/visual-builder"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <PlayIcon className="h-5 w-5" />
                  Ver demo en vivo
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Probar gratis
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-1">
                <div className="bg-white dark:bg-slate-800 rounded-t-3xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-bold text-slate-900 dark:text-white">Infra</span>
                      <span className="font-bold text-emerald-500">UX</span>
                      <span className="text-slate-600 dark:text-slate-400"> - Editor Visual</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <CubeIcon className="h-24 w-24 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">Demo interactiva del editor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo lo que necesitas para diseñar
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Herramientas profesionales con la simplicidad que mereces
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`h-12 w-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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

        {/* Capabilities List */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Un editor que piensa como tú
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Diseñado por ingenieros para ingenieros. Cada detalle está pensado 
                  para hacer tu trabajo más eficiente y placentero.
                </p>
                
                <ul className="space-y-4">
                  {editorCapabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center">
                    <CommandLineIcon className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
              <ShieldCheckIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">
                Integración perfecta con tu workflow
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                El editor se integra con tus herramientas favoritas. 
                Exporta a Terraform, conecta con Git, despliega con un clic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/producto/iac"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
                >
                  Ver generación de código
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/producto/deployment"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition-colors"
                >
                  Ver deployment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Empieza a diseñar visualmente hoy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a miles de equipos que ya diseñan su infraestructura de forma visual
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Comenzar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
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