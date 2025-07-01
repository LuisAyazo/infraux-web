'use client'

import BrandName from '@/components/BrandName'
import { CloudIcon, CodeBracketSquareIcon, PuzzlePieceIcon, ShareIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Diagramación Visual Intuitiva',
    description: 'Crea y visualiza tu infraestructura en la nube (GCP, AWS, Azure) usando un lienzo interactivo con nodos gráficos que representan componentes como Cómputo, Bases de Datos, Redes y Servicios Gestionados.',
    icon: PuzzlePieceIcon,
    gradient: 'from-cloud-blue-500 to-cloud-blue-600',
    bgGradient: 'from-cloud-blue-500/10 to-cloud-blue-600/20',
  },
  {
    name: 'Deploy con Un Solo Click',
    description: 'La mejor herramienta del mercado para desplegar infraestructura cloud. Con un solo click despliega hacia cualquier proveedor de nube que necesites, eliminando completamente la complejidad manual.',
    icon: CodeBracketSquareIcon,
    gradient: 'from-emerald-green-500 to-emerald-green-600',
    bgGradient: 'from-emerald-green-500/10 to-emerald-green-600/20',
  },
  {
    name: 'Pre-Deploy y Post-Deploy Automatizado',
    description: 'Validaciones automáticas antes del despliegue y verificaciones post-despliegue garantizan que tu infraestructura funcione perfectamente desde el primer momento.',
    icon: CloudIcon,
    gradient: 'from-electric-purple-500 to-electric-purple-600',
    bgGradient: 'from-electric-purple-500/10 to-electric-purple-600/20',
  },
  {
    name: 'Soporte Multi-Nube Completo',
    description: 'Despliega sin esfuerzo hacia Google Cloud Platform (GCP), Amazon Web Services (AWS), y Microsoft Azure desde una única interfaz unificada.',
    icon: ShareIcon,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/20',
  },
]

export default function WhatIsInfraUX() {
  return (
    <section id="what-is-infraux" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-purple-500/5 via-cloud-blue-500/5 to-emerald-green-500/5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-electric-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-green-400/10 rounded-full blur-3xl animate-float-delay"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Qué es?{' '}
            <BrandName infraClassName="text-[#374151] font-bold" uxClassName="text-emerald-500 font-bold" />
            ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <BrandName infraClassName="text-[#374151] font-bold" uxClassName="text-emerald-500 font-bold" /> es la <span className="font-bold text-gray-800 dark:text-white">herramienta líder del mercado</span> para desplegar infraestructura cloud con un solo click.
            Simplifica la creación, el despliegue y la gestión de infraestructura en cualquier nube a través de una potente interfaz visual.
          </p>
          <div className="mt-8 flex justify-center animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-700/60 rounded-full border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"> {/* Pill a gris */}
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Icono de Pill a gris */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Deploy con un click • Pre-Deploy • Post-Deploy</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className={`group card p-8 animate-slide-up-delay-${index + 1} hover:scale-105 transition-all duration-500 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-gray-400 dark:hover:border-gray-500`} // Hover de borde a gris
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300`} style={{ animationDelay: `${index * 0.1}s` }}> {/* Contenedor de icono a gris */}
                <feature.icon className={`w-12 h-12 text-gray-700 dark:text-gray-300`} aria-hidden="true" /> {/* Icono a gris */}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"> {/* Hover de título a gris/blanco */}
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-4 p-6 bg-gray-100 dark:bg-gray-700/60 rounded-2xl backdrop-blur-sm border border-gray-300 dark:border-gray-600 hover:scale-105 transition-all duration-300 group cursor-pointer"> {/* CTA a gris */}
            <div className="w-12 h-12 bg-gray-600 dark:bg-gray-500 rounded-full flex items-center justify-center"> {/* Círculo de icono a gris */}
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"> {/* Hover de texto a gris/blanco */}
              Transforma tu forma de pensar la infraestructura
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
