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
  title: 'Contact | Talk to the InfraUX team',
  description: 'Contact us to request a demo, ask questions about InfraUX or explore enterprise options. We are here to help you.',
  keywords: ['contact InfraUX', 'support', 'demo', 'sales', 'help', 'inquiries'],
  openGraph: {
    title: 'Contact - InfraUX',
    description: 'Get in touch with our team. We are here to help you.',
    url: 'https://infraux.com/contact',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - InfraUX',
    description: 'Talk to our team of experts',
  },
  alternates: {
    canonical: 'https://infraux.com/contact',
    languages: {
      'en': 'https://infraux.com/contact',
      'es': 'https://infraux.com/contacto'
    }
  },
}

const contactReasons = [
  {
    icon: BuildingOfficeIcon,
    title: 'Enterprise Sales',
    description: 'Explore custom plans for your organization',
    link: '#enterprise-form',
    cta: 'Talk to sales'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Request Demo',
    description: 'See InfraUX in action with a personalized demo',
    link: '#demo-form',
    cta: 'Schedule demo'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Technical Support',
    description: 'Get help with your account or implementation',
    link: 'https://support.infraux.com',
    cta: 'Help center'
  },
  {
    icon: UserGroupIcon,
    title: 'Partnerships',
    description: 'Explore collaboration opportunities',
    link: '#partnership-form',
    cta: 'Become a partner'
  }
]

const offices = [
  {
    city: 'San Francisco',
    address: '123 Market Street, Suite 400',
    country: 'United States',
    phone: '+1 (415) 555-0123',
    email: 'sf@infraux.com',
    timezone: 'PST (UTC-8)'
  },
  {
    city: 'Mexico City',
    address: 'Av. Presidente Masaryk 61, Polanco',
    country: 'Mexico',
    phone: '+52 55 5555 0123',
    email: 'mx@infraux.com',
    timezone: 'CST (UTC-6)'
  },
  {
    city: 'Madrid',
    address: 'Gran Vía 32, 4th Floor',
    country: 'Spain',
    phone: '+34 91 555 0123',
    email: 'es@infraux.com',
    timezone: 'CET (UTC+1)'
  }
]

const supportChannels = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Talk to our team in real time',
    availability: 'Mon-Fri 9:00-18:00 PST',
    action: 'Start chat'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    description: 'Response in less than 24 hours',
    email: 'hello@infraux.com',
    action: 'Send email'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    description: 'For urgent inquiries',
    phone: '+1 (415) 555-0123',
    action: 'Call now'
  }
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  We're here to help you
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Let's talk about
                <span className="block gradient-text-emerald">
                  your infrastructure
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Whether you need a demo, have technical questions or want to
                explore enterprise options, our team is ready to help you
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
              How can we help you?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Link
                    key={reason.title}
                    href={reason.link}
                    className="group relative hover-lift-premium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                          {reason.description}
                        </p>
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold group-hover:gap-3 transition-all">
                          {reason.cta}
                          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form - Premium Style */}
        <section id="contact-form" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 md:p-14 border border-slate-200 dark:border-slate-800">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Send us a message
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Fill out the form and we'll get back to you soon
                  </p>
                </div>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Corporate email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium"
                      placeholder="Company Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%23334155%22%20d%3d%22M10.293%203.293%206%207.586%201.707%203.293A1%201%200%200%200%20.293%204.707l5%205a1%201%200%200%200%201.414%200l5-5a1%201%200%201%200-1.414-1.414z%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_1.5rem_center] bg-no-repeat"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a demo</option>
                    <option value="pricing">Pricing inquiry</option>
                    <option value="technical">Technical question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company size
                  </label>
                  <select
                    id="company-size"
                    name="company-size"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%23334155%22%20d%3d%22M10.293%203.293%206%207.586%201.707%203.293A1%201%200%200%200%20.293%204.707l5%205a1%201%200%200%200%201.414%200l5-5a1%201%200%201%200-1.414-1.414z%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_1.5rem_center] bg-no-repeat"
                  >
                    <option value="">Select an option</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 font-medium resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded-md cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                    I accept the <Link href="/privacy" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">privacy policy</Link> and authorize InfraUX to contact me with relevant information.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  Send message
                </button>
                
                <div className="mt-8 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                  <span>We respond in less than 24 business hours</span>
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
              Other ways to contact us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 text-center shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {channel.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {channel.description}
                        </p>
                        {channel.availability && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-center gap-2">
                            <ClockIcon className="h-4 w-4" />
                            {channel.availability}
                          </p>
                        )}
                        {channel.email && (
                          <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-6 text-lg">
                            {channel.email}
                          </p>
                        )}
                        {channel.phone && (
                          <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-6 text-lg">
                            {channel.phone}
                          </p>
                        )}
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                          {channel.action}
                          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office Locations - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
              Our offices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={office.city}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6">
                        <MapPinIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {office.city}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                        {office.address}<br />
                        {office.country}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <PhoneIcon className="h-5 w-5 text-emerald-500" />
                          <span className="font-medium">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <EnvelopeIcon className="h-5 w-5 text-emerald-500" />
                          <span className="font-medium">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <ClockIcon className="h-5 w-5 text-emerald-500" />
                          <span className="font-medium">{office.timezone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ CTA - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-8 animate-fade-in">
              <QuestionMarkCircleIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-up">
              Have frequently asked questions?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up animation-delay-200">
              Visit our help center to find quick answers
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
            >
              View FAQ
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}