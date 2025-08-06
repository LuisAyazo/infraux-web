'use client';

import React from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  ServerIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function SecurityPage() {
  const { language } = useLanguage();

  const securityFeatures = [
    {
      icon: LockClosedIcon,
      title: language === 'es' ? 'Encriptación End-to-End' : 'End-to-End Encryption',
      description: language === 'es'
        ? 'Todos los datos sensibles están encriptados en tránsito y en reposo usando AES-256.'
        : 'All sensitive data is encrypted in transit and at rest using AES-256.'
    },
    {
      icon: KeyIcon,
      title: language === 'es' ? 'Gestión de Secretos' : 'Secrets Management',
      description: language === 'es'
        ? 'Integración con HashiCorp Vault, AWS Secrets Manager y Azure Key Vault.'
        : 'Integration with HashiCorp Vault, AWS Secrets Manager, and Azure Key Vault.'
    },
    {
      icon: UserGroupIcon,
      title: language === 'es' ? 'Control de Acceso' : 'Access Control',
      description: language === 'es'
        ? 'RBAC granular con soporte para SSO/SAML y autenticación multi-factor.'
        : 'Granular RBAC with support for SSO/SAML and multi-factor authentication.'
    },
    {
      icon: DocumentCheckIcon,
      title: language === 'es' ? 'Auditoría Completa' : 'Complete Audit Trail',
      description: language === 'es'
        ? 'Registro detallado de todas las acciones con retención configurable.'
        : 'Detailed logging of all actions with configurable retention.'
    },
    {
      icon: ServerIcon,
      title: language === 'es' ? 'Aislamiento de Recursos' : 'Resource Isolation',
      description: language === 'es'
        ? 'Cada proyecto se ejecuta en contenedores aislados con límites de recursos.'
        : 'Each project runs in isolated containers with resource limits.'
    },
    {
      icon: ShieldCheckIcon,
      title: language === 'es' ? 'Cumplimiento' : 'Compliance',
      description: language === 'es'
        ? 'Diseñado para cumplir con SOC 2, GDPR, HIPAA y otros estándares.'
        : 'Designed to meet SOC 2, GDPR, HIPAA, and other compliance standards.'
    }
  ];

  const bestPractices = [
    {
      title: language === 'es' ? 'Principio de Menor Privilegio' : 'Principle of Least Privilege',
      description: language === 'es'
        ? 'Los usuarios solo tienen acceso a los recursos que necesitan para su trabajo.'
        : 'Users only have access to the resources they need for their work.'
    },
    {
      title: language === 'es' ? 'Seguridad por Defecto' : 'Secure by Default',
      description: language === 'es'
        ? 'Todas las configuraciones vienen con valores seguros por defecto.'
        : 'All configurations come with secure default values.'
    },
    {
      title: language === 'es' ? 'Actualizaciones Regulares' : 'Regular Updates',
      description: language === 'es'
        ? 'Parches de seguridad aplicados regularmente a todas las dependencias.'
        : 'Security patches applied regularly to all dependencies.'
    },
    {
      title: language === 'es' ? 'Transparencia Total' : 'Full Transparency',
      description: language === 'es'
        ? 'Código fuente abierto permite auditorías de seguridad independientes.'
        : 'Open source code allows for independent security audits.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-6">
                <ShieldCheckIcon className="h-4 w-4" />
                {language === 'es' ? 'Seguridad Enterprise' : 'Enterprise Security'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' 
                  ? 'Seguridad de Nivel Enterprise' 
                  : 'Enterprise-Grade Security'
                }
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'InfraUX está diseñado desde cero con la seguridad como prioridad. Protege tu infraestructura con las mejores prácticas de la industria.'
                  : 'InfraUX is designed from the ground up with security as a priority. Protect your infrastructure with industry best practices.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/docs/security"
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {language === 'es' ? 'Ver Documentación' : 'View Documentation'}
                </Link>
                
                <a
                  href="https://github.com/infraux/infraux/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all duration-300"
                >
                  {language === 'es' ? 'Política de Seguridad' : 'Security Policy'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Características de Seguridad' : 'Security Features'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Protección multicapa para tu infraestructura crítica'
                  : 'Multi-layer protection for your critical infrastructure'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Mejores Prácticas' : 'Best Practices'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Seguimos las mejores prácticas de seguridad de la industria'
                  : 'We follow industry security best practices'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bestPractices.map((practice, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm"
                >
                  <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {practice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Security Issues */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 text-sm font-semibold mb-6">
                <ExclamationTriangleIcon className="h-4 w-4" />
                {language === 'es' ? 'Reportar Vulnerabilidades' : 'Report Vulnerabilities'}
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' 
                  ? '¿Encontraste una vulnerabilidad?' 
                  : 'Found a vulnerability?'
                }
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {language === 'es'
                  ? 'Tomamos la seguridad muy en serio. Si has descubierto una vulnerabilidad de seguridad, por favor repórtala responsablemente.'
                  : 'We take security very seriously. If you have discovered a security vulnerability, please report it responsibly.'
                }
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-left">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  {language === 'es' ? 'Cómo reportar:' : 'How to report:'}
                </h3>
                <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2">
                    <span className="font-semibold">1.</span>
                    {language === 'es'
                      ? 'Envía un email a security@infraux.com con los detalles'
                      : 'Send an email to security@infraux.com with details'
                    }
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold">2.</span>
                    {language === 'es'
                      ? 'Incluye pasos para reproducir el problema'
                      : 'Include steps to reproduce the issue'
                    }
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold">3.</span>
                    {language === 'es'
                      ? 'Espera nuestra respuesta antes de divulgar públicamente'
                      : 'Wait for our response before public disclosure'
                    }
                  </li>
                </ol>
                
                <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                  {language === 'es'
                    ? '✓ Respondemos a todos los reportes en 48 horas'
                    : '✓ We respond to all reports within 48 hours'
                  }
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://github.com/infraux/infraux/security/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  {language === 'es' ? 'Ver política completa' : 'View full policy'}
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}