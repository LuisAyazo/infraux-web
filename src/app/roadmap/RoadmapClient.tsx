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
  ArrowRightIcon,
  CodeBracketIcon,
  CloudIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BeakerIcon,
  DocumentTextIcon,
  BoltIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import Link from 'next/link';

export default function RoadmapClient() {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<'2024' | '2025' | '2026'>('2025');
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  
  const breadcrumbItems = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/' },
    { name: 'Roadmap', href: '/roadmap', current: true }
  ];

  // Historia completa desde noviembre 2024
  const roadmapHistory = {
    '2024': language === 'es' ? [
      {
        phase: 'Inicio',
        date: 'Noviembre 2024',
        title: 'Nacimiento de InfraUX',
        status: 'completed',
        description: 'La idea nace de la frustración con las herramientas existentes',
        features: [
          'Concepto inicial: Editor visual para infraestructura',
          'Investigación de mercado y validación',
          'Definición de arquitectura base',
          'Primeros mockups y prototipos'
        ],
        icon: BeakerIcon,
        color: 'from-slate-500 to-slate-600'
      },
      {
        phase: 'MVP',
        date: 'Diciembre 2024',
        title: 'Primer Prototipo',
        status: 'completed',
        description: 'Desarrollo del MVP con funcionalidades básicas',
        features: [
          'Editor visual básico con React Flow',
          'Soporte inicial para AWS',
          'Generación básica de Terraform',
          'Autenticación con Supabase'
        ],
        icon: CodeBracketIcon,
        color: 'from-blue-500 to-indigo-500'
      }
    ] : [
      {
        phase: 'Beginning',
        date: 'November 2024',
        title: 'Birth of InfraUX',
        status: 'completed',
        description: 'The idea was born from frustration with existing tools',
        features: [
          'Initial concept: Visual editor for infrastructure',
          'Market research and validation',
          'Base architecture definition',
          'First mockups and prototypes'
        ],
        icon: BeakerIcon,
        color: 'from-slate-500 to-slate-600'
      },
      {
        phase: 'MVP',
        date: 'December 2024',
        title: 'First Prototype',
        status: 'completed',
        description: 'MVP development with basic functionalities',
        features: [
          'Basic visual editor with React Flow',
          'Initial AWS support',
          'Basic Terraform generation',
          'Authentication with Supabase'
        ],
        icon: CodeBracketIcon,
        color: 'from-blue-500 to-indigo-500'
      }
    ],
    '2025': language === 'es' ? [
      {
        phase: 'Q1 2025',
        date: 'Enero - Marzo',
        title: 'Fundación Técnica',
        status: 'completed',
        description: 'Construcción de la arquitectura core',
        features: [
          'Migración MongoDB → PostgreSQL completada',
          'Arquitectura multi-tenant implementada',
          'Sistema de caché multicapa',
          'Editor visual avanzado con drag & drop',
          'Soporte completo para AWS, GCP y Azure',
          'Generación de IaC (Terraform, CloudFormation, Pulumi)',
          'Sistema de templates y componentes reutilizables',
          'Validación de sintaxis en tiempo real'
        ],
        icon: CubeIcon,
        color: 'from-purple-500 to-indigo-500'
      },
      {
        phase: 'Q2 2025',
        date: 'Abril - Junio',
        title: 'Experiencia & Colaboración',
        status: 'completed',
        description: 'Mejoras en UX y funcionalidades colaborativas',
        features: [
          'Sistema de promoción entre ambientes',
          'Onboarding flow completo con tour interactivo',
          'Dashboard con métricas y analytics en tiempo real',
          'Herramientas de dibujo avanzadas (flechas, texto, formas)',
          'Auto-guardado y versionado automático',
          'WebSocket con reconexión automática',
          'Preview de cambios antes de aplicar',
          'Historial completo de modificaciones'
        ],
        icon: UserGroupIcon,
        color: 'from-emerald-500 to-teal-500'
      },
      {
        phase: 'Beta',
        date: '26 de Julio',
        title: '🚀 Lanzamiento Beta Pública',
        status: 'current',
        description: 'Apertura al público con funcionalidades core',
        features: [
          'Sistema de pagos con Stripe integrado',
          'API pública v1 con documentación Swagger',
          'Onboarding interactivo con tour guiado',
          'Integraciones: GitHub, GitLab, Slack, Teams',
          'Performance optimizado (<1.5s carga inicial)',
          'Soporte multi-idioma (ES/EN)',
          'Centro de ayuda y documentación completa',
          '100 usuarios beta objetivo'
        ],
        icon: RocketLaunchIcon,
        color: 'from-yellow-500 to-orange-500'
      },
      {
        phase: 'Q3 2025',
        date: 'Agosto - Septiembre',
        title: 'Despliegue & Costos',
        status: 'upcoming',
        description: 'Sistema completo de deployment y análisis de costos',
        features: [
          '🚀 Deployment Page: Vista completa de despliegues',
          '📊 Pipeline Visual: Visualización del flujo de deployment',
          'Pipeline de ejecución real con Terraform/Pulumi/CDK',
          'Logs en tiempo real y estado de ejecución',
          'Rollback automático con un click',
          'Integración con AWS Cost Explorer',
          'Dashboard de costos con recomendaciones',
          'Colaboración en tiempo real con cursores múltiples',
          'Sistema de comentarios y revisiones en diagramas',
          'Notificaciones y alertas inteligentes'
        ],
        icon: ChartBarIcon,
        color: 'from-green-500 to-emerald-500'
      },
      {
        phase: 'Q4 2025',
        date: 'Octubre - Diciembre',
        title: 'Marketplace & Enterprise',
        status: 'upcoming',
        description: 'Expansión del ecosistema y características enterprise',
        features: [
          'Marketplace de templates comunitarios verificados',
          'SSO/SAML authentication para empresas',
          'Audit logs avanzados con exportación',
          'Compliance reports (SOC2, HIPAA, ISO 27001)',
          'AI Assistant para generación y optimización',
          'Optimizaciones automáticas con IA',
          'Políticas de gobernanza personalizables',
          'SLA garantizado 99.9% uptime'
        ],
        icon: BuildingOfficeIcon,
        color: 'from-indigo-500 to-purple-500'
      }
    ] : [
      {
        phase: 'Q1 2025',
        date: 'January - March',
        title: 'Technical Foundation',
        status: 'completed',
        description: 'Building the core architecture',
        features: [
          'MongoDB → PostgreSQL migration completed',
          'Multi-tenant architecture implemented',
          'Multi-layer cache system',
          'Advanced visual editor with drag & drop',
          'Support for AWS, GCP and Azure',
          'IaC generation (Terraform, CloudFormation, Pulumi)'
        ],
        icon: CubeIcon,
        color: 'from-purple-500 to-indigo-500'
      },
      {
        phase: 'Q2 2025',
        date: 'April - June',
        title: 'Experience & Collaboration',
        status: 'completed',
        description: 'UX improvements and collaborative features',
        features: [
          'Environment promotion system',
          'Complete onboarding flow',
          'Dashboard with real-time metrics',
          'Drawing tools (arrows, text)',
          'Auto-save and diagram compression',
          'WebSocket with automatic reconnection'
        ],
        icon: UserGroupIcon,
        color: 'from-emerald-500 to-teal-500'
      },
      {
        phase: 'Beta',
        date: 'July 26',
        title: '🚀 Public Beta Launch',
        status: 'current',
        description: 'Public opening with core functionalities',
        features: [
          'Payment system with Stripe',
          'Public API v1 with documentation',
          'Interactive onboarding with guided tour',
          'Integrations: GitHub, GitLab, Slack',
          'Optimized performance (<1.5s load)',
          '100 beta users target'
        ],
        icon: RocketLaunchIcon,
        color: 'from-yellow-500 to-orange-500'
      },
      {
        phase: 'Q3 2025',
        date: 'August - September',
        title: 'Deployment & Costs',
        status: 'upcoming',
        description: 'Complete deployment system and cost analysis',
        features: [
          '🚀 Deployment Page: Complete deployment view',
          '📊 Visual Pipeline: Deployment flow visualization',
          'Real execution pipeline with Terraform/Pulumi/CDK',
          'Real-time logs and execution status',
          'One-click automatic rollback',
          'AWS Cost Explorer integration',
          'Cost dashboard with recommendations',
          'Real-time collaboration with multiple cursors',
          'Comment and review system in diagrams',
          'Smart notifications and alerts'
        ],
        icon: ChartBarIcon,
        color: 'from-green-500 to-emerald-500'
      },
      {
        phase: 'Q4 2025',
        date: 'October - December',
        title: 'Marketplace & Enterprise',
        status: 'upcoming',
        description: 'Ecosystem expansion and enterprise features',
        features: [
          'Community templates marketplace',
          'SSO/SAML authentication',
          'Advanced audit logs',
          'Compliance reports (SOC2, HIPAA)',
          'AI Assistant for generation',
          'Automatic optimizations with AI'
        ],
        icon: BuildingOfficeIcon,
        color: 'from-indigo-500 to-purple-500'
      }
    ],
    '2026': language === 'es' ? [
      {
        phase: 'Q1 2026',
        date: 'Enero - Marzo',
        title: 'Kubernetes & Contenedores',
        status: 'future',
        description: 'Expansión completa a ecosistema de contenedores',
        features: [
          'Editor visual para Kubernetes nativo',
          'Integración con Docker Hub y registros privados',
          'Gestión visual de microservicios',
          'Service mesh visual (Istio, Linkerd)',
          'Helm charts generación automática',
          'GitOps workflows integrados'
        ],
        icon: CubeIcon,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        phase: 'Q2 2026',
        date: 'Abril - Junio',
        title: 'Multi-Cloud Orchestration',
        status: 'future',
        description: 'Gestión unificada multi-cloud avanzada',
        features: [
          'Despliegues simultáneos multi-cloud',
          'Migración automática entre clouds',
          'Cost optimization cross-cloud',
          'Disaster recovery automatizado',
          'Compliance multi-región',
          'Edge computing support'
        ],
        icon: GlobeAltIcon,
        color: 'from-purple-500 to-pink-500'
      },
      {
        phase: 'Q3 2026',
        date: 'Julio - Septiembre',
        title: 'Mobile & IoT',
        status: 'future',
        description: 'Expansión a dispositivos móviles e IoT',
        features: [
          'App móvil nativa (iOS/Android)',
          'Monitoreo y alertas en tiempo real móvil',
          'Soporte para infraestructura IoT',
          'Edge computing visual',
          'Integración con AWS IoT, Azure IoT',
          'Dashboard móvil personalizable'
        ],
        icon: DevicePhoneMobileIcon,
        color: 'from-green-500 to-teal-500'
      },
      {
        phase: 'Q4 2026',
        date: 'Octubre - Diciembre',
        title: 'AI-Driven Infrastructure',
        status: 'future',
        description: 'Infraestructura completamente impulsada por IA',
        features: [
          'Infrastructure from Code: diagrama desde código',
          'AI Cost Predictor con ML avanzado',
          'Auto-scaling predictivo con IA',
          'Detección y corrección automática de problemas',
          'Blockchain para auditoría inmutable',
          'Self-hosted enterprise edition'
        ],
        icon: SparklesIcon,
        color: 'from-amber-500 to-red-500'
      }
    ] : [
      {
        phase: 'Q1 2026',
        date: 'January - March',
        title: 'Kubernetes & Containers',
        status: 'future',
        description: 'Full expansion to container ecosystem',
        features: [
          'Native Kubernetes visual editor',
          'Docker Hub and private registry integration',
          'Visual microservices management',
          'Visual service mesh (Istio, Linkerd)',
          'Automatic Helm charts generation',
          'Integrated GitOps workflows'
        ],
        icon: CubeIcon,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        phase: 'Q2 2026',
        date: 'April - June',
        title: 'Multi-Cloud Orchestration',
        status: 'future',
        description: 'Advanced unified multi-cloud management',
        features: [
          'Simultaneous multi-cloud deployments',
          'Automatic cloud migration',
          'Cross-cloud cost optimization',
          'Automated disaster recovery',
          'Multi-region compliance',
          'Edge computing support'
        ],
        icon: GlobeAltIcon,
        color: 'from-purple-500 to-pink-500'
      },
      {
        phase: 'Q3 2026',
        date: 'July - September',
        title: 'Mobile & IoT',
        status: 'future',
        description: 'Expansion to mobile devices and IoT',
        features: [
          'Native mobile app (iOS/Android)',
          'Real-time mobile monitoring and alerts',
          'IoT infrastructure support',
          'Visual edge computing',
          'AWS IoT, Azure IoT integration',
          'Customizable mobile dashboard'
        ],
        icon: DevicePhoneMobileIcon,
        color: 'from-green-500 to-teal-500'
      },
      {
        phase: 'Q4 2026',
        date: 'October - December',
        title: 'AI-Driven Infrastructure',
        status: 'future',
        description: 'Fully AI-powered infrastructure',
        features: [
          'Infrastructure from Code: diagram from code',
          'AI Cost Predictor with advanced ML',
          'Predictive AI auto-scaling',
          'Automatic problem detection and correction',
          'Blockchain for immutable audit',
          'Self-hosted enterprise edition'
        ],
        icon: SparklesIcon,
        color: 'from-amber-500 to-red-500'
      }
    ]
  };

  const currentRoadmap = roadmapHistory[selectedYear];

  // Estadísticas del proyecto
  const projectStats = language === 'es' ? {
    title: 'Estado del Proyecto',
    metrics: [
      { label: 'Funcionalidades Completadas', value: '85%', icon: CheckIcon },
      { label: 'Cobertura de Tests', value: '98.6%', icon: ShieldCheckIcon },
      { label: 'Velocidad de Desarrollo', value: '50 pts/sprint', icon: BoltIcon },
      { label: 'Satisfacción del Equipo', value: '4.7/5', icon: AcademicCapIcon }
    ]
  } : {
    title: 'Project Status',
    metrics: [
      { label: 'Completed Features', value: '85%', icon: CheckIcon },
      { label: 'Test Coverage', value: '98.6%', icon: ShieldCheckIcon },
      { label: 'Development Velocity', value: '50 pts/sprint', icon: BoltIcon },
      { label: 'Team Satisfaction', value: '4.7/5', icon: AcademicCapIcon }
    ]
  };

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
                  {language === 'es' ? 'Roadmap completo 2024-2026' : 'Complete roadmap 2024-2026'}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
                {language === 'es' ? 'El viaje de' : 'The journey of'}
                <span className="block gradient-text-emerald">InfraUX</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
                {language === 'es'
                  ? 'Desde una idea en noviembre 2024 hasta revolucionar la gestión de infraestructura cloud'
                  : 'From an idea in November 2024 to revolutionizing cloud infrastructure management'
                }
              </p>
            </div>

            {/* Year Selector */}
            <div className="flex justify-center gap-4 mb-12">
              {(['2024', '2025', '2026'] as const).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-12 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
              {projectStats.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {projectStats.metrics.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
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
                {currentRoadmap.map((phase, index) => (
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
                      {phase.status === 'completed' && (
                        <div className="absolute -top-3 left-8">
                          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            <CheckIcon className="h-3 w-3" />
                            {language === 'es' ? 'COMPLETADO' : 'COMPLETED'}
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
                          {phase.description && (
                            <p className="text-slate-600 dark:text-slate-400 mt-1">{phase.description}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Features list */}
                      <ul className={`space-y-3 ${index % 2 !== 0 ? 'lg:text-left' : ''}`}>
                        {phase.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckIcon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              phase.status === 'completed' ? 'text-green-500' : 
                              phase.status === 'current' ? 'text-emerald-500' : 
                              'text-slate-400'
                            }`} />
                            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Milestones */}
            <div className="mt-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
                {language === 'es' ? 'Hitos Clave' : 'Key Milestones'}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-4">
                    <RocketLaunchIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === 'es' ? 'Beta Pública' : 'Public Beta'}
                  </h3>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">26 {language === 'es' ? 'de Julio' : 'July'}, 2025</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    {language === 'es' ? '100 usuarios objetivo' : '100 target users'}
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl mb-4">
                    <CurrencyDollarIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === 'es' ? 'Objetivo MRR' : 'MRR Target'}
                  </h3>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">$50K</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Q4 2025
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4">
                    <UserGroupIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {language === 'es' ? 'Usuarios Activos' : 'Active Users'}
                  </h3>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">500+</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Q3 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                {language === 'es' 
                  ? '¿Quieres ser parte de este viaje?' 
                  : 'Want to be part of this journey?'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {language === 'es' ? 'Únete a la Beta' : 'Join the Beta'}
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href={language === 'es' ? '/contacto' : '/contact'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-500"
                >
                  {language === 'es' ? 'Contáctanos' : 'Contact Us'}
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}