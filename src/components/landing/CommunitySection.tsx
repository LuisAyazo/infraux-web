'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  BookOpenIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { 
  FaGithub, 
  FaDiscord, 
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

interface CommunityLink {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: string;
  external?: boolean;
}

export default function CommunitySection() {
  const { language } = useLanguage();

  const communityLinks: CommunityLink[] = language === 'es' ? [
    {
      icon: FaGithub,
      title: 'GitHub',
      description: 'Contribuye al código, reporta bugs, o solicita features',
      href: 'https://github.com/infraux/infraux',
      color: 'from-slate-600 to-slate-800',
      external: true
    },
    {
      icon: FaDiscord,
      title: 'Discord',
      description: 'Únete a la conversación con +5K desarrolladores',
      href: 'https://discord.gg/infraux',
      color: 'from-indigo-500 to-purple-600',
      external: true
    },
    {
      icon: DocumentTextIcon,
      title: 'Documentación',
      description: 'Guías completas, tutoriales y referencias API',
      href: '/docs',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: BookOpenIcon,
      title: 'Blog',
      description: 'Artículos técnicos, casos de uso y novedades',
      href: '/blog',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FaTwitter,
      title: 'Twitter/X',
      description: 'Síguenos para updates y tips diarios',
      href: 'https://twitter.com/infraux',
      color: 'from-blue-400 to-blue-600',
      external: true
    },
    {
      icon: FaYoutube,
      title: 'YouTube',
      description: 'Video tutoriales y demos en profundidad',
      href: 'https://youtube.com/@infraux',
      color: 'from-red-500 to-pink-600',
      external: true
    }
  ] : [
    {
      icon: FaGithub,
      title: 'GitHub',
      description: 'Contribute code, report bugs, or request features',
      href: 'https://github.com/infraux/infraux',
      color: 'from-slate-600 to-slate-800',
      external: true
    },
    {
      icon: FaDiscord,
      title: 'Discord',
      description: 'Join the conversation with +5K developers',
      href: 'https://discord.gg/infraux',
      color: 'from-indigo-500 to-purple-600',
      external: true
    },
    {
      icon: DocumentTextIcon,
      title: 'Documentation',
      description: 'Complete guides, tutorials and API references',
      href: '/docs',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: BookOpenIcon,
      title: 'Blog',
      description: 'Technical articles, use cases and updates',
      href: '/blog',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FaTwitter,
      title: 'Twitter/X',
      description: 'Follow us for daily updates and tips',
      href: 'https://twitter.com/infraux',
      color: 'from-blue-400 to-blue-600',
      external: true
    },
    {
      icon: FaYoutube,
      title: 'YouTube',
      description: 'Video tutorials and in-depth demos',
      href: 'https://youtube.com/@infraux',
      color: 'from-red-500 to-pink-600',
      external: true
    }
  ];

  const contributionWays = language === 'es' ? [
    {
      icon: CodeBracketIcon,
      title: 'Contribuye Código',
      description: 'Mejora InfraUX con nuevas features o fixes'
    },
    {
      icon: DocumentTextIcon,
      title: 'Mejora la Documentación',
      description: 'Ayuda a otros con guías y tutoriales'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Ayuda en la Comunidad',
      description: 'Responde preguntas y comparte conocimiento'
    },
    {
      icon: HeartIcon,
      title: 'Comparte InfraUX',
      description: 'Corre la voz sobre el proyecto'
    }
  ] : [
    {
      icon: CodeBracketIcon,
      title: 'Contribute Code',
      description: 'Improve InfraUX with new features or fixes'
    },
    {
      icon: DocumentTextIcon,
      title: 'Improve Documentation',
      description: 'Help others with guides and tutorials'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Help the Community',
      description: 'Answer questions and share knowledge'
    },
    {
      icon: HeartIcon,
      title: 'Share InfraUX',
      description: 'Spread the word about the project'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-6">
            <UserGroupIcon className="h-4 w-4" />
            {language === 'es' ? 'Comunidad Open Source' : 'Open Source Community'}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {language === 'es' 
              ? 'Únete a la Comunidad InfraUX' 
              : 'Join the InfraUX Community'
            }
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Conecta con miles de desarrolladores, contribuye al proyecto, y ayuda a dar forma al futuro de la infraestructura cloud visual.'
              : 'Connect with thousands of developers, contribute to the project, and help shape the future of visual cloud infrastructure.'
            }
          </p>
        </div>

        {/* Community Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {communityLinks.map((link, index) => {
            const Icon = link.icon;
            const LinkComponent = link.external ? 'a' : Link;
            const linkProps = link.external 
              ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: link.href };

            return (
              <LinkComponent
                key={link.title}
                {...linkProps}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${link.color} shadow-lg mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {link.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRightIcon className="h-5 w-5 text-slate-400" />
                  </div>
                </div>
              </LinkComponent>
            );
          })}
        </div>

        {/* Ways to Contribute */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language === 'es' 
                ? '¿Cómo puedes contribuir?' 
                : 'How can you contribute?'
              }
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {language === 'es'
                ? 'Hay muchas formas de ayudar a hacer InfraUX mejor'
                : 'There are many ways to help make InfraUX better'
              }
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {contributionWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <div key={way.title} className="text-center">
                  <div className="inline-flex p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                    <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {way.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {way.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/infraux/infraux/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AcademicCapIcon className="h-5 w-5" />
              {language === 'es' ? 'Guía de Contribución' : 'Contributing Guide'}
            </a>
            
            <a
              href="https://github.com/infraux/infraux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-xl transition-all duration-300"
            >
              <FaGithub className="h-5 w-5" />
              {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
            </a>
          </div>
        </div>

        {/* Upcoming Events / Milestones */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            <RocketLaunchIcon className="h-4 w-4" />
            {language === 'es' ? 'Próximos Hitos' : 'Upcoming Milestones'}
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-2">v1.0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Lanzamiento Beta Pública' : 'Public Beta Launch'}
              </div>
              <div className="text-xs text-slate-500 mt-1">27 Julio 2025</div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mb-2">10K</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Meta de GitHub Stars' : 'GitHub Stars Goal'}
              </div>
              <div className="text-xs text-slate-500 mt-1">Q4 2025</div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'es' ? 'Contributors Activos' : 'Active Contributors'}
              </div>
              <div className="text-xs text-slate-500 mt-1">Q1 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}