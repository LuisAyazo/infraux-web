'use client'

import { ArrowPathIcon, CheckBadgeIcon, DocumentTextIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: '1. Diseño Visual',
    description: 'Arrastra, conecta y configura nodos en nuestro editor intuitivo para modelar tu arquitectura cloud deseada.',
    icon: PresentationChartLineIcon,
    color: 'text-cloud-blue-500',
    bgColor: 'bg-cloud-blue-500/10',
    borderColor: 'border-cloud-blue-500/20',
  },
  {
    name: '2. Traducción a IaC',
    description: '<span class="font-bold">Infra</span><span class="text-emerald-500">UX</span> convierte automáticamente tu diagrama en código IaC optimizado (Terraform, Pulumi, etc.), listo para ser versionado y reutilizado.',
    icon: DocumentTextIcon,
    color: 'text-emerald-green-500',
    bgColor: 'bg-emerald-green-500/10',
    borderColor: 'border-emerald-green-500/20',
  },
  {
    name: '3. Validación y Recomendaciones',
    description: 'Nuestro motor inteligente valida tu diseño contra las mejores prácticas de la nube y ofrece recomendaciones para optimizar costos, seguridad y rendimiento.',
    icon: CheckBadgeIcon,
    color: 'text-electric-purple-500',
    bgColor: 'bg-electric-purple-500/10',
    borderColor: 'border-electric-purple-500/20',
  },
  {
    name: '4. Despliegue Automatizado',
    description: 'Integra <span class="font-bold">Infra</span><span class="text-emerald-500">UX</span> con tus pipelines de CI/CD para desplegar tu infraestructura directamente a GCP, AWS o Azure con un solo clic o comando.',
    icon: ArrowPathIcon,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
]

export default function DeploymentFlow() {
  return (
    <section id="flow" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration - simplificado */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple-500/5 via-emerald-green-500/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-green-400/10 rounded-full blur-3xl animate-float"></div> {/* Mantener o ajustar opacidad/color */}
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-electric-purple-400/10 rounded-full blur-3xl animate-float-delay"></div> {/* Mantener o ajustar opacidad/color */}
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flujo de Despliegue <span className="text-gray-800 dark:text-white">Simplificado</span> {/* Título a neutro */}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desde la idea hasta la infraestructura productiva en cuatro sencillos pasos.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop view */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-400/50 dark:bg-gray-600/50 transform -translate-y-1/2 rounded-full shadow-lg" // Línea a gris
               style={{ top: 'calc(50% - 2rem)'}} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.name}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-fade-in-up`} // Hover de borde a gris
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative mb-6 p-4 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}> {/* Contenedor de icono a gris */}
                  <step.icon className={`w-12 h-12 text-gray-700 dark:text-gray-300`} aria-hidden="true" /> {/* Icono a gris */}
                  {/* Number circle */}
                  <span className={`absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm bg-gray-600 dark:bg-gray-500 text-white shadow-lg`}> {/* Círculo de número a gris */}
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{step.name.substring(3)}</h3> {/* Remove number from title */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
