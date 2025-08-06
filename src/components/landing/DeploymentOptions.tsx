'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  ServerIcon, 
  CloudIcon, 
  CheckIcon, 
  ArrowRightIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BoltIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { 
  SiDocker, 
  SiKubernetes, 
  SiTerraform 
} from 'react-icons/si';

export default function DeploymentOptions() {
  const { language } = useLanguage();

  const selfHostFeatures = language === 'es' ? [
    { icon: CurrencyDollarIcon, text: 'Gratis para siempre' },
    { icon: ShieldCheckIcon, text: 'Control total de tus datos' },
    { icon: ServerIcon, text: 'Despliega en tu infraestructura' },
    { icon: UserGroupIcon, text: 'Usuarios ilimitados' },
    { icon: CpuChipIcon, text: 'Sin límites de recursos' },
    { icon: CommandLineIcon, text: 'Personalización completa' }
  ] : [
    { icon: CurrencyDollarIcon, text: 'Free forever' },
    { icon: ShieldCheckIcon, text: 'Full control of your data' },
    { icon: ServerIcon, text: 'Deploy on your infrastructure' },
    { icon: UserGroupIcon, text: 'Unlimited users' },
    { icon: CpuChipIcon, text: 'No resource limits' },
    { icon: CommandLineIcon, text: 'Complete customization' }
  ];

  const cloudFeatures = language === 'es' ? [
    { icon: BoltIcon, text: 'Configuración en minutos' },
    { icon: CloudIcon, text: 'Hosting gestionado 24/7' },
    { icon: ShieldCheckIcon, text: 'Backups automáticos' },
    { icon: CpuChipIcon, text: '2 proyectos gratis incluidos' },
    { icon: UserGroupIcon, text: 'Soporte de la comunidad' },
    { icon: CheckIcon, text: 'SSL y seguridad incluidos' }
  ] : [
    { icon: BoltIcon, text: 'Setup in minutes' },
    { icon: CloudIcon, text: 'Managed hosting 24/7' },
    { icon: ShieldCheckIcon, text: 'Automatic backups' },
    { icon: CpuChipIcon, text: '2 free projects included' },
    { icon: UserGroupIcon, text: 'Community support' },
    { icon: CheckIcon, text: 'SSL and security included' }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/10 opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-6">
            <CloudIcon className="h-4 w-4" />
            {language === 'es' ? 'Opciones de Deployment' : 'Deployment Options'}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {language === 'es' 
              ? 'Despliega InfraUX en la Nube' 
              : 'Deploy InfraUX in the Cloud'
            }
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Usa nuestro cloud gestionado para empezar en minutos y enfocarte en construir.'
              : 'Use our managed cloud to start in minutes and focus on building.'
            }
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 max-w-2xl mx-auto">
          {/* Cloud Option */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-emerald-200 dark:border-emerald-500/50 hover:border-emerald-300 dark:hover:border-emerald-400/50 transition-all duration-300">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  {language === 'es' ? '⚡ Más Popular' : '⚡ Most Popular'}
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                      <CloudIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      InfraUX Cloud
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    {language === 'es' 
                      ? 'Enfócate en construir' 
                      : 'Focus on building'
                    }
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-slate-900 dark:text-white">
                    $0
                  </div>
                  <div className="text-sm text-slate-500">
                    {language === 'es' ? 'Empezar gratis' : 'Start free'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {language === 'es' ? 'Luego $49/proyecto' : 'Then $49/project'}
                  </div>
                </div>
              </div>

              {/* Quick Start */}
              <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                  {language === 'es' ? '🎁 Plan Gratuito Incluye:' : '🎁 Free Plan Includes:'}
                </p>
                <div className="text-sm text-emerald-700 dark:text-emerald-400 space-y-1">
                  <p>• {language === 'es' ? '2 proyectos activos' : '2 active projects'}</p>
                  <p>• {language === 'es' ? '10,000 ejecuciones/mes' : '10,000 executions/month'}</p>
                  <p>• {language === 'es' ? 'Todas las características' : 'All features included'}</p>
                  <p>• {language === 'es' ? 'Sin límite de tiempo' : 'No time limit'}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {cloudFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/register"
                className="group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BoltIcon className="h-5 w-5" />
                {language === 'es' ? 'Crear Cuenta Gratis' : 'Create Free Account'}
                <ArrowRightIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* Trial Info */}
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                {language === 'es'
                  ? 'Gratis para siempre • Sin tarjeta de crédito'
                  : 'Free forever • No credit card required'
                }
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
