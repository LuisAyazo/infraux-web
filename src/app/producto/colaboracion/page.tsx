import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  UsersIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  LockClosedIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  EyeIcon,
  BellIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.product.collaboration()

const features = [
  {
    icon: UsersIcon,
    title: 'Edición Multi-usuario en Tiempo Real',
    description: 'Ve los cursores de tus compañeros y los cambios al instante. Como Google Docs, pero para tu infraestructura.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Comentarios en Contexto',
    description: 'Deja comentarios directamente sobre los componentes de la infraestructura para agilizar las revisiones y aprobaciones.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: ArrowPathIcon,
    title: 'Historial de Versiones',
    description: 'Visualiza, compara y revierte a versiones anteriores de tu diagrama con un solo clic. Nunca pierdas un cambio.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: LockClosedIcon,
    title: 'Roles y Permisos Granulares',
    description: 'Controla quién puede ver, editar o desplegar. Asigna roles como Lector, Editor o Administrador por proyecto.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: ShareIcon,
    title: 'Enlaces para Compartir de Solo Lectura',
    description: 'Comparte una vista de tu infraestructura con stakeholders externos de forma segura y sin dar acceso de edición.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BellIcon,
    title: 'Registro de Auditoría (Audit Log)',
    description: 'Mantén un registro completo de cada cambio, quién lo hizo y cuándo, para una total transparencia y cumplimiento.',
    color: 'from-slate-500 to-slate-600'
  }
]

const collaborationBenefits = [
  'Elimina los silos entre equipos de desarrollo, operaciones y seguridad.',
  'Acelera los ciclos de revisión y aprobación de cambios en la infraestructura.',
  'Asegura la consistencia y previene configuraciones erróneas.',
  'Facilita el onboarding de nuevos miembros al equipo con una fuente única de verdad.',
  'Mejora la comunicación y reduce la necesidad de reuniones.',
  'Fomenta una cultura de propiedad compartida sobre la infraestructura.'
]

export default function CollaborationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/20 dark:from-black dark:via-slate-950 dark:to-teal-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <UsersIcon className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Colaboración en Equipo
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Construyan infraestructura,
                <span className="block gradient-text-teal">
                  juntos y en tiempo real
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                La única plataforma que permite a tu equipo diseñar, documentar y desplegar
                infraestructura de forma colaborativa y segura.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Empezar a colaborar gratis
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/demos/collaboration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Ver demo de colaboración
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="p-4 bg-slate-100 dark:bg-slate-800/50 flex justify-between items-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">proyecto-alpha/prod/main-diagram</p>
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://randomuser.me/api/portraits/women/17.jpg" alt="User 3" />
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-8">
                  <UserGroupIcon className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Diseñado para equipos modernos
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Herramientas que potencian la sinergia y la velocidad de tu equipo.
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
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Una única fuente de verdad
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Alinea a todo tu equipo con una representación visual y siempre actualizada de tu infraestructura.
                </p>
                
                <ul className="space-y-4">
                  {collaborationBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-teal-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <EyeIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Revoluciona la forma en que tu equipo trabaja
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Empodera a tu equipo con las herramientas de colaboración que necesitan para innovar más rápido.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Invitar a mi equipo
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Ver planes para equipos
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}