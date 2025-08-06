'use client';

import React from 'react';
import { ViewColumnsIcon, GlobeAmericasIcon, ArrowUpCircleIcon, ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PremiumFeatures() {
  const { language } = useLanguage();

  const features = [
    {
      icon: ViewColumnsIcon,
      title: language === 'es' ? 'Pipeline Visual' : 'Visual Pipeline',
      description: language === 'es' 
        ? 'Diseña y visualiza tus flujos de despliegue de principio a fin.' 
        : 'Design and visualize your deployment pipelines from end to end.',
      color: 'from-blue-500 to-cyan-500',
      badge: language === 'es' ? 'Nuevo' : 'New'
    },
    {
      icon: GlobeAmericasIcon,
      title: language === 'es' ? 'Soporte Multi-Región' : 'Multi-Region Support',
      description: language === 'es'
        ? 'Zenix AI te ayuda a gestionar tu infraestructura en múltiples regiones.'
        : 'Zenix AI helps you manage your infrastructure across multiple regions.',
      color: 'from-emerald-500 to-teal-500',
      badge: language === 'es' ? 'IA' : 'AI'
    },
    {
      icon: ArrowUpCircleIcon,
      title: language === 'es' ? 'Promociones y Entornos' : 'Promotions & Environments',
      description: language === 'es'
        ? 'Promociona despliegues entre entornos (dev, staging, prod) con un solo clic.'
        : 'Promote deployments between environments (dev, staging, prod) with a single click.',
      color: 'from-orange-500 to-red-500',
      badge: language === 'es' ? 'Hot' : 'Hot'
    },
    {
      icon: ExclamationTriangleIcon,
      title: language === 'es' ? 'Detección de Drift' : 'Drift Detection',
      description: language === 'es'
        ? 'Detecta y corrige automáticamente cambios no autorizados en tu infraestructura.'
        : 'Automatically detect and remediate unauthorized changes in your infrastructure.',
      color: 'from-purple-500 to-pink-500',
      badge: language === 'es' ? 'Seguro' : 'Secure'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950/20 border-y border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
            <SparklesIcon className="h-4 w-4" />
            {language === 'es' ? 'Características Premium' : 'Premium Features'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' 
              ? 'Potencia tu Infraestructura con IA' 
              : 'Power Your Infrastructure with AI'
            }
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {language === 'es'
              ? 'InfraUX combina diseño visual intuitivo con inteligencia artificial avanzada para transformar cómo construyes infraestructura'
              : 'InfraUX combines intuitive visual design with advanced artificial intelligence to transform how you build infrastructure'
            }
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${feature.color} text-white shadow-md`}>
                    {feature.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
            {language === 'es' 
              ? 'Comienza con nuestro plan gratuito y escala cuando lo necesites' 
              : 'Start with our free plan and scale when you need it'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <SparklesIcon className="h-5 w-5" />
              {language === 'es' ? 'Prueba Gratis' : 'Try Free'}
            </a>
            <a 
              href="/pricing" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {language === 'es' ? 'Ver Planes Premium' : 'View Premium Plans'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
