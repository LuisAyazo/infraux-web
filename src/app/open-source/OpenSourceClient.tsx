'use client';

import React, { useState } from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  CodeBracketIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  CommandLineIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  GlobeAltIcon,
  LockOpenIcon,
  ScaleIcon,
  BeakerIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  MegaphoneIcon,
  CodeBracketSquareIcon,
  BugAntIcon,
  DocumentIcon,
  LanguageIcon,
  PaintBrushIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import GitHubActivityFeed from '@/components/landing/GitHubActivityFeed';

export default function OpenSourceClient() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('contribute');

  const values = language === 'es' ? [
    {
      icon: LockOpenIcon,
      title: 'Transparencia Total',
      description: 'Cada línea de código es pública. Puedes auditar, modificar y mejorar InfraUX según tus necesidades.'
    },
    {
      icon: UserGroupIcon,
      title: 'Comunidad Primero',
      description: 'Desarrollado por y para la comunidad. Tus contribuciones dan forma al futuro de InfraUX.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Sin Vendor Lock-in',
      description: 'Tu infraestructura, tus reglas. Migra libremente entre self-host y cloud cuando quieras.'
    },
    {
      icon: ScaleIcon,
      title: 'Apache 2.0',
      description: 'Licencia permisiva y enterprise-friendly. Úsalo comercialmente sin restricciones.'
    }
  ] : [
    {
      icon: LockOpenIcon,
      title: 'Total Transparency',
      description: 'Every line of code is public. You can audit, modify, and improve InfraUX to fit your needs.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community First',
      description: 'Built by and for the community. Your contributions shape the future of InfraUX.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'No Vendor Lock-in',
      description: 'Your infrastructure, your rules. Migrate freely between self-host and cloud anytime.'
    },
    {
      icon: ScaleIcon,
      title: 'Apache 2.0',
      description: 'Permissive and enterprise-friendly license. Use it commercially without restrictions.'
    }
  ];

  const stats = [
    { value: '10K+', label: language === 'es' ? 'Estrellas en GitHub' : 'GitHub Stars' },
    { value: '500+', label: language === 'es' ? 'Contribuidores' : 'Contributors' },
    { value: '50K+', label: language === 'es' ? 'Descargas/mes' : 'Downloads/month' },
    { value: '100%', label: language === 'es' ? 'Open Source' : 'Open Source' }
  ];

  const contributionTypes = {
    contribute: {
      title: language === 'es' ? '💻 Contribuir Código' : '💻 Contribute Code',
      items: language === 'es' ? [
        { icon: CodeBracketSquareIcon, text: 'Implementa nuevas características', link: 'https://github.com/infraux/infraux/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22' },
        { icon: BugAntIcon, text: 'Corrige bugs y mejora el rendimiento', link: 'https://github.com/infraux/infraux/issues?q=is%3Aissue+is%3Aopen+label%3Abug' },
        { icon: BeakerIcon, text: 'Añade tests y mejora la cobertura', link: 'https://github.com/infraux/infraux/blob/main/CONTRIBUTING.md#testing' },
        { icon: CubeIcon, text: 'Crea nuevas integraciones cloud', link: 'https://github.com/infraux/infraux/blob/main/docs/integrations.md' }
      ] : [
        { icon: CodeBracketSquareIcon, text: 'Implement new features', link: 'https://github.com/infraux/infraux/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22' },
        { icon: BugAntIcon, text: 'Fix bugs and improve performance', link: 'https://github.com/infraux/infraux/issues?q=is%3Aissue+is%3Aopen+label%3Abug' },
        { icon: BeakerIcon, text: 'Add tests and improve coverage', link: 'https://github.com/infraux/infraux/blob/main/CONTRIBUTING.md#testing' },
        { icon: CubeIcon, text: 'Create new cloud integrations', link: 'https://github.com/infraux/infraux/blob/main/docs/integrations.md' }
      ]
    },
    docs: {
      title: language === 'es' ? '📚 Mejorar Documentación' : '📚 Improve Documentation',
      items: language === 'es' ? [
        { icon: DocumentIcon, text: 'Escribe guías y tutoriales', link: 'https://github.com/infraux/docs/blob/main/CONTRIBUTING.md' },
        { icon: LanguageIcon, text: 'Traduce documentación', link: 'https://github.com/infraux/docs/issues?q=is%3Aissue+is%3Aopen+label%3Atranslation' },
        { icon: AcademicCapIcon, text: 'Crea ejemplos y demos', link: 'https://github.com/infraux/examples' },
        { icon: PaintBrushIcon, text: 'Mejora diagramas y gráficos', link: 'https://github.com/infraux/docs/tree/main/assets' }
      ] : [
        { icon: DocumentIcon, text: 'Write guides and tutorials', link: 'https://github.com/infraux/docs/blob/main/CONTRIBUTING.md' },
        { icon: LanguageIcon, text: 'Translate documentation', link: 'https://github.com/infraux/docs/issues?q=is%3Aissue+is%3Aopen+label%3Atranslation' },
        { icon: AcademicCapIcon, text: 'Create examples and demos', link: 'https://github.com/infraux/examples' },
        { icon: PaintBrushIcon, text: 'Improve diagrams and graphics', link: 'https://github.com/infraux/docs/tree/main/assets' }
      ]
    },
    community: {
      title: language === 'es' ? '🤝 Apoyar la Comunidad' : '🤝 Support Community',
      items: language === 'es' ? [
        { icon: ChatBubbleLeftRightIcon, text: 'Ayuda en Discord y foros', link: 'https://discord.gg/infraux' },
        { icon: HandRaisedIcon, text: 'Responde preguntas en GitHub', link: 'https://github.com/infraux/infraux/discussions' },
        { icon: MegaphoneIcon, text: 'Comparte en redes sociales', link: 'https://twitter.com/infraux' },
        { icon: HeartIcon, text: 'Patrocina el proyecto', link: 'https://github.com/sponsors/infraux' }
      ] : [
        { icon: ChatBubbleLeftRightIcon, text: 'Help on Discord and forums', link: 'https://discord.gg/infraux' },
        { icon: HandRaisedIcon, text: 'Answer questions on GitHub', link: 'https://github.com/infraux/infraux/discussions' },
        { icon: MegaphoneIcon, text: 'Share on social media', link: 'https://twitter.com/infraux' },
        { icon: HeartIcon, text: 'Sponsor the project', link: 'https://github.com/sponsors/infraux' }
      ]
    }
  };

  const roadmapItems = language === 'es' ? [
    { quarter: 'Q1 2025', title: 'Lanzamiento Beta Pública', description: 'Primera versión estable con todas las características core', status: 'in-progress' },
    { quarter: 'Q2 2025', title: 'Multi-Cloud Avanzado', description: 'Soporte completo para AWS, GCP, Azure y proveedores adicionales', status: 'planned' },
    { quarter: 'Q3 2025', title: 'AI Assistant (Zenix)', description: 'Asistente inteligente para diseño y optimización de arquitecturas', status: 'planned' },
    { quarter: 'Q4 2025', title: 'Enterprise Features', description: 'Características avanzadas de seguridad, compliance y gobernanza', status: 'planned' }
  ] : [
    { quarter: 'Q1 2025', title: 'Public Beta Launch', description: 'First stable release with all core features', status: 'in-progress' },
    { quarter: 'Q2 2025', title: 'Advanced Multi-Cloud', description: 'Full support for AWS, GCP, Azure and additional providers', status: 'planned' },
    { quarter: 'Q3 2025', title: 'AI Assistant (Zenix)', description: 'Intelligent assistant for architecture design and optimization', status: 'planned' },
    { quarter: 'Q4 2025', title: 'Enterprise Features', description: 'Advanced security, compliance and governance features', status: 'planned' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-300 text-sm font-semibold mb-6">
                <CodeBracketIcon className="h-4 w-4" />
                {language === 'es' ? '100% Open Source • Apache 2.0' : '100% Open Source • Apache 2.0'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' ? 'Open Source por Diseño' : 'Open Source by Design'}
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'InfraUX es y siempre será 100% open source. Creemos en la transparencia, la colaboración y el poder de la comunidad para construir mejores herramientas.'
                  : 'InfraUX is and will always be 100% open source. We believe in transparency, collaboration, and the power of community to build better tools.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/infraux/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaGithub className="h-5 w-5" />
                  {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
                </a>
                
                <Link
                  href="/self-hosting"
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <CommandLineIcon className="h-5 w-5" />
                  {language === 'es' ? 'Self-Host Ahora' : 'Self-Host Now'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Nuestros Valores Open Source' : 'Our Open Source Values'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Estos principios guían cada decisión que tomamos como proyecto open source'
                  : 'These principles guide every decision we make as an open source project'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Cómo Contribuir' : 'How to Contribute'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Hay muchas formas de contribuir a InfraUX, no solo código. Cada contribución cuenta.'
                  : 'There are many ways to contribute to InfraUX, not just code. Every contribution counts.'
                }
              </p>
            </div>
            
            {/* Contribution Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(contributionTypes).map(([key, type]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {type.title}
                </button>
              ))}
            </div>
            
            {/* Active Tab Content */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {contributionTypes[activeTab as keyof typeof contributionTypes].items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.text}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 ml-auto group-hover:translate-x-1 transition-all" />
                  </a>
                );
              })}
            </div>
            
            {/* Getting Started */}
            <div className="mt-12 text-center">
              <a
                href="https://github.com/infraux/infraux/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <DocumentTextIcon className="h-5 w-5" />
                {language === 'es' ? 'Guía de Contribución' : 'Contribution Guide'}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Roadmap Público' : 'Public Roadmap'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Nuestro desarrollo es transparente. Conoce qué estamos construyendo y participa en las decisiones.'
                  : 'Our development is transparent. Know what we\'re building and participate in decisions.'
                }
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 ${
                    item.status === 'in-progress' 
                      ? 'bg-emerald-500 border-emerald-200 dark:border-emerald-800' 
                      : 'bg-slate-300 border-slate-100 dark:bg-slate-600 dark:border-slate-800'
                  }`}>
                    {item.status === 'in-progress' && (
                      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {item.quarter}
                      </span>
                      {item.status === 'in-progress' && (
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full">
                          {language === 'es' ? 'En Progreso' : 'In Progress'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://github.com/infraux/infraux/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                {language === 'es' ? 'Ver roadmap completo en GitHub' : 'View full roadmap on GitHub'}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Únete a la Comunidad' : 'Join the Community'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Conecta con otros usuarios y contribuidores de InfraUX alrededor del mundo'
                  : 'Connect with other InfraUX users and contributors around the world'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="https://github.com/infraux/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaGithub className="h-12 w-12 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors mb-4" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {language === 'es' ? 'Código fuente y issues' : 'Source code and issues'}
                </p>
              </a>
              
              <a
                href="https://discord.gg/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaDiscord className="h-12 w-12 text-indigo-600 group-hover:text-indigo-500 transition-colors mb-4" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Discord</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {language === 'es' ? 'Chat en tiempo real' : 'Real-time chat'}
                </p>
              </a>
              
              <a
                href="https://twitter.com/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaTwitter className="h-12 w-12 text-sky-500 group-hover:text-sky-400 transition-colors mb-4" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Twitter</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {language === 'es' ? 'Últimas noticias' : 'Latest news'}
                </p>
              </a>
              
              <a
                href="https://youtube.com/@infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FaYoutube className="h-12 w-12 text-red-600 group-hover:text-red-500 transition-colors mb-4" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">YouTube</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {language === 'es' ? 'Tutoriales y demos' : 'Tutorials and demos'}
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* GitHub Activity Feed */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Actividad Reciente' : 'Recent Activity'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Mantente al día con los últimos cambios y mejoras en InfraUX'
                  : 'Stay up to date with the latest changes and improvements in InfraUX'
                }
              </p>
            </div>
            
            <GitHubActivityFeed />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {language === 'es' 
                ? '¿Listo para ser parte del futuro open source?' 
                : 'Ready to be part of the open source future?'
              }
            </h2>
            
            <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Cada línea de código, cada issue reportado, cada idea compartida nos acerca a una mejor herramienta para todos.'
                : 'Every line of code, every reported issue, every shared idea brings us closer to a better tool for everyone.'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/infraux/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <FaGithub className="h-5 w-5" />
                {language === 'es' ? 'Contribuir en GitHub' : 'Contribute on GitHub'}
              </a>
              
              <a
                href="https://discord.gg/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <FaDiscord className="h-5 w-5" />
                {language === 'es' ? 'Únete a Discord' : 'Join Discord'}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}