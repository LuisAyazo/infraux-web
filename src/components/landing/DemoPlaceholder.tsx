'use client'

import { PlayCircleIcon, SparklesIcon, CursorArrowRaysIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function DemoPlaceholder() {
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
                Demostración interactiva
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              Ve InfraUX
              <span className="block gradient-text-emerald">
                en acción
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium animate-fade-in-up animation-delay-200">
              Descubre cómo InfraUX transforma la manera de crear y gestionar
              infraestructura cloud con nuestra interfaz visual intuitiva
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section - Premium Style */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
            
            <div className="relative aspect-video bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800 group">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
              
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12 max-w-2xl">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-8 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <PlayCircleIcon className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
                    Video demostrativo próximamente
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
                    Estamos preparando una demostración completa de todas las capacidades de InfraUX
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      Solicitar demo personalizada
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/documentacion"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      Ver documentación
                      <CommandLineIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview - Premium Style */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Lo que verás en la demo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CursorArrowRaysIcon,
                title: 'Editor visual intuitivo',
                description: 'Arrastra y suelta componentes para crear tu infraestructura sin escribir código',
                features: ['Drag & drop', 'Vista en tiempo real', 'Validación automática']
              },
              {
                icon: CommandLineIcon,
                title: 'Generación de código',
                description: 'Obtén código Terraform optimizado y listo para producción automáticamente',
                features: ['Terraform HCL', 'Best practices', 'Versionado Git']
              },
              {
                icon: SparklesIcon,
                title: 'IA asistente',
                description: 'Recibe sugerencias inteligentes y optimizaciones basadas en mejores prácticas',
                features: ['Sugerencias contextuales', 'Optimización de costos', 'Seguridad integrada']
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
            ¿Listo para transformar tu infraestructura?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Agenda una demo personalizada con nuestro equipo y descubre todo el potencial de InfraUX
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              Agendar demo ahora
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover-lift-premium transition-all duration-300"
            >
              Ver planes y precios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
