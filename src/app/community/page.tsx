import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
  TrophyIcon,
  BookOpenIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  LightBulbIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX Community | Join Thousands of DevOps Engineers',
  description: 'Global community of infrastructure professionals. Learn, share and grow with cloud and DevOps experts.',
  keywords: ['devops community', 'cloud infrastructure', 'devops networking', 'cloud events', 'learn infrastructure'],
  openGraph: {
    title: 'InfraUX Community',
    description: 'Where infrastructure professionals connect',
    url: 'https://infraux.com/community',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const communityStats = [
  { number: '10,000+', label: 'Active members' },
  { number: '50+', label: 'Countries represented' },
  { number: '1,000+', label: 'Questions solved/month' },
  { number: '100+', label: 'Events per year' }
]

const communityChannels = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Discussion Forum',
    description: 'Ask, answer and learn from the community. From beginners to experts.',
    link: '/community/forum',
    cta: 'Explore forum',
    stats: '5k+ active discussions'
  },
  {
    icon: CodeBracketIcon,
    title: 'Slack Community',
    description: 'Real-time chat with other users. Channels by technology and region.',
    link: 'https://slack.infraux.com',
    cta: 'Join Slack',
    stats: '2k+ users online'
  },
  {
    icon: CalendarIcon,
    title: 'Events & Meetups',
    description: 'Webinars, workshops and local meetups. Learn from experts live.',
    link: '/community/events',
    cta: 'View upcoming events',
    stats: '10+ monthly events'
  },
  {
    icon: BookOpenIcon,
    title: 'Learning Center',
    description: 'Tutorials, guides and free courses. From basic to advanced.',
    link: '/resources',
    cta: 'Start learning',
    stats: '500+ resources'
  }
]

const contributorBenefits = [
  {
    icon: TrophyIcon,
    title: 'Recognition',
    description: 'Special badges and visibility in the community'
  },
  {
    icon: SparklesIcon,
    title: 'Early Access',
    description: 'Try new features before anyone else'
  },
  {
    icon: HeartIcon,
    title: 'Exclusive Swag',
    description: 'T-shirts, stickers and more for active contributors'
  },
  {
    icon: AcademicCapIcon,
    title: '1-on-1 Mentorship',
    description: 'Sessions with the InfraUX team'
  }
]

const upcomingEvents = [
  {
    date: 'Jul 15',
    title: 'Workshop: Multi-Cloud with InfraUX',
    type: 'Online',
    time: '18:00 UTC',
    spots: '50 spots available'
  },
  {
    date: 'Jul 22',
    title: 'Madrid Meetup: DevOps Best Practices',
    type: 'In-person',
    time: '19:00 CEST',
    spots: '30 spots available'
  },
  {
    date: 'Jul 29',
    title: 'Webinar: Kubernetes in Production',
    type: 'Online',
    time: '17:00 UTC',
    spots: 'Unlimited'
  }
]

const featuredContributors = [
  {
    name: 'Ana Martinez',
    avatar: 'AM',
    role: 'Cloud Architect',
    contributions: '150+ answers',
    badge: '🏆 Top Contributor'
  },
  {
    name: 'Carlos Ruiz',
    avatar: 'CR',
    role: 'DevOps Engineer',
    contributions: '10+ tutorials',
    badge: '📚 Content Creator'
  },
  {
    name: 'Laura Garcia',
    avatar: 'LG',
    role: 'SRE Lead',
    contributions: '5+ talks',
    badge: '🎤 Speaker'
  }
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
                <UserGroupIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Global Community
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Where infrastructure
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  professionals connect
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Join thousands of DevOps engineers, SREs and cloud architects.
                Learn, share knowledge and grow professionally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <UserGroupIcon className="h-5 w-5" />
                  Join the community
                </Link>
                <Link
                  href="https://slack.infraux.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Enter Slack
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {communityStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                    {stat.number}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Connect how you prefer
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Multiple ways to participate in the community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {communityChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div key={channel.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {channel.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {channel.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                            {channel.stats}
                          </span>
                          <Link
                            href={channel.link}
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                          >
                            {channel.cta}
                            <ArrowRightIcon className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Contributors */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Featured contributors
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                We recognize those who make our community great
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {featuredContributors.map((contributor) => (
                <div key={contributor.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {contributor.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {contributor.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {contributor.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">
                    {contributor.contributions}
                  </p>
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm rounded-full">
                    {contributor.badge}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Benefits for contributors
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contributorBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="text-center">
                      <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Upcoming events
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Learn and connect with the community
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl px-4 py-2 text-white text-center">
                        <div className="text-sm font-medium">
                          {event.date}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {event.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {event.time}
                          </span>
                          <span className="text-emerald-600 dark:text-emerald-400">
                            {event.spots}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/community/events"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/community/events"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                View all events
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Global Community */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
              <GlobeAltIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">
                A truly global community
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                With members in over 50 countries, our community speaks all languages
                but shares the same passion: building better infrastructure.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">🌎</div>
                  <h3 className="font-semibold mb-1">Americas</h3>
                  <p className="text-indigo-100">3,500+ members</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">🌍</div>
                  <h3 className="font-semibold mb-1">Europe</h3>
                  <p className="text-indigo-100">4,200+ members</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">🌏</div>
                  <h3 className="font-semibold mb-1">Asia-Pacific</h3>
                  <p className="text-indigo-100">2,300+ members</p>
                </div>
              </div>
              
              <Link
                href="/community/chapters"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
              >
                Find your local chapter
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <LightBulbIcon className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Your knowledge can help others
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Share your experience, learn from others and grow professionally
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Join now
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/community/code-of-conduct"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Code of conduct
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}