'use client';

import React from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import Footer from '@/components/landing/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePostHog } from '@/hooks/usePostHog';
import {
  ServerIcon,
  CodeBracketIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckIcon,
  CommandLineIcon,
  CubeIcon,
  CloudIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon,
  GlobeAltIcon,
  LockOpenIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

export default function CommunityEditionClient() {
  const { language } = useLanguage();
  const { trackButtonClick } = usePostHog();

  const features = [
    {
      icon: CubeIcon,
      title: language === 'es' ? 'Editor Visual Completo' : 'Full Visual Editor',
      description: language === 'es' 
        ? 'Diseña arquitecturas cloud con drag & drop. Sin limitaciones.'
        : 'Design cloud architectures with drag & drop. No limitations.'
    },
    {
      icon: CodeBracketIcon,
      title: language === 'es' ? 'Generación de IaC' : 'IaC Generation',
      description: language === 'es'
        ? 'Genera código Terraform, Pulumi y CloudFormation automáticamente.'
        : 'Generate Terraform, Pulumi and CloudFormation code automatically.'
    },
    {
      icon: UserGroupIcon,
      title: language === 'es' ? 'Colaboración Básica' : 'Basic Collaboration',
      description: language === 'es'
        ? 'Trabaja con tu equipo en proyectos compartidos.'
        : 'Work with your team on shared projects.'
    },
    {
      icon: ServerIcon,
      title: language === 'es' ? 'Self-Hosting Ilimitado' : 'Unlimited Self-Hosting',
      description: language === 'es'
        ? 'Instala en tu infraestructura sin restricciones.'
        : 'Install on your infrastructure without restrictions.'
    },
    {
      icon: LockOpenIcon,
      title: language === 'es' ? 'Código Abierto' : 'Open Source',
      description: language === 'es'
        ? 'Inspecciona, modifica y contribuye al código fuente.'
        : 'Inspect, modify and contribute to the source code.'
    },
    {
      icon: HeartIcon,
      title: language === 'es' ? 'Comunidad Activa' : 'Active Community',
      description: language === 'es'
        ? 'Únete a miles de usuarios y contribuidores.'
        : 'Join thousands of users and contributors.'
    }
  ];

  const limitations = [
    {
      feature: language === 'es' ? 'Zenix AI' : 'Zenix AI',
      community: language === 'es' ? 'No incluido' : 'Not included',
      premium: language === 'es' ? 'Ilimitado' : 'Unlimited'
    },
    {
      feature: language === 'es' ? 'Soporte' : 'Support',
      community: language === 'es' ? 'Comunidad' : 'Community',
      premium: language === 'es' ? 'Prioritario 24/7' : 'Priority 24/7'
    },
    {
      feature: language === 'es' ? 'Actualizaciones' : 'Updates',
      community: language === 'es' ? 'Manual' : 'Manual',
      premium: language === 'es' ? 'Automáticas' : 'Automatic'
    },
    {
      feature: language === 'es' ? 'Seguridad Enterprise' : 'Enterprise Security',
      community: language === 'es' ? 'Básica' : 'Basic',
      premium: 'SSO, RBAC, Audit'
    },
    {
      feature: language === 'es' ? 'Analytics' : 'Analytics',
      community: language === 'es' ? 'No incluido' : 'Not included',
      premium: language === 'es' ? 'Avanzado' : 'Advanced'
    }
  ];

  const installSteps = [
    {
      icon: FaDocker,
      title: 'Docker',
      command: 'docker run -d -p 3000:3000 infraux/community:latest',
      description: language === 'es' ? 'La forma más rápida de empezar' : 'The fastest way to get started'
    },
    {
      icon: SiKubernetes,
      title: 'Kubernetes',
      command: 'kubectl apply -f https://get.infraux.com/k8s/community.yaml',
      description: language === 'es' ? 'Para despliegues en producción' : 'For production deployments'
    },
    {
      icon: CommandLineIcon,
      title: language === 'es' ? 'Desde código' : 'From source',
      command: 'git clone https://github.com/infraux/infraux && cd infraux && make install',
      description: language === 'es' ? 'Para desarrolladores y contribuidores' : 'For developers and contributors'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950/20" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <LockOpenIcon className="h-4 w-4" />
              {language === 'es' ? '100% Open Source • Apache 2.0' : '100% Open Source • Apache 2.0'}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              InfraUX{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Community Edition
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {language === 'es' 
                ? 'La versión gratuita y open source de InfraUX. Perfecta para proyectos personales, equipos pequeños y quienes valoran el control total sobre su infraestructura.'
                : 'The free and open source version of InfraUX. Perfect for personal projects, small teams, and those who value complete control over their infrastructure.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/infraux/infraux"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackButtonClick('community_github')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
                {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
              </a>
              
              <button
                onClick={() => {
                  trackButtonClick('community_download');
                  document.getElementById('installation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                {language === 'es' ? 'Instalar Ahora' : 'Install Now'}
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">10K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es' ? 'Instalaciones' : 'Installations'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es' ? 'Contribuidores' : 'Contributors'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">Apache 2.0</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es' ? 'Licencia' : 'License'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Todo lo que necesitas para empezar' : 'Everything you need to get started'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Community Edition incluye todas las características esenciales para diseñar y desplegar infraestructura cloud.'
                : 'Community Edition includes all the essential features to design and deploy cloud infrastructure.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
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

      {/* Installation Section */}
      <section id="installation" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Instalación en minutos' : 'Install in minutes'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Elige tu método preferido de instalación y comienza a usar InfraUX en tu infraestructura.'
                : 'Choose your preferred installation method and start using InfraUX on your infrastructure.'
              }
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {installSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700">
                        <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                        {step.command}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://docs.infraux.com/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              <DocumentTextIcon className="h-5 w-5" />
              {language === 'es' ? 'Ver documentación completa' : 'View full documentation'}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Community vs Premium' : 'Community vs Premium'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Compara las características y elige la versión que mejor se adapte a tus necesidades.'
                : 'Compare features and choose the version that best fits your needs.'
              }
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
                      {language === 'es' ? 'Característica' : 'Feature'}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 dark:text-white">
                      Community
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {limitations.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600 dark:text-slate-400">
                        {item.community}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        {item.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <SparklesIcon className="h-5 w-5" />
                {language === 'es' ? 'Ver Planes Premium' : 'View Premium Plans'}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-teal-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Únete a la comunidad' : 'Join the community'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Miles de desarrolladores y empresas confían en InfraUX para gestionar su infraestructura.'
                : 'Thousands of developers and companies trust InfraUX to manage their infrastructure.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://github.com/infraux/infraux"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <FaGithub className="h-12 w-12 text-slate-700 dark:text-slate-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Contribuye al código' : 'Contribute to the code'}
              </p>
            </a>
            
            <a
              href="https://discord.gg/infraux"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <UserGroupIcon className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Discord</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Chatea con la comunidad' : 'Chat with the community'}
              </p>
            </a>
            
            <a
              href="https://forum.infraux.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <GlobeAltIcon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Forum</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Discute y aprende' : 'Discuss and learn'}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {language === 'es' 
              ? '¿Listo para empezar con Community Edition?'
              : 'Ready to get started with Community Edition?'
            }
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {language === 'es'
              ? 'Instala InfraUX en tu infraestructura y comienza a diseñar arquitecturas cloud hoy mismo.'
              : 'Install InfraUX on your infrastructure and start designing cloud architectures today.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/infraux/infraux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="h-5 w-5" />
              {language === 'es' ? 'Clonar Repositorio' : 'Clone Repository'}
            </a>
            
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <RocketLaunchIcon className="h-5 w-5" />
              {language === 'es' ? 'Explorar Premium' : 'Explore Premium'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}