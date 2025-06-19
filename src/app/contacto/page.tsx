import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contacto | Habla con el equipo de InfraUX',
  description: 'Contáctanos para solicitar una demo, hacer preguntas sobre InfraUX o explorar opciones enterprise. Estamos aquí para ayudarte.',
  keywords: ['contacto InfraUX', 'soporte', 'demo', 'ventas', 'ayuda', 'consultas'],
  openGraph: {
    title: 'Contacto - InfraUX',
    description: 'Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte.',
    url: 'https://infraux.com/contacto',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - InfraUX',
    description: 'Habla con nuestro equipo de expertos',
  },
  alternates: {
    canonical: 'https://infraux.com/contacto',
    languages: {
      'es': 'https://infraux.com/contacto',
      'en': 'https://infraux.com/contact'
    }
  },
}

const contactReasons = [
  {
    icon: BuildingOfficeIcon,
    title: 'Ventas Enterprise',
    description: 'Explora planes personalizados para tu organización',
    link: '#enterprise-form',
    cta: 'Hablar con ventas'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Solicitar Demo',
    description: 'Ve InfraUX en acción con una demo personalizada',
    link: '#demo-form',
    cta: 'Agendar demo'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Soporte Técnico',
    description: 'Obtén ayuda con tu cuenta o implementación',
    link: 'https://support.infraux.com',
    cta: 'Centro de ayuda'
  },
  {
    icon: UserGroupIcon,
    title: 'Partnerships',
    description: 'Explora oportunidades de colaboración',
    link: '#partnership-form',
    cta: 'Ser partner'
  }
]

const offices = [
  {
    city: 'San Francisco',
    address: '123 Market Street, Suite 400',
    country: 'Estados Unidos',
    phone: '+1 (415) 555-0123',
    email: 'sf@infraux.com',
    timezone: 'PST (UTC-8)'
  },
  {
    city: 'Ciudad de México',
    address: 'Av. Presidente Masaryk 61, Polanco',
    country: 'México',
    phone: '+52 55 5555 0123',
    email: 'mx@infraux.com',
    timezone: 'CST (UTC-6)'
  },
  {
    city: 'Madrid',
    address: 'Gran Vía 32, 4º Planta',
    country: 'España',
    phone: '+34 91 555 0123',
    email: 'es@infraux.com',
    timezone: 'CET (UTC+1)'
  }
]

const supportChannels = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Chat en vivo',
    description: 'Habla con nuestro equipo en tiempo real',
    availability: 'Lun-Vie 9:00-18:00 PST',
    action: 'Iniciar chat'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    description: 'Respuesta en menos de 24 horas',
    email: 'hola@infraux.com',
    action: 'Enviar email'
  },
  {
    icon: PhoneIcon,
    title: 'Teléfono',
    description: 'Para consultas urgentes',
    phone: '+1 (415) 555-0123',
    action: 'Llamar ahora'
  }
]

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Estamos aquí para ayudarte
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Hablemos sobre
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  tu infraestructura
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Ya sea que necesites una demo, tengas preguntas técnicas o quieras 
                explorar opciones enterprise, nuestro equipo está listo para ayudarte
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              ¿Cómo podemos ayudarte?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <Link
                    key={reason.title}
                    href={reason.link}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {reason.description}
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-3 transition-all">
                      {reason.cta}
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Envíanos un mensaje
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Motivo de contacto *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="demo">Solicitar demo</option>
                    <option value="sales">Consulta de ventas</option>
                    <option value="support">Soporte técnico</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Tamaño de la empresa
                  </label>
                  <select
                    id="company-size"
                    name="company-size"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201-500">201-500 empleados</option>
                    <option value="500+">500+ empleados</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400">
                    Acepto la <Link href="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 hover:underline">política de privacidad</Link> y 
                    autorizo a InfraUX a contactarme con información relevante.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  Enviar mensaje
                </button>
              </form>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span>Respondemos en menos de 24 horas hábiles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Otras formas de contactarnos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div key={channel.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg">
                    <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {channel.description}
                    </p>
                    {channel.availability && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <ClockIcon className="h-4 w-4 inline mr-1" />
                        {channel.availability}
                      </p>
                    )}
                    {channel.email && (
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                        {channel.email}
                      </p>
                    )}
                    {channel.phone && (
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                        {channel.phone}
                      </p>
                    )}
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                      {channel.action}
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Nuestras oficinas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.city} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm">
                  <MapPinIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {office.city}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {office.address}<br />
                    {office.country}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <PhoneIcon className="h-4 w-4" />
                      {office.phone}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <EnvelopeIcon className="h-4 w-4" />
                      {office.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <ClockIcon className="h-4 w-4" />
                      {office.timezone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <QuestionMarkCircleIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Tienes preguntas frecuentes?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Visita nuestro centro de ayuda para encontrar respuestas rápidas
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Ver preguntas frecuentes
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}