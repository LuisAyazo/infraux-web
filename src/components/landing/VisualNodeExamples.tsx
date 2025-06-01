'use client'

import { CpuChipIcon, CircleStackIcon, WifiIcon, ServerStackIcon, CogIcon } from '@heroicons/react/24/outline'

const nodeExamples = [
  {
    name: 'Compute (VM)',
    description: 'Representa máquinas virtuales, instancias de cómputo y nodos de Kubernetes. Configura CPU, RAM, SO y almacenamiento.',
    icon: CpuChipIcon,
    gradient: 'from-cloud-blue-500 to-cloud-blue-600',
    bgGradient: 'from-cloud-blue-500/10 to-cloud-blue-600/20',
    hoverGradient: 'hover:from-cloud-blue-400 hover:to-cloud-blue-500',
  },
  {
    name: 'Base de Datos',
    description: 'Nodos para servicios de bases de datos relacionales (SQL) y NoSQL. Define tipo de motor, capacidad y replicación.',
    icon: CircleStackIcon,
    gradient: 'from-emerald-green-500 to-emerald-green-600',
    bgGradient: 'from-emerald-green-500/10 to-emerald-green-600/20',
    hoverGradient: 'hover:from-emerald-green-400 hover:to-emerald-green-500',
  },
  {
    name: 'Redes (VPC)',
    description: 'Visualiza y configura Virtual Private Clouds (VPCs), subredes, gateways, tablas de ruteo y firewalls.',
    icon: WifiIcon,
    gradient: 'from-electric-purple-500 to-electric-purple-600',
    bgGradient: 'from-electric-purple-500/10 to-electric-purple-600/20',
    hoverGradient: 'hover:from-electric-purple-400 hover:to-electric-purple-500',
  },
  {
    name: 'Servicios Gestionados',
    description: 'Nodos para Cloud Functions, Load Balancers, colas de mensajes, almacenamiento de objetos y más servicios PaaS.',
    icon: ServerStackIcon,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/20',
    hoverGradient: 'hover:from-amber-400 hover:to-orange-400',
  },
]

export default function VisualNodeExamples() {
  return (
    <section id="nodes" className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-purple-50/50 via-cloud-blue-50/30 to-emerald-green-50/50 dark:from-electric-purple-900/10 dark:via-cloud-blue-900/10 dark:to-emerald-green-900/10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-electric-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-emerald-green-400/10 rounded-full blur-3xl animate-float-delay"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-shift">
            Componentes Gráficos de{' '}
            <span className="bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent">
              Infraestructura
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1">
            Arrastra, suelta y conecta nodos que representan tus recursos cloud. Cada nodo es configurable y se traduce automáticamente a IaC.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nodeExamples.map((node, index) => (
            <div 
              key={node.name} 
              className={`group card p-8 opacity-0 animate-slide-up-delay-${index + 1} hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${node.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${node.bgGradient} mb-6 group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  <node.icon className={`w-12 h-12 bg-gradient-to-r ${node.gradient} text-transparent`} style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                  }} aria-hidden="true" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-electric-purple-600 dark:group-hover:text-electric-purple-400 transition-colors">
                  {node.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {node.description}
                </p>
                
                <button className={`btn btn-outline w-full group-hover:bg-gradient-to-r ${node.hoverGradient} group-hover:text-white group-hover:border-transparent transition-all duration-300`}>
                  <CogIcon className="w-4 h-4 mr-2" />
                  Configurar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive demo section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl border border-gray-200 dark:border-gray-600">
            <div className="flex -space-x-2">
              {nodeExamples.slice(0, 3).map((node, index) => (
                <div key={index} className={`w-12 h-12 rounded-full bg-gradient-to-r ${node.gradient} flex items-center justify-center border-2 border-white dark:border-gray-800`}>
                  <node.icon className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="bg-gradient-to-r from-emerald-green-500 to-emerald-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              Código IaC
            </div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Conecta los nodos y observa cómo se genera el código automáticamente
          </p>
        </div>
      </div>
    </section>
  )
}
