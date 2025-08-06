'use client';

import React, { useState } from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  GlobeAltIcon,
  TicketIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { FaDiscord, FaYoutube, FaLinkedin, FaMeetup } from 'react-icons/fa';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'webinar' | 'meetup' | 'conference' | 'hackathon' | 'workshop';
  location: string;
  isOnline: boolean;
  link?: string;
  speakers?: string[];
  tags: string[];
  image?: string;
  capacity?: number;
  registered?: number;
}

export default function EventsPage() {
  const { language } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const eventTypes = [
    { id: 'all', name: language === 'es' ? 'Todos' : 'All', icon: CalendarIcon },
    { id: 'webinar', name: 'Webinars', icon: VideoCameraIcon },
    { id: 'meetup', name: 'Meetups', icon: UserGroupIcon },
    { id: 'workshop', name: 'Workshops', icon: AcademicCapIcon },
    { id: 'conference', name: language === 'es' ? 'Conferencias' : 'Conferences', icon: MicrophoneIcon },
    { id: 'hackathon', name: 'Hackathons', icon: TrophyIcon }
  ];

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: language === 'es' ? 'InfraUX Community Meetup - Madrid' : 'InfraUX Community Meetup - Madrid',
      description: language === 'es' 
        ? 'Únete a la comunidad InfraUX en Madrid para una tarde de charlas técnicas, networking y demos en vivo.'
        : 'Join the InfraUX community in Madrid for an evening of technical talks, networking, and live demos.',
      date: '2025-02-15',
      time: '18:00 CET',
      type: 'meetup',
      location: 'Madrid, España',
      isOnline: false,
      speakers: ['Carlos Mendoza', 'Ana García'],
      tags: ['Platform Engineering', 'IaC', 'Community'],
      capacity: 100,
      registered: 67
    },
    {
      id: '2',
      title: language === 'es' 
        ? 'Webinar: Arquitecturas Multi-Cloud con InfraUX' 
        : 'Webinar: Multi-Cloud Architectures with InfraUX',
      description: language === 'es'
        ? 'Aprende a diseñar y desplegar arquitecturas multi-cloud usando InfraUX. Incluye demo práctica.'
        : 'Learn how to design and deploy multi-cloud architectures using InfraUX. Includes practical demo.',
      date: '2025-02-28',
      time: '16:00 UTC',
      type: 'webinar',
      location: 'Online',
      isOnline: true,
      link: 'https://infraux.com/events/webinar-multicloud',
      speakers: ['David Chen', 'InfraUX Team'],
      tags: ['Multi-Cloud', 'AWS', 'GCP', 'Azure'],
      registered: 342
    },
    {
      id: '3',
      title: 'InfraUX Hackathon 2025',
      description: language === 'es'
        ? '48 horas para construir la próxima gran herramienta de infraestructura. Premios increíbles y mentoría de expertos.'
        : '48 hours to build the next great infrastructure tool. Amazing prizes and expert mentorship.',
      date: '2025-03-15',
      time: '09:00 UTC',
      type: 'hackathon',
      location: 'Global (Online)',
      isOnline: true,
      link: 'https://infraux.com/hackathon',
      tags: ['Hackathon', 'Open Source', 'Prizes'],
      capacity: 500,
      registered: 234
    },
    {
      id: '4',
      title: language === 'es'
        ? 'Workshop: De Cero a Producción con InfraUX'
        : 'Workshop: From Zero to Production with InfraUX',
      description: language === 'es'
        ? 'Workshop práctico de 4 horas donde construirás y desplegarás una aplicación completa.'
        : '4-hour hands-on workshop where you\'ll build and deploy a complete application.',
      date: '2025-03-20',
      time: '14:00 PST',
      type: 'workshop',
      location: 'San Francisco, CA',
      isOnline: false,
      speakers: ['Sarah Johnson', 'Mike Liu'],
      tags: ['Hands-on', 'Beginner Friendly', 'Deployment'],
      capacity: 50,
      registered: 48
    },
    {
      id: '5',
      title: 'KubeCon EU - InfraUX Workshop',
      description: language === 'es'
        ? 'Únete a nosotros en KubeCon EU para un workshop especial sobre Platform Engineering con InfraUX.'
        : 'Join us at KubeCon EU for a special workshop on Platform Engineering with InfraUX.',
      date: '2025-04-20',
      time: '10:00 CET',
      type: 'conference',
      location: 'Amsterdam, Netherlands',
      isOnline: false,
      link: 'https://kubecon.eu/infraux',
      speakers: ['InfraUX Core Team'],
      tags: ['Kubernetes', 'Conference', 'Platform Engineering'],
      capacity: 200,
      registered: 156
    }
  ];

  const pastEvents: Event[] = [
    {
      id: 'p1',
      title: language === 'es' ? 'InfraUX Launch Party' : 'InfraUX Launch Party',
      description: language === 'es'
        ? 'Celebramos el lanzamiento de InfraUX como proyecto open source.'
        : 'Celebrating the launch of InfraUX as an open source project.',
      date: '2024-12-15',
      time: '18:00 UTC',
      type: 'meetup',
      location: 'Global (Online)',
      isOnline: true,
      tags: ['Launch', 'Open Source', 'Community'],
      registered: 1200
    }
  ];

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'meetup': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'conference': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'hackathon': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'workshop': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'webinar': return VideoCameraIcon;
      case 'meetup': return UserGroupIcon;
      case 'conference': return MicrophoneIcon;
      case 'hackathon': return TrophyIcon;
      case 'workshop': return AcademicCapIcon;
      default: return CalendarIcon;
    }
  };

  const filteredEvents = upcomingEvents.filter(event => {
    if (selectedType !== 'all' && event.type !== selectedType) return false;
    if (selectedMonth !== 'all') {
      const eventMonth = new Date(event.date).getMonth();
      if (eventMonth !== parseInt(selectedMonth)) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
                <CalendarIcon className="h-4 w-4" />
                {language === 'es' ? 'Eventos y Meetups' : 'Events & Meetups'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' 
                  ? 'Conecta con la Comunidad' 
                  : 'Connect with the Community'
                }
              </h1>
              
              <p className="text-xl sm:text-2xl text-purple-50 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'Participa en webinars, meetups, hackathons y más. Aprende, comparte y construye el futuro de la infraestructura cloud.'
                  : 'Join webinars, meetups, hackathons and more. Learn, share and build the future of cloud infrastructure.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#upcoming"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {language === 'es' ? 'Ver Próximos Eventos' : 'View Upcoming Events'}
                </a>
                
                <a
                  href="https://discord.gg/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaDiscord className="h-5 w-5" />
                  {language === 'es' ? 'Únete a Discord' : 'Join Discord'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {upcomingEvents.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {language === 'es' ? 'Próximos Eventos' : 'Upcoming Events'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {language === 'es' ? 'Países' : 'Countries'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  5K+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {language === 'es' ? 'Asistentes' : 'Attendees'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  {language === 'es' ? 'Gratis' : 'Free'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedType === type.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {type.name}
                    </button>
                  );
                })}
              </div>
              
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">{language === 'es' ? 'Todos los meses' : 'All months'}</option>
                <option value="1">{language === 'es' ? 'Febrero' : 'February'}</option>
                <option value="2">{language === 'es' ? 'Marzo' : 'March'}</option>
                <option value="3">{language === 'es' ? 'Abril' : 'April'}</option>
              </select>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Próximos Eventos' : 'Upcoming Events'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {language === 'es'
                  ? 'No te pierdas estas oportunidades de aprender y conectar con la comunidad InfraUX.'
                  : "Don't miss these opportunities to learn and connect with the InfraUX community."
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const Icon = getEventIcon(event.type);
                const eventDate = new Date(event.date);
                const isRegistrationFull = event.capacity && event.registered && event.registered >= event.capacity;
                
                return (
                  <div
                    key={event.id}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Event Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                          </div>
                        </div>
                        {event.isOnline && (
                          <GlobeAltIcon className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            {eventDate.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <ClockIcon className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      {/* Speakers */}
                      {event.speakers && event.speakers.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                            {language === 'es' ? 'Ponentes:' : 'Speakers:'}
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {event.speakers.join(', ')}
                          </p>
                        </div>
                      )}
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Registration Status */}
                      {event.capacity && event.registered && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-slate-600 dark:text-slate-400">
                              {language === 'es' ? 'Registrados' : 'Registered'}
                            </span>
                            <span className="font-semibold text-slate-900 dark:text-white">
                              {event.registered}/{event.capacity}
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                isRegistrationFull
                                  ? 'bg-red-500'
                                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
                              }`}
                              style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* CTA */}
                      {event.link ? (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                            isRegistrationFull
                              ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
                          }`}
                          
                        >
                          <TicketIcon className="h-5 w-5" />
                          {isRegistrationFull
                            ? (language === 'es' ? 'Evento Lleno' : 'Event Full')
                            : (language === 'es' ? 'Registrarse' : 'Register')
                          }
                        </a>
                      ) : (
                        <button
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 font-semibold rounded-lg"
                          disabled
                        >
                          {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <CalendarIcon className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  {language === 'es'
                    ? 'No hay eventos que coincidan con tus filtros.'
                    : 'No events match your filters.'
                  }
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Eventos Pasados' : 'Past Events'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {language === 'es'
                  ? 'Revive los mejores momentos de nuestra comunidad'
                  : 'Relive the best moments from our community'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(event.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {event.registered} {language === 'es' ? 'asistentes' : 'attendees'}
                    </span>
                    <a
                      href="#"
                      className="text-sm text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                    >
                      {language === 'es' ? 'Ver grabación' : 'Watch recording'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Host an Event CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <SparklesIcon className="h-16 w-16 mx-auto mb-6" />
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {language === 'es' 
                  ? '¿Quieres organizar un evento?' 
                  : 'Want to host an event?'
                }
              </h2>
              
              <p className="text-xl text-purple-100 mb-8">
                {language === 'es'
                  ? 'Estamos buscando organizadores de meetups, speakers y colaboradores. ¡Únete a nosotros para hacer crecer la comunidad InfraUX!'
                  : "We're looking for meetup organizers, speakers, and collaborators. Join us in growing the InfraUX community!"
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:events@infraux.com"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {language === 'es' ? 'Proponer Evento' : 'Propose Event'}
                </a>
                
                <Link
                  href="/community"
                  className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition-all duration-300"
                >
                  {language === 'es' ? 'Únete a la Comunidad' : 'Join Community'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' 
                  ? 'No te pierdas ningún evento' 
                  : "Don't miss any event"
                }
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {language === 'es'
                  ? 'Suscríbete para recibir notificaciones sobre próximos eventos, webinars y meetups.'
                  : 'Subscribe to receive notifications about upcoming events, webinars and meetups.'
                }
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={language === 'es' ? 'tu@email.com' : 'you@email.com'}
                  className="flex-1 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {language === 'es' ? 'Suscribirse' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}
                