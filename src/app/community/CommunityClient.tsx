'use client';

import React, { useState } from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CodeBracketIcon,
  HeartIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  CalendarIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  NewspaperIcon,
  TrophyIcon,
  HandRaisedIcon,
  LightBulbIcon,
  BugAntIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaReddit,
  FaDev,
  FaMedium
} from 'react-icons/fa';
import ContributorsCount from '@/components/landing/ContributorsCount';
import DiscordMembersCount from '@/components/landing/DiscordMembersCount';

interface Event {
  date: string;
  title: string;
  type: 'webinar' | 'meetup' | 'conference' | 'hackathon';
  link: string;
}

interface Contributor {
  name: string;
  avatar: string;
  contributions: number;
  role: string;
}

export default function CommunityClient() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('forums');

  const communityStats = [
    { value: '10K+', label: language === 'es' ? 'Miembros Activos' : 'Active Members' },
    { value: '50+', label: language === 'es' ? 'Países' : 'Countries' },
    { value: '24/7', label: language === 'es' ? 'Soporte Comunitario' : 'Community Support' },
    { value: '500+', label: language === 'es' ? 'Contribuidores' : 'Contributors' }
  ];

  const channels = [
    {
      icon: FaDiscord,
      name: 'Discord',
      description: language === 'es' 
        ? 'Chat en tiempo real con la comunidad. Obtén ayuda instantánea y conecta con otros usuarios.'
        : 'Real-time chat with the community. Get instant help and connect with other users.',
      link: 'https://discord.gg/infraux',
      members: '5K+',
      color: 'bg-indigo-500'
    },
    {
      icon: FaGithub,
      name: 'GitHub Discussions',
      description: language === 'es'
        ? 'Discusiones técnicas profundas, RFCs y decisiones de arquitectura.'
        : 'Deep technical discussions, RFCs, and architecture decisions.',
      link: 'https://github.com/infraux/infraux/discussions',
      members: '2K+',
      color: 'bg-slate-700'
    },
    {
      icon: FaReddit,
      name: 'Reddit',
      description: language === 'es'
        ? 'Comparte proyectos, tips y noticias con la comunidad más amplia.'
        : 'Share projects, tips, and news with the broader community.',
      link: 'https://reddit.com/r/infraux',
      members: '3K+',
      color: 'bg-orange-500'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      description: language === 'es'
        ? 'Últimas noticias, actualizaciones y anuncios oficiales.'
        : 'Latest news, updates, and official announcements.',
      link: 'https://twitter.com/infraux',
      members: '8K+',
      color: 'bg-sky-500'
    }
  ];

  const resources = {
    forums: {
      title: language === 'es' ? '💬 Foros y Discusiones' : '💬 Forums & Discussions',
      items: [
        {
          icon: QuestionMarkCircleIcon,
          title: language === 'es' ? 'Preguntas y Respuestas' : 'Q&A',
          description: language === 'es' 
            ? 'Obtén ayuda de la comunidad con tus preguntas técnicas'
            : 'Get help from the community with your technical questions',
          link: 'https://github.com/infraux/infraux/discussions/categories/q-a',
          badge: language === 'es' ? 'Más activo' : 'Most active'
        },
        {
          icon: LightBulbIcon,
          title: language === 'es' ? 'Ideas y Sugerencias' : 'Ideas & Suggestions',
          description: language === 'es'
            ? 'Propón nuevas características y mejoras para InfraUX'
            : 'Propose new features and improvements for InfraUX',
          link: 'https://github.com/infraux/infraux/discussions/categories/ideas'
        },
        {
          icon: MegaphoneIcon,
          title: language === 'es' ? 'Anuncios' : 'Announcements',
          description: language === 'es'
            ? 'Mantente al día con las últimas noticias y releases'
            : 'Stay updated with the latest news and releases',
          link: 'https://github.com/infraux/infraux/discussions/categories/announcements'
        },
        {
          icon: TrophyIcon,
          title: language === 'es' ? 'Muestra tu Trabajo' : 'Show & Tell',
          description: language === 'es'
            ? 'Comparte tus proyectos y arquitecturas creadas con InfraUX'
            : 'Share your projects and architectures built with InfraUX',
          link: 'https://github.com/infraux/infraux/discussions/categories/show-and-tell'
        }
      ]
    },
    learn: {
      title: language === 'es' ? '📚 Aprende y Crece' : '📚 Learn & Grow',
      items: [
        {
          icon: DocumentTextIcon,
          title: language === 'es' ? 'Documentación' : 'Documentation',
          description: language === 'es'
            ? 'Guías completas, tutoriales y referencias de API'
            : 'Complete guides, tutorials, and API references',
          link: 'https://docs.infraux.com',
          badge: language === 'es' ? 'Esencial' : 'Essential'
        },
        {
          icon: VideoCameraIcon,
          title: language === 'es' ? 'Video Tutoriales' : 'Video Tutorials',
          description: language === 'es'
            ? 'Aprende con tutoriales paso a paso en video'
            : 'Learn with step-by-step video tutorials',
          link: 'https://youtube.com/@infraux'
        },
        {
          icon: AcademicCapIcon,
          title: language === 'es' ? 'InfraUX Academy' : 'InfraUX Academy',
          description: language === 'es'
            ? 'Cursos estructurados desde básico hasta avanzado'
            : 'Structured courses from beginner to advanced',
          link: 'https://academy.infraux.com'
        },
        {
          icon: NewspaperIcon,
          title: language === 'es' ? 'Blog Técnico' : 'Technical Blog',
          description: language === 'es'
            ? 'Artículos técnicos, casos de estudio y mejores prácticas'
            : 'Technical articles, case studies, and best practices',
          link: 'https://blog.infraux.com'
        }
      ]
    },
    contribute: {
      title: language === 'es' ? '🤝 Contribuye' : '🤝 Contribute',
      items: [
        {
          icon: CodeBracketIcon,
          title: language === 'es' ? 'Guía de Contribución' : 'Contribution Guide',
          description: language === 'es'
            ? 'Todo lo que necesitas saber para empezar a contribuir'
            : 'Everything you need to know to start contributing',
          link: 'https://github.com/infraux/infraux/blob/main/CONTRIBUTING.md',
          badge: language === 'es' ? 'Empieza aquí' : 'Start here'
        },
        {
          icon: BugAntIcon,
          title: language === 'es' ? 'Reportar Bugs' : 'Report Bugs',
          description: language === 'es'
            ? 'Ayúdanos a mejorar reportando problemas'
            : 'Help us improve by reporting issues',
          link: 'https://github.com/infraux/infraux/issues/new?template=bug_report.md'
        },
        {
          icon: PuzzlePieceIcon,
          title: language === 'es' ? 'Good First Issues' : 'Good First Issues',
          description: language === 'es'
            ? 'Issues perfectos para nuevos contribuidores'
            : 'Perfect issues for new contributors',
          link: 'https://github.com/infraux/infraux/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'
        },
        {
          icon: HeartIcon,
          title: language === 'es' ? 'Patrocinar' : 'Sponsor',
          description: language === 'es'
            ? 'Apoya el desarrollo continuo de InfraUX'
            : 'Support the continued development of InfraUX',
          link: 'https://github.com/sponsors/infraux'
        }
      ]
    }
  };

  const upcomingEvents: Event[] = language === 'es' ? [
    {
      date: '2025-02-15',
      title: 'InfraUX Community Meetup - Madrid',
      type: 'meetup',
      link: 'https://meetup.com/infraux-madrid'
    },
    {
      date: '2025-02-28',
      title: 'Webinar: Arquitecturas Multi-Cloud con InfraUX',
      type: 'webinar',
      link: 'https://infraux.com/events/webinar-multicloud'
    },
    {
      date: '2025-03-15',
      title: 'InfraUX Hackathon 2025',
      type: 'hackathon',
      link: 'https://infraux.com/hackathon'
    },
    {
      date: '2025-04-20',
      title: 'KubeCon EU - InfraUX Workshop',
      type: 'conference',
      link: 'https://kubecon.eu/infraux'
    }
  ] : [
    {
      date: '2025-02-15',
      title: 'InfraUX Community Meetup - San Francisco',
      type: 'meetup',
      link: 'https://meetup.com/infraux-sf'
    },
    {
      date: '2025-02-28',
      title: 'Webinar: Multi-Cloud Architectures with InfraUX',
      type: 'webinar',
      link: 'https://infraux.com/events/webinar-multicloud'
    },
    {
      date: '2025-03-15',
      title: 'InfraUX Hackathon 2025',
      type: 'hackathon',
      link: 'https://infraux.com/hackathon'
    },
    {
      date: '2025-04-20',
      title: 'KubeCon EU - InfraUX Workshop',
      type: 'conference',
      link: 'https://kubecon.eu/infraux'
    }
  ];

  const topContributors: Contributor[] = [
    { name: 'Alex Chen', avatar: '/avatars/alex.jpg', contributions: 342, role: 'Core Team' },
    { name: 'Maria García', avatar: '/avatars/maria.jpg', contributions: 287, role: 'Core Team' },
    { name: 'John Smith', avatar: '/avatars/john.jpg', contributions: 198, role: 'Maintainer' },
    { name: 'Yuki Tanaka', avatar: '/avatars/yuki.jpg', contributions: 156, role: 'Contributor' },
    { name: 'Ahmed Hassan', avatar: '/avatars/ahmed.jpg', contributions: 134, role: 'Contributor' },
    { name: 'Sophie Martin', avatar: '/avatars/sophie.jpg', contributions: 98, role: 'Contributor' }
  ];

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'meetup': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'conference': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'hackathon': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
                <UserGroupIcon className="h-4 w-4" />
                {language === 'es' ? 'Comunidad Global' : 'Global Community'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' ? 'Únete a la Comunidad InfraUX' : 'Join the InfraUX Community'}
              </h1>
              
              <p className="text-xl sm:text-2xl text-emerald-50 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'Conecta con miles de desarrolladores, aprende de expertos, contribuye al proyecto y construye el futuro de la infraestructura cloud juntos.'
                  : 'Connect with thousands of developers, learn from experts, contribute to the project, and build the future of cloud infrastructure together.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaDiscord className="h-5 w-5" />
                  {language === 'es' ? 'Únete a Discord' : 'Join Discord'}
                </a>
                
                <a
                  href="https://github.com/infraux/infraux/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  {language === 'es' ? 'Participar en Discusiones' : 'Join Discussions'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
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

        {/* Live Community Stats */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Comunidad en Tiempo Real' : 'Live Community Stats'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Mira el crecimiento y actividad de nuestra comunidad en vivo'
                  : 'See the growth and activity of our community in real-time'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ContributorsCount />
              <DiscordMembersCount />
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Canales de la Comunidad' : 'Community Channels'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Múltiples formas de conectar, aprender y contribuir'
                  : 'Multiple ways to connect, learn, and contribute'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={index}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50"
                  >
                    <div className={`inline-flex p-3 rounded-lg ${channel.color} text-white mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {channel.name}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {channel.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {channel.members} {language === 'es' ? 'miembros' : 'members'}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Recursos de la Comunidad' : 'Community Resources'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Todo lo que necesitas para participar, aprender y contribuir'
                  : 'Everything you need to participate, learn, and contribute'
                }
              </p>
            </div>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(resources).map(([key, resource]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {resource.title}
                </button>
              ))}
            </div>
            
            {/* Active Tab Content */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {resources[activeTab as keyof typeof resources].items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Próximos Eventos' : 'Upcoming Events'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Meetups, webinars, conferencias y más'
                  : 'Meetups, webinars, conferences and more'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <a
                  key={index}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="h-5 w-5 text-slate-400" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(event.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <ArrowRightIcon className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 mt-4 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                {language === 'es' ? 'Ver todos los eventos' : 'View all events'}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Top Contribuidores' : 'Top Contributors'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Reconociendo a quienes hacen posible InfraUX'
                  : 'Recognizing those who make InfraUX possible'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {index < 3 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {contributor.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {contributor.role}
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {contributor.contributions} {language === 'es' ? 'contribuciones' : 'contributions'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="https://github.com/infraux/infraux/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <HeartIcon className="h-5 w-5" />
                {language === 'es' ? 'Conviértete en Contribuidor' : 'Become a Contributor'}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {language === 'es' 
                  ? '¿Listo para ser parte de algo grande?' 
                  : 'Ready to be part of something big?'
                }
              </h2>
              
              <p className="text-xl text-emerald-50 mb-8">
                {language === 'es'
                  ? 'La comunidad InfraUX está creciendo rápidamente. Únete a nosotros y ayuda a construir el futuro de la infraestructura cloud.'
                  : 'The InfraUX community is growing rapidly. Join us and help build the future of cloud infrastructure.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaDiscord className="h-5 w-5" />
                  {language === 'es' ? 'Únete a Discord' : 'Join Discord'}
                </a>
                
                <Link
                  href="/open-source"
                  className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  {language === 'es' ? 'Explorar Open Source' : 'Explore Open Source'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
                <NewspaperIcon className="h-4 w-4" />
                Newsletter
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' 
                  ? 'Mantente actualizado' 
                  : 'Stay updated'
                }
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {language === 'es'
                  ? 'Recibe las últimas noticias, actualizaciones y recursos de la comunidad InfraUX.'
                  : 'Get the latest news, updates, and resources from the InfraUX community.'
                }
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={language === 'es' ? 'tu@email.com' : 'you@email.com'}
                  className="flex-1 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === 'es' ? 'Suscribirse' : 'Subscribe'}
                </button>
              </form>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                {language === 'es'
                  ? 'Sin spam. Puedes cancelar en cualquier momento.'
                  : 'No spam. Unsubscribe anytime.'
                }
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}