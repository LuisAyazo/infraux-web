'use client';

import { useState } from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  RocketLaunchIcon,
  SparklesIcon,
  CubeIcon,
  ShieldCheckIcon,
  CheckIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import Link from 'next/link';

export default function RoadmapPage() {
  const { language } = useLanguage();
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  
  const breadcrumbItems = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/' },
    { name: 'Roadmap', href: '/roadmap', current: true }
  ];
  
  const roadmapPhases = language === 'es' ? [
    {
      phase: 'Fase 1',
      date: 'Q3 2025',
      title: 'Lanzamiento Beta Pública',
      status: 'current',
      features: [
        'Editor visual completo para AWS, GCP y Azure',
        'Generación de Terraform y CloudFormation',
        'Colaboración en tiempo real',
        'Validación pre-deploy automática'
      ],
      icon: RocketLaunchIcon,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      phase: 'Fase 2',
      date: 'Q4 2025',
      title: 'Inteligencia Artificial',
      status: 'upcoming',
      features: [
        'Asistente IA para optimización de costos',
        'Sugerencias automáticas de arquitectura',
        'Detección de vulnerabilidades con IA',
        'Auto-scaling inteligente'
      ],
      icon: SparklesIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Fase 3',
      date: 'Q1 2026',
      title: 'Kubernetes & Contenedores',
      status: 'upcoming',
      features: [
        'Editor visual para Kubernetes',
        'Integración con Docker y registros',
        'Gestión de microservicios',
        'Service mesh visual'
      ],
      icon: CubeIcon,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      phase: 'Fase 4',
      date: 'Q2 2026',
      title: 'Enterprise & Compliance',
      status: 'upcoming',
      features: [
        'Certificaciones adicionales (HIPAA, PCI)',
        'Auditoría avanzada y logs',
        'Políticas personalizables',
        'Integración con herramientas enterprise'
      ],
      icon: ShieldCheckIcon,
      color: 'from-orange-500 to-red-500'
    }
  ] : [
    {
      phase: 'Phase 1',
      date: 'Q3 2025',
      title: 'Public Beta Launch',
      status: 'current',
      features: [
        'Complete visual editor for AWS, GCP and Azure',
        'Terraform and CloudFormation generation',
        'Real-time collaboration',
        'Automatic pre-deploy validation'
      ],
      icon: RocketLaunchIcon,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      phase: 'Phase 2',
      date: 'Q4 2025',
      title: 'Artificial Intelligence',
      status: 'upcoming',
      features: [
        'AI assistant for cost optimization',
        'Automatic architecture suggestions',
        'AI vulnerability detection',
        'Intelligent auto-scaling'
      ],
      icon: SparklesIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Phase 3',
      date: 'Q1 2026',
      title: 'Kubernetes & Containers',
      status: 'upcoming',
      features: [
        'Visual editor for Kubernetes',
        'Docker and registry integration',
        'Microservices management',
        'Visual service mesh'
      ],
      icon: CubeIcon,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      phase: 'Phase 4',
      date: 'Q2 2026',
      title: 'Enterprise & Compliance',
      status: 'upcoming',
      features: [
        'Additional certifications (HIPAA, PCI)',
        'Advanced audit and logs',
        'Customizable policies',
        'Enterprise tool integration'
      ],
      icon: ShieldCheckIcon,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Breadcrumb */}
        <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-[0.02]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
                <CalendarIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {language === 'es' ? 'Roadmap del producto' : 'Product roadmap'}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
                {language === 'es' ? 'El futuro de' : 'The future of'}
                <span className="block gradient-text-emerald">InfraUX</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
                {language === 'es'
                  ? 'Nuestra visión para revolucionar la gestión de infraestructura cloud'
                  : 'Our vision to revolutionize cloud infrastructure management'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-purple-500 to-blue-500 -translate-x-1/2 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-24">
                {roadmapPhases.map((phase, index) => (
                  <div
                    key={phase.phase}
                    className={`relative ${index % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%] lg:text-right'}`}
                    onMouseEnter={() => setHoveredPhase(index)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-br ${phase.color} -translate-x-1/2 hidden lg:block ${
                      phase.status === 'current' ? 'animate-pulse shadow-emerald-glow' : ''
                    }`} />
                    
                    {/* Content card */}
                    <div className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 ${
                      hoveredPhase === index ? 'scale-105' : ''
                    }`}>
                      {/* Status badge */}
                      {phase.status === 'current' && (
                        <div className="absolute -top-3 left-8">
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            {language === 'es' ? 'EN DESARROLLO' : 'IN DEVELOPMENT'}
                          </span>
                        </div>
                      )}
                      
                      {/* Phase header */}
                      <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${phase.color} shadow-lg`}>
                          {React.createElement(phase.icon, { className: "h-8 w-8 text-white" })}
                        </div>
                        <div className={index % 2 !== 0 ? 'lg:text-right' : ''}>
                          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{phase.phase} • {phase.date}</p>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{phase.title}</h3>
                        </div>
                      </div>
                      
                      {/* Features list */}
                      <ul className={`space-y-3 ${index % 2 !== 0 ? 'lg:text-left' : ''}`}>
                        {phase.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                {language === 'es' 
                  ? '¿Tienes sugerencias para nuestro roadmap?' 
                  : 'Have suggestions for our roadmap?'
                }
              </p>
              <Link
                href={language === 'es' ? '/contacto' : '/contact'}
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                {language === 'es' ? 'Comparte tus ideas' : 'Share your ideas'}
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}