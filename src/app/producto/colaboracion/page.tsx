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
  SparklesIcon
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

import { CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function ColaboracionPage() {
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
                <UserGroupIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Colaboración en Equipo
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                La infraestructura es un
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  deporte de equipo
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Trabaja con tu equipo en tiempo real. Comenta, revisa y aprueba 
                cambios antes de desplegar. Todo en un solo lugar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <UsersIcon className="h-5 w-5" />
                  Invitar a mi equipo
                </Link>
                <Link
                  href="/demos/collaboration"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver demo colaborativa
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Collaboration Demo */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Colaboración en tiempo real
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Ve los cambios de tu equipo mientras suceden. Cursores en vivo, 
                  edición simultánea y sincronización instantánea.
                </p>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5 text-emerald-500" />
                    Actividad del equipo
                  </h3>
                  
                  <div className="space-y-4">
                    {teamActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center text-white font-semibold text-sm`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span className="font-semibold">{activity.user}</span>
                            {' '}{activity.action}{' '}
                            <span className="font-medium text-indigo-600 dark:text-indigo-400">
                              {activity.target}
                            </span>
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-1">
                    <div className="bg-white dark:bg-slate-800 rounded-t-3xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            Editor Colaborativo
                          </span>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-semibold">
                            MG
                          </div>
                          <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-semibold">
                            CL
                          </div>
                          <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-semibold">
                            AM
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-semibold">
                            +2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-6 bg-blue-500 rounded animate-pulse" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          María está editando VPC configuration...
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-6 bg-purple-500 rounded animate-pulse" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Carlos está revisando Security Groups...
                        </span>
                      </div>
                      
                      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start gap-3">
                          <ChatBubbleLeftRightIcon className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                              Carlos López comentó:
                            </p>
                            <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
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

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo lo que necesitas para trabajar en equipo
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Herramientas diseñadas para la colaboración efectiva
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborationFeatures.map((feature) => {
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

        {/* Permissions Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Control total sobre los permisos
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Define exactamente qué puede hacer cada miembro del equipo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {permissions.map((permission) => {
                const Icon = permission.icon;
                return (
                  <div key={permission.role} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {permission.role}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {permission.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Flujos de trabajo personalizables
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Proponer cambios
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Los desarrolladores crean y prueban cambios
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Revisar y aprobar
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Los líderes técnicos revisan y aprueban
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Desplegar
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    DevOps despliega a producción
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <ShareIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
                <h2 className="text-3xl font-bold mb-4">
                  Integrado con tus herramientas favoritas
                </h2>
                <p className="text-xl text-indigo-100 mb-8">
                  Conecta InfraUX con Slack, Teams, Jira y más. 
                  Mantén a todos informados sin cambiar de contexto.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl mb-2">💬</div>
                    <p className="font-semibold">Slack</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Jira</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl mb-2">🔔</div>
                    <p className="font-semibold">Teams</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl mb-2">📧</div>
                    <p className="font-semibold">Email</p>
                  </div>
                </div>
                
                <Link
                  href="/integraciones"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
                >
                  Ver todas las integraciones
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Colaboración que impulsa resultados
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Métricas de equipos usando colaboración en InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full mb-4">
                  <ClockIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  75%
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Reducción en tiempo de revisión
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                  <UserGroupIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  3x
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Más colaboración entre equipos
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4">
                  <ChartBarIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  90%
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Menos errores en producción
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Empieza a colaborar hoy mismo
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Invita a tu equipo y mejora tu flujo de trabajo de infraestructura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Crear equipo gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/empresa"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
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