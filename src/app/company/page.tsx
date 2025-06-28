import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import Image from 'next/image'
import { 
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Company | About InfraUX',
  description: 'Learn about InfraUX\'s mission to democratize cloud infrastructure. Meet our team, our values, and our vision for the future of DevOps.',
  keywords: ['about InfraUX', 'company', 'team', 'mission', 'values', 'cloud infrastructure company'],
  openGraph: {
    title: 'About InfraUX - Our Mission & Team',
    description: 'We\'re building the future of cloud infrastructure management. Learn about our journey, team, and values.',
    url: 'https://infraux.com/company',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company - InfraUX',
    description: 'Building the future of cloud infrastructure',
  },
  alternates: {
    canonical: 'https://infraux.com/company',
    languages: {
      'en': 'https://infraux.com/company',
      'es': 'https://infraux.com/empresa'
    }
  },
}

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation First',
    description: 'We constantly push boundaries to make infrastructure management simpler and more powerful.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: UserGroupIcon,
    title: 'User Obsessed',
    description: 'Every feature, every decision starts with "How does this help our users succeed?"',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: HeartIcon,
    title: 'Built with Love',
    description: 'We pour passion into every line of code, every pixel, every interaction.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Security',
    description: 'Your infrastructure is critical. We treat security and reliability as sacred.',
    gradient: 'from-emerald-500 to-teal-600'
  }
]

const milestones = [
  { year: '2021', event: 'InfraUX founded', description: 'Started with a vision to simplify cloud infrastructure' },
  { year: '2022', event: 'First 1,000 users', description: 'Reached our first thousand happy users' },
  { year: '2023', event: 'Series A funding', description: '$15M to accelerate product development' },
  { year: '2024', event: 'Multi-cloud support', description: 'Added support for AWS, GCP, and Azure' },
  { year: '2025', event: '10,000+ users', description: 'Serving teams across 150+ countries' }
]

const team = [
  {
    name: 'Carlos Rodriguez',
    role: 'CEO & Co-founder',
    bio: 'Former AWS engineer with 10+ years in cloud infrastructure',
    image: '/team/carlos.jpg'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-founder',
    bio: 'Ex-Google, passionate about making DevOps accessible',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Michael Torres',
    role: 'VP of Engineering',
    bio: 'Led infrastructure teams at multiple unicorns',
    image: '/team/michael.jpg'
  },
  {
    name: 'Ana García',
    role: 'Head of Product',
    bio: 'Product visionary with deep DevOps expertise',
    image: '/team/ana.jpg'
  }
]

const investors = [
  { name: 'Sequoia Capital', logo: '🌲' },
  { name: 'Y Combinator', logo: 'YC' },
  { name: 'Andreessen Horowitz', logo: 'a16z' },
  { name: 'Google Ventures', logo: 'GV' }
]

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-black dark:via-black dark:to-emerald-950/20" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium border border-slate-200 dark:border-slate-800 mb-8 fade-in">
                <SparklesIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Our story
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Building the future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  cloud infrastructure
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                We believe infrastructure should be visual, collaborative, and accessible to everyone.
                That's why we're building InfraUX.
              </p>
              
              <div className="flex items-center justify-center gap-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-center">
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">10K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Active users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">150+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">99.9%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 fade-in">
                Our Mission
              </h2>
              <p className="text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
                To democratize cloud infrastructure by making it visual, intuitive, and accessible to teams of all sizes and skill levels.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                We envision a world where anyone can design, deploy, and manage cloud infrastructure without being a DevOps expert. Where teams collaborate seamlessly on infrastructure just like they do on code. Where best practices are built-in, not bolted on.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 fade-in">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg mb-6 transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 fade-in">
              Our Journey
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500" />
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative flex items-start gap-8 fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                      {/* Timeline dot */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-black rounded-full border-4 border-emerald-500 shadow-lg">
                        <span className="text-sm font-bold text-emerald-600">{milestone.year}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 glass-premium rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Meet the Team
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                The passionate people building InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className="text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="relative mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Want to join our mission?
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View open positions
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Backed by the Best
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                World-class investors who believe in our vision
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {investors.map((investor, index) => (
                <div key={investor.name} className="text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <div className="text-4xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {investor.logo}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {investor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-16 text-center text-white shadow-premium-lg">
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Join us on this journey
                </h2>
                <p className="text-xl text-emerald-50 mb-10 font-medium max-w-2xl mx-auto">
                  Whether as a user, partner, or team member,
                  be part of the infrastructure revolution
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/registro"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                  >
                    Start building
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}