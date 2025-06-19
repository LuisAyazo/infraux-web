'use client'

import { UsersIcon, CloudArrowUpIcon, ServerIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'

const useCases = [
  {
    title: 'Automatización para Equipos DevOps',
    description: 'Acelera los ciclos de despliegue y reduce errores manuales automatizando la creación de infraestructuras complejas y repetibles.',
    icon: CloudArrowUpIcon,
    color: 'text-emerald-green-500',
    bgColor: 'bg-emerald-green-500/10',
    borderColor: 'border-emerald-green-500/20',
  },
  {
    title: 'Colaboración Visual para Equipos',
    description: 'Fomenta la colaboración entre desarrolladores, arquitectos y SREs utilizando diagramas como fuente única de verdad para la infraestructura.',
    icon: UsersIcon,
    color: 'text-cloud-blue-500',
    bgColor: 'bg-cloud-blue-500/10',
    borderColor: 'border-cloud-blue-500/20',
  },
  {
    title: 'Arquitecturas Híbridas y Multi-Cloud',
    description: 'Diseña y gestiona infraestructuras que abarcan múltiples proveedores de nube o combinan recursos on-premise con la nube de forma coherente.',
    icon: ServerIcon,
    color: 'text-electric-purple-500',
    bgColor: 'bg-electric-purple-500/10',
    borderColor: 'border-electric-purple-500/20',
  },
  {
    title: 'Prototipado Rápido de Infraestructura',
    description: 'Valida ideas y arquitecturas rápidamente creando prototipos visuales y generando el IaC correspondiente en minutos, no días.',
    icon: RectangleGroupIcon,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"> {/* Fondo de sección neutro */}
      {/* Background decoration - ajustadas para usar solo colores primarios/secundarios de la paleta */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-green-400/10 rounded-full blur-3xl animate-float-delay"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Casos de Uso <span className="text-gray-800 dark:text-white">Clave</span> {/* Título a neutro */}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            <span className="text-electric-purple-600 dark:text-electric-purple-400">Infra</span><span className="text-emerald-green-600 dark:text-emerald-green-400">UX</span> potencia a diversos equipos y escenarios para lograr una gestión de infraestructura más eficiente y visual. {/* Logo a colores sólidos */}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title} 
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-fade-in-up`} // Hover de borde a gris
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300`}> {/* Contenedor de icono a gris */}
                <useCase.icon className={`w-10 h-10 text-gray-700 dark:text-gray-300`} aria-hidden="true" /> {/* Icono a gris */}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{useCase.title}</h3> {/* Hover de título a gris/blanco */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
