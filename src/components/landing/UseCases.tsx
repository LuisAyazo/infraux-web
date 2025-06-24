'use client'

import {
  UsersIcon,
  CloudArrowUpIcon,
  ServerIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const useCases = [
  {
    title: 'Automatización para Equipos DevOps',
    description: 'Acelera los ciclos de despliegue y reduce errores manuales automatizando la creación de infraestructuras complejas y repetibles.',
    icon: CloudArrowUpIcon,
    benefits: ['CI/CD integrado', 'Rollbacks automáticos', 'Validación en tiempo real'],
    cta: 'Ver caso DevOps',
    link: '#devops'
  },
  {
    title: 'Colaboración Visual para Equipos',
    description: 'Fomenta la colaboración entre desarrolladores, arquitectos y SREs utilizando diagramas como fuente única de verdad para la infraestructura.',
    icon: UsersIcon,
    benefits: ['Diagramas compartidos', 'Control de versiones', 'Comentarios en tiempo real'],
    cta: 'Ver caso colaboración',
    link: '#collaboration'
  },
  {
    title: 'Arquitecturas Híbridas y Multi-Cloud',
    description: 'Diseña y gestiona infraestructuras que abarcan múltiples proveedores de nube o combinan recursos on-premise con la nube de forma coherente.',
    icon: ServerIcon,
    benefits: ['AWS, Azure, GCP', 'Kubernetes nativo', 'Terraform compatible'],
    cta: 'Ver caso multi-cloud',
    link: '#multicloud'
  },
  {
    title: 'Prototipado Rápido de Infraestructura',
    description: 'Valida ideas y arquitecturas rápidamente creando prototipos visuales y generando el IaC correspondiente en minutos, no días.',
    icon: RectangleGroupIcon,
    benefits: ['Templates predefinidos', 'Preview instantáneo', 'Exportación a código'],
    cta: 'Ver caso prototipado',
    link: '#prototyping'
  },
]

const additionalUseCases = [
  {
    title: 'Startups en Crecimiento',
    description: 'Escala tu infraestructura de forma eficiente sin necesidad de un equipo DevOps completo.',
    icon: RocketLaunchIcon,
    metric: '80% menos tiempo',
    detail: 'en configuración inicial'
  },
  {
    title: 'Empresas Enterprise',
    description: 'Estandariza y gobierna la infraestructura a través de políticas y templates corporativos.',
    icon: BuildingOfficeIcon,
    metric: '60% reducción',
    detail: 'en errores de configuración'
  },
  {
    title: 'Arquitectos de Soluciones',
    description: 'Diseña arquitecturas complejas visualmente y valida costos antes de implementar.',
    icon: CpuChipIcon,
    metric: '5x más rápido',
    detail: 'en diseño de arquitecturas'
  },
  {
    title: 'Equipos de Seguridad',
    description: 'Implementa mejores prácticas de seguridad automáticamente en toda la infraestructura.',
    icon: ShieldCheckIcon,
    metric: '100% compliance',
    detail: 'con estándares de seguridad'
  }
]

export default function UseCases() {
  return (
    <>
      {/* Hero Section - Premium Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
              <SparklesIcon className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Soluciones para cada equipo
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              Casos de uso
              <span className="block gradient-text-emerald">
                que transforman
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
              InfraUX se adapta a las necesidades específicas de cada equipo,
              desde startups hasta empresas enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Main Use Cases - Premium Style */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        {useCase.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {useCase.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href={useCase.link}
                        className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg group-hover:gap-3 transition-all"
                      >
                        {useCase.cta}
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Use Cases - Premium Style */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Más casos de éxito
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {useCase.description}
                      </p>
                      
                      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-3xl font-black gradient-text-emerald mb-1">
                          {useCase.metric}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                          {useCase.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            ¿Cuál es tu caso de uso?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Cuéntanos sobre tu proyecto y te mostraremos cómo InfraUX puede ayudarte
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              Hablar con un experto
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover-lift-premium transition-all duration-300"
            >
              Ver demo en vivo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
