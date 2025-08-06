'use client';

import React from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import MigrationGuides from '@/components/landing/MigrationGuides';
import ComparisonTable from '@/components/landing/ComparisonTable';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  ArrowsRightLeftIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function MigrationClient() {
  const { language } = useLanguage();

  const benefits = language === 'es' ? [
    {
      icon: RocketLaunchIcon,
      title: 'Migración Sin Fricción',
      description: 'Herramientas automatizadas que convierten tu infraestructura existente a InfraUX en horas, no semanas.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Sin Pérdida de Datos',
      description: 'Proceso de migración seguro que preserva todo tu estado, configuraciones y historial.'
    },
    {
      icon: ClockIcon,
      title: 'Sin Downtime',
      description: 'Migra gradualmente sin interrumpir tus servicios en producción. Rollback instantáneo si es necesario.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'ROI Inmediato',
      description: 'Empieza a ahorrar desde el día 1 con nuestra plataforma 100% open source sin costos de licencia.'
    }
  ] : [
    {
      icon: RocketLaunchIcon,
      title: 'Frictionless Migration',
      description: 'Automated tools that convert your existing infrastructure to InfraUX in hours, not weeks.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'No Data Loss',
      description: 'Secure migration process that preserves all your state, configurations, and history.'
    },
    {
      icon: ClockIcon,
      title: 'Zero Downtime',
      description: 'Migrate gradually without disrupting your production services. Instant rollback if needed.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Immediate ROI',
      description: 'Start saving from day 1 with our 100% open source platform with no licensing costs.'
    }
  ];

  const migrationSteps = language === 'es' ? [
    {
      number: '01',
      title: 'Analiza',
      description: 'Ejecuta nuestro analizador en tu infraestructura actual para identificar recursos y dependencias.'
    },
    {
      number: '02',
      title: 'Convierte',
      description: 'Usa nuestras herramientas automatizadas para convertir tu código al formato InfraUX.'
    },
    {
      number: '03',
      title: 'Valida',
      description: 'Revisa y valida la migración en un entorno de prueba antes de producción.'
    },
    {
      number: '04',
      title: 'Migra',
      description: 'Ejecuta la migración con confianza, monitoreando cada paso del proceso.'
    }
  ] : [
    {
      number: '01',
      title: 'Analyze',
      description: 'Run our analyzer on your current infrastructure to identify resources and dependencies.'
    },
    {
      number: '02',
      title: 'Convert',
      description: 'Use our automated tools to convert your code to InfraUX format.'
    },
    {
      number: '03',
      title: 'Validate',
      description: 'Review and validate the migration in a test environment before production.'
    },
    {
      number: '04',
      title: 'Migrate',
      description: 'Execute the migration with confidence, monitoring every step of the process.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
                <ArrowsRightLeftIcon className="h-4 w-4" />
                {language === 'es' ? 'Migración Fácil y Segura' : 'Easy & Secure Migration'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' 
                  ? 'Migra a InfraUX Sin Esfuerzo' 
                  : 'Migrate to InfraUX Effortlessly'
                }
              </h1>
              
              <p className="text-xl sm:text-2xl text-emerald-50 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'Convierte tu infraestructura existente de Terraform, Ansible, Pulumi y más a InfraUX con nuestras herramientas automatizadas de migración.'
                  : 'Convert your existing infrastructure from Terraform, Ansible, Pulumi and more to InfraUX with our automated migration tools.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#guides"
                  className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <SparklesIcon className="h-5 w-5" />
                  {language === 'es' ? 'Ver Guías de Migración' : 'View Migration Guides'}
                </a>
                
                <a
                  href="#comparison"
                  className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  {language === 'es' ? 'Comparar Herramientas' : 'Compare Tools'}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? '¿Por qué migrar a InfraUX?' : 'Why migrate to InfraUX?'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'InfraUX no solo reemplaza tu herramienta actual, la mejora en todos los aspectos'
                  : 'InfraUX doesn\'t just replace your current tool, it improves it in every way'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Proceso de Migración Simple' : 'Simple Migration Process'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Migra tu infraestructura completa en 4 pasos simples'
                  : 'Migrate your entire infrastructure in 4 simple steps'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < migrationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800" />
                  )}
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-3xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://docs.infraux.com/migration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                {language === 'es' ? 'Ver documentación completa' : 'View complete documentation'}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Migration Guides */}
        <div id="guides">
          <MigrationGuides />
        </div>

        {/* Comparison Table */}
        <div id="comparison">
          <ComparisonTable />
        </div>

        {/* Success Stories */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Historias de Éxito' : 'Success Stories'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Empresas que migraron exitosamente a InfraUX'
                  : 'Companies that successfully migrated to InfraUX'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: 'TechStartup Inc.',
                  from: 'Terraform Cloud',
                  savings: language === 'es' ? '$50K/año ahorrados' : '$50K/year saved',
                  time: language === 'es' ? '2 días de migración' : '2 days migration',
                  quote: language === 'es' 
                    ? 'La migración fue increíblemente suave. Las herramientas automatizadas de InfraUX convirtieron nuestros 200+ módulos de Terraform sin problemas.'
                    : 'The migration was incredibly smooth. InfraUX\'s automated tools converted our 200+ Terraform modules without issues.'
                },
                {
                  company: 'Enterprise Corp',
                  from: 'Ansible Tower',
                  savings: language === 'es' ? '70% reducción en costos' : '70% cost reduction',
                  time: language === 'es' ? '1 semana completa' : '1 week complete',
                  quote: language === 'es'
                    ? 'Pasamos de pagar licencias enterprise caras a una solución open source que es aún más poderosa.'
                    : 'We went from paying expensive enterprise licenses to an open source solution that\'s even more powerful.'
                },
                {
                  company: 'CloudNative Ltd',
                  from: 'Pulumi + ArgoCD',
                  savings: language === 'es' ? '5x más rápido' : '5x faster',
                  time: language === 'es' ? '3 días de migración' : '3 days migration',
                  quote: language === 'es'
                    ? 'InfraUX unificó nuestras herramientas dispersas en una plataforma coherente. La productividad del equipo se disparó.'
                    : 'InfraUX unified our scattered tools into one coherent platform. Team productivity skyrocketed.'
                }
              ].map((story, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {story.company}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {language === 'es' ? `Migró desde ${story.from}` : `Migrated from ${story.from}`}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white dark:bg-slate-900 rounded-lg">
                      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {story.savings}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-slate-900 rounded-lg">
                      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {story.time}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-600 dark:text-slate-400 italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {language === 'es' 
                ? '¿Listo para migrar a InfraUX?' 
                : 'Ready to migrate to InfraUX?'
              }
            </h2>
            
            <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Únete a miles de equipos que ya disfrutan de una mejor forma de gestionar infraestructura'
                : 'Join thousands of teams already enjoying a better way to manage infrastructure'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/infraux/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                {language === 'es' ? 'Empezar Migración' : 'Start Migration'}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              
              <a
                href="https://discord.gg/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all duration-300"
              >
                {language === 'es' ? 'Obtener Ayuda' : 'Get Help'}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}