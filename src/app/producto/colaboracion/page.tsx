import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  UsersIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  LockClosedIcon,
  ArrowRightIcon,
  UserGroupIcon,
  BellIcon,
  ClockIcon,
  ChartBarIcon,
  FolderIcon,
  ShareIcon,
  EyeIcon,
  PencilSquareIcon,
  HandRaisedIcon,
  SparklesIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Colaboración en Tiempo Real | InfraUX',
  description: 'Trabaja en equipo sobre tu infraestructura. Edición colaborativa, control de versiones y comunicación integrada.',
  keywords: ['colaboración', 'trabajo en equipo', 'tiempo real', 'control versiones', 'infraestructura colaborativa'],
  openGraph: {
    title: 'Colaboración en Equipo - InfraUX',
    description: 'La infraestructura es un deporte de equipo',
    url: 'https://infraux.com/producto/colaboracion',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const collaborationFeatures = [
  {
    icon: UsersIcon,
    title: 'Edición Colaborativa',
    description: 'Múltiples usuarios editando la misma infraestructura en tiempo real.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Comentarios y Discusiones',
    description: 'Comenta directamente sobre componentes. Resuelve dudas sin salir del editor.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Control de Versiones',
    description: 'Historial completo de cambios. Ve quién hizo qué y cuándo.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: LockClosedIcon,
    title: 'Permisos Granulares',
    description: 'Control total sobre quién puede ver, editar o desplegar.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BellIcon,
    title: 'Notificaciones Inteligentes',
    description: 'Mantente al día con cambios importantes en tu infraestructura.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: HandRaisedIcon,
    title: 'Aprobaciones y Reviews',
    description: 'Flujos de aprobación personalizables para cambios críticos.',
    color: 'from-pink-500 to-rose-500'
  }
]

const teamActivities = [
  {
    user: 'María García',
    avatar: 'MG',
    action: 'actualizó',
    target: 'VPC Production',
    time: 'hace 2 minutos',
    color: 'bg-blue-500'
  },
  {
    user: 'Carlos López',
    avatar: 'CL',
    action: 'comentó en',
    target: 'RDS Database Config',
    time: 'hace 5 minutos',
    color: 'bg-purple-500'
  },
  {
    user: 'Ana Martínez',
    avatar: 'AM',
    action: 'aprobó cambios en',
    target: 'EKS Cluster',
    time: 'hace 15 minutos',
    color: 'bg-green-500'
  },
  {
    user: 'Diego Rodríguez',
    avatar: 'DR',
    action: 'creó',
    target: 'Lambda Functions',
    time: 'hace 1 hora',
    color: 'bg-orange-500'
  }
]

const permissions = [
  { role: 'Viewer', icon: EyeIcon, description: 'Ver infraestructura y comentarios' },
  { role: 'Editor', icon: PencilSquareIcon, description: 'Editar y crear componentes' },
  { role: 'Deployer', icon: CloudIcon, description: 'Desplegar cambios a producción' },
  { role: 'Admin', icon: ShieldCheckIcon, description: 'Control total y gestión de equipo' }
]

export default function ColaboracionPage() {
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
                <UserGroupIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Colaboración en Equipo
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                La infraestructura es un
                <span className="block gradient-text-emerald">
                  deporte de equipo
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Trabaja con tu equipo en tiempo real. Comenta, revisa y aprueba 
                cambios antes de desplegar. Todo en un solo lugar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <UsersIcon className="h-6 w-6" />
                  Invitar a mi equipo
                </Link>
                <Link
                  href="/demos/collaboration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Ver demo colaborativa
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Collaboration Demo - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Colaboración en tiempo real
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Ve los cambios de tu equipo mientras suceden. Cursores en vivo, 
                  edición simultánea y sincronización instantánea.
                </p>
                
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <SparklesIcon className="h-6 w-6 text-emerald-500" />
                    Actividad del equipo
                  </h3>
                  
                  <div className="space-y-4">
                    {teamActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className={`w-12 h-12 rounded-2xl ${activity.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700 dark:text-slate-300">
                            <span className="font-bold">{activity.user}</span>
                            {' '}{activity.action}{' '}
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              {activity.target}
                            </span>
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                    <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                            Editor Colaborativo
                          </span>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            MG
                          </div>
                          <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            CL
                          </div>
                          <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            AM
                          </div>
                          <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold shadow-lg">
                            +2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-slate-600 dark:text-slate-400">
                          María está editando VPC configuration...
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-slate-600 dark:text-slate-400">
                          Carlos está revisando Security Groups...
                        </span>
                      </div>
                      
                      <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start gap-3">
                          <ChatBubbleLeftRightIcon className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-amber-900 dark:text-amber-100">
                              Carlos López comentó:
                            </p>
                            <p className="text-amber-700 dark:text-amber-300 mt-1">
                              "¿Deberíamos aumentar el tamaño de la instancia RDS para el nuevo tráfico esperado?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                Todo lo que necesitas para trabajar en equipo
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Herramientas diseñadas para la colaboración efectiva
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborationFeatures.map((feature, index) => {
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

        {/* Permissions Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Control total sobre los permisos
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Define exactamente qué puede hacer cada miembro del equipo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {permissions.map((permission, index) => {
                const Icon = permission.icon;
                return (
                  <div 
                    key={permission.role} 
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-14 w-14 text-emerald-600 dark:text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {permission.role}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {permission.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-premium-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-800">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
                  Flujos de trabajo personalizables
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Proponer cambios
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Los desarrolladores crean y prueban cambios
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Revisar y aprobar
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Los líderes técnicos revisan y aprueban
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-premium">
                      <span className="text-3xl font-black text-white">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Desplegar
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      DevOps despliega a producción
                    </p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="max-w-4xl mx-auto text-center">
                  <ShareIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                  <h2 className="text-4xl font-bold mb-6">
                    Integrado con tus herramientas favoritas
                  </h2>
                  <p className="text-xl text-emerald-50 mb-10 font-medium">
                    Conecta InfraUX con Slack, Teams, Jira y más. 
                    Mantén a todos informados sin cambiar de contexto.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">💬</div>
                      <p className="font-bold text-lg">Slack</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">📊</div>
                      <p className="font-bold text-lg">Jira</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">🔔</div>
                      <p className="font-bold text-lg">Teams</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
                      <div className="text-4xl mb-3">📧</div>
                      <p className="font-bold text-lg">Email</p>
                    </div>
                  </div>
                  
                  <Link
                    href="/integraciones"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Ver todas las integraciones
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Colaboración que impulsa resultados
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Métricas de equipos usando colaboración en InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl mb-6 shadow-premium">
                  <ClockIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  75%
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Reducción en tiempo de revisión
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-6 shadow-premium">
                  <UserGroupIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  3x
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Más colaboración entre equipos
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6 shadow-premium">
                  <ChartBarIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  90%
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Menos errores en producción
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Empieza a colaborar hoy mismo
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Invita a tu equipo y mejora tu flujo de trabajo de infraestructura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Crear equipo gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/empresa"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Planes para empresas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}