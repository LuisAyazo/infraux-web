'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  ServerStackIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface CaseStudy {
  company: string;
  logo: string;
  industry: string;
  size: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  technologies: string[];
}

export default function CaseStudies() {
  const { language } = useLanguage();
  const [selectedStudy, setSelectedStudy] = useState(0);

  const caseStudies: CaseStudy[] = language === 'es' ? [
    {
      company: 'TechCorp Global',
      logo: '🏢',
      industry: 'Tecnología',
      size: '5,000+ empleados',
      challenge: 'Necesitaban una solución de Platform Engineering que pudieran controlar completamente por requisitos de compliance y seguridad.',
      solution: 'Implementaron InfraUX self-hosted en su infraestructura on-premise, integrándolo con sus sistemas existentes de CI/CD y monitoreo.',
      results: [
        'Reducción del 70% en tiempo de provisioning de infraestructura',
        'Cumplimiento total con regulaciones de datos locales',
        'Ahorro de $2M anuales en costos de cloud',
        'Mejora del 85% en la satisfacción del equipo de desarrollo'
      ],
      metrics: [
        { label: 'Tiempo de Deploy', value: '45min → 5min', improvement: '-89%' },
        { label: 'Costos de Infra', value: '$500K/mes → $150K/mes', improvement: '-70%' },
        { label: 'Incidentes', value: '25/mes → 3/mes', improvement: '-88%' }
      ],
      quote: {
        text: 'InfraUX nos dio el control total que necesitábamos sin sacrificar la experiencia de desarrollo. Es exactamente lo que buscábamos.',
        author: 'María González',
        role: 'VP de Ingeniería'
      },
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'GitLab']
    },
    {
      company: 'FinanceHub',
      logo: '🏦',
      industry: 'Fintech',
      size: '1,000+ empleados',
      challenge: 'Regulaciones estrictas del sector financiero requerían que todos los datos permanecieran en sus propios data centers.',
      solution: 'Desplegaron InfraUX en modo air-gapped, sin conexión externa, manteniendo total aislamiento de red.',
      results: [
        'Certificación SOC2 y PCI-DSS mantenida',
        'Zero downtime en 18 meses de operación',
        'Reducción del 60% en tiempo de auditoría',
        'Estandarización completa de la infraestructura'
      ],
      metrics: [
        { label: 'Uptime', value: '99.95% → 99.99%', improvement: '+0.04%' },
        { label: 'Tiempo Auditoría', value: '3 semanas → 1 semana', improvement: '-66%' },
        { label: 'Velocidad Deploy', value: '2 días → 2 horas', improvement: '-95%' }
      ],
      quote: {
        text: 'La capacidad de self-hosting de InfraUX fue crucial para cumplir con nuestros requisitos regulatorios sin comprometer la agilidad.',
        author: 'Carlos Mendoza',
        role: 'CTO'
      },
      technologies: ['OpenShift', 'Private Cloud', 'Ansible', 'Jenkins']
    },
    {
      company: 'HealthTech Solutions',
      logo: '🏥',
      industry: 'Salud',
      size: '2,500+ empleados',
      challenge: 'Datos sensibles de pacientes requerían máxima seguridad y cumplimiento con HIPAA en múltiples regiones.',
      solution: 'Implementación multi-región de InfraUX self-hosted con encriptación end-to-end y auditoría completa.',
      results: [
        'Cumplimiento HIPAA en todas las regiones',
        'Reducción del 80% en incidentes de seguridad',
        'Deployment 10x más rápido manteniendo compliance',
        'Ahorro de $3M en multas potenciales'
      ],
      metrics: [
        { label: 'Incidentes Seguridad', value: '10/año → 2/año', improvement: '-80%' },
        { label: 'Tiempo Compliance', value: '6 meses → 2 semanas', improvement: '-96%' },
        { label: 'Cobertura Tests', value: '45% → 95%', improvement: '+111%' }
      ],
      quote: {
        text: 'InfraUX transformó nuestra capacidad de innovar rápidamente mientras mantenemos los más altos estándares de seguridad y privacidad.',
        author: 'Dr. Ana Silva',
        role: 'Director de Tecnología'
      },
      technologies: ['Azure', 'Docker', 'Vault', 'Prometheus']
    }
  ] : [
    {
      company: 'TechCorp Global',
      logo: '🏢',
      industry: 'Technology',
      size: '5,000+ employees',
      challenge: 'Needed a Platform Engineering solution they could fully control for compliance and security requirements.',
      solution: 'Implemented self-hosted InfraUX on their on-premise infrastructure, integrating with existing CI/CD and monitoring systems.',
      results: [
        '70% reduction in infrastructure provisioning time',
        'Full compliance with local data regulations',
        '$2M annual savings in cloud costs',
        '85% improvement in developer team satisfaction'
      ],
      metrics: [
        { label: 'Deploy Time', value: '45min → 5min', improvement: '-89%' },
        { label: 'Infra Costs', value: '$500K/mo → $150K/mo', improvement: '-70%' },
        { label: 'Incidents', value: '25/mo → 3/mo', improvement: '-88%' }
      ],
      quote: {
        text: 'InfraUX gave us the complete control we needed without sacrificing developer experience. It\'s exactly what we were looking for.',
        author: 'Maria Gonzalez',
        role: 'VP of Engineering'
      },
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'GitLab']
    },
    {
      company: 'FinanceHub',
      logo: '🏦',
      industry: 'Fintech',
      size: '1,000+ employees',
      challenge: 'Strict financial sector regulations required all data to remain in their own data centers.',
      solution: 'Deployed InfraUX in air-gapped mode, with no external connections, maintaining complete network isolation.',
      results: [
        'SOC2 and PCI-DSS certification maintained',
        'Zero downtime in 18 months of operation',
        '60% reduction in audit time',
        'Complete infrastructure standardization'
      ],
      metrics: [
        { label: 'Uptime', value: '99.95% → 99.99%', improvement: '+0.04%' },
        { label: 'Audit Time', value: '3 weeks → 1 week', improvement: '-66%' },
        { label: 'Deploy Speed', value: '2 days → 2 hours', improvement: '-95%' }
      ],
      quote: {
        text: 'InfraUX\'s self-hosting capability was crucial for meeting our regulatory requirements without compromising agility.',
        author: 'Carlos Mendoza',
        role: 'CTO'
      },
      technologies: ['OpenShift', 'Private Cloud', 'Ansible', 'Jenkins']
    },
    {
      company: 'HealthTech Solutions',
      logo: '🏥',
      industry: 'Healthcare',
      size: '2,500+ employees',
      challenge: 'Sensitive patient data required maximum security and HIPAA compliance across multiple regions.',
      solution: 'Multi-region implementation of self-hosted InfraUX with end-to-end encryption and complete auditing.',
      results: [
        'HIPAA compliance in all regions',
        '80% reduction in security incidents',
        '10x faster deployment while maintaining compliance',
        '$3M savings in potential fines'
      ],
      metrics: [
        { label: 'Security Incidents', value: '10/yr → 2/yr', improvement: '-80%' },
        { label: 'Compliance Time', value: '6 months → 2 weeks', improvement: '-96%' },
        { label: 'Test Coverage', value: '45% → 95%', improvement: '+111%' }
      ],
      quote: {
        text: 'InfraUX transformed our ability to innovate rapidly while maintaining the highest standards of security and privacy.',
        author: 'Dr. Ana Silva',
        role: 'Director of Technology'
      },
      technologies: ['Azure', 'Docker', 'Vault', 'Prometheus']
    }
  ];

  const currentStudy = caseStudies[selectedStudy];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' ? 'Casos de Éxito Self-Hosted' : 'Self-Hosted Success Stories'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Empresas líderes confían en InfraUX self-hosted para sus necesidades críticas de infraestructura'
              : 'Leading companies trust self-hosted InfraUX for their critical infrastructure needs'
            }
          </p>
        </div>

        {/* Company Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setSelectedStudy(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedStudy === index
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="text-2xl">{study.logo}</span>
              {study.company}
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <BuildingOfficeIcon className="h-6 w-6 text-emerald-500" />
                <div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {currentStudy.industry} • {currentStudy.size}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'El Desafío' : 'The Challenge'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {currentStudy.challenge}
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'La Solución' : 'The Solution'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {currentStudy.solution}
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Resultados' : 'Results'}
              </h3>
              <ul className="space-y-3">
                {currentStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-400">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Metrics & Quote */}
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <ChartBarIcon className="h-6 w-6 text-emerald-500" />
                {language === 'es' ? 'Métricas Clave' : 'Key Metrics'}
              </h3>
              <div className="space-y-6">
                {currentStudy.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {metric.label}
                      </span>
                      <span className={`text-sm font-bold ${
                        metric.improvement.startsWith('-') ? 'text-emerald-600' : 'text-emerald-600'
                      }`}>
                        {metric.improvement}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 relative">
              <div className="absolute top-4 left-4 text-6xl text-emerald-500/20 font-serif">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">
                  {currentStudy.quote.text}
                </p>
                <footer>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {currentStudy.quote.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {currentStudy.quote.role}
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* CTA */}
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">
                {language === 'es' 
                  ? '¿Listo para tu propia historia de éxito?' 
                  : 'Ready for your own success story?'
                }
              </h4>
              <p className="text-emerald-100 mb-4">
                {language === 'es'
                  ? 'Descubre cómo InfraUX puede transformar tu infraestructura'
                  : 'Discover how InfraUX can transform your infrastructure'
                }
              </p>
              <a
                href="/self-hosting"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
              >
                {language === 'es' ? 'Explorar Self-Hosting' : 'Explore Self-Hosting'}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}