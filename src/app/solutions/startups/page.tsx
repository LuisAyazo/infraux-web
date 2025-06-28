import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  RocketLaunchIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  ChartBarIcon,
  BeakerIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX for Startups | Infrastructure that Scales with You',
  description: 'Cloud infrastructure solution designed for startups. Start free, scale without limits. No cost surprises.',
  keywords: ['startups', 'startup infrastructure', 'cloud for startups', 'scale infrastructure', 'aws startup'],
  openGraph: {
    title: 'InfraUX for Startups',
    description: 'Infrastructure that grows with your startup',
    url: 'https://infraux.com/solutions/startups',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const startupBenefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Start Free',
    description: 'Generous free plan so you can validate your idea without initial costs.',
    highlight: 'No credit card'
  },
  {
    icon: BoltIcon,
    title: 'Launch in Minutes',
    description: 'From idea to deployment in less than 10 minutes. No complex configurations.',
    highlight: 'Instant setup'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Scale Without Limits',
    description: 'Architecture that grows with you. From 10 to 10 million users without changing anything.',
    highlight: 'Auto-scaling included'
  },
  {
    icon: CreditCardIcon,
    title: 'Predictable Costs',
    description: 'Cost alerts and configurable limits. No more billing surprises.',
    highlight: 'Total control'
  }
]

const startupFeatures = [
  {
    category: 'Rapid Development',
    icon: RocketLaunchIcon,
    features: [
      'Pre-configured templates for common apps',
      'Automatic dev/staging/prod environments',
      'CI/CD configured from day 1',
      'Preview environments for each PR'
    ]
  },
  {
    category: 'Cost Optimization',
    icon: ChartBarIcon,
    features: [
      'Automatic savings recommendations',
      'Auto-shutdown of unused resources',
      'Real-time cost alerts',
      'Detailed expense reports'
    ]
  },
  {
    category: 'Security Included',
    icon: ShieldCheckIcon,
    features: [
      'Automatic SSL/TLS',
      'Daily backups included',
      '24/7 monitoring',
      'SOC2 compliance ready'
    ]
  }
]

const successStories = [
  {
    company: 'TechStart',
    logo: '🚀',
    quote: 'We went from 0 to 100k users in 3 months. InfraUX scaled perfectly without us having to touch anything.',
    author: 'Maria Chen',
    role: 'CTO & Co-founder',
    metric: '100k users',
    achievement: 'in 3 months'
  },
  {
    company: 'FinanceApp',
    logo: '💰',
    quote: 'We reduced our infrastructure costs by 70% with InfraUX automatic optimizations.',
    author: 'Carlos Ruiz',
    role: 'Founder',
    metric: '70%',
    achievement: 'cost reduction'
  },
  {
    company: 'EduTech',
    logo: '📚',
    quote: 'We launched in 3 different countries in one week. Multi-region was as easy as a click.',
    author: 'Ana Lopez',
    role: 'Head of Engineering',
    metric: '3 countries',
    achievement: 'in 1 week'
  }
]

const pricingTiers = [
  {
    name: 'Hobby',
    price: '$0',
    description: 'Perfect for personal projects and MVPs',
    features: [
      '1 project',
      '10k requests/month',
      'Automatic SSL',
      'Community support'
    ],
    cta: 'Start free',
    highlighted: false
  },
  {
    name: 'Startup',
    price: '$49',
    description: 'Everything you need to launch and grow',
    features: [
      '5 projects',
      '1M requests/month',
      'Auto-scaling',
      'Priority support',
      'Unlimited environments',
      'CI/CD included'
    ],
    cta: 'Free 14-day trial',
    highlighted: true
  },
  {
    name: 'Scale',
    price: '$299',
    description: 'For fast-growing startups',
    features: [
      'Unlimited projects',
      'Unlimited requests',
      'Multi-region',
      '99.9% SLA',
      'Dedicated support',
      'Monthly consulting'
    ],
    cta: 'Contact sales',
    highlighted: false
  }
]

export default function StartupsPage() {
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
                <RocketLaunchIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Solution for Startups
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Infrastructure that
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  grows with your startup
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Start free, scale without limits. InfraUX adapts to every stage 
                of your startup, from MVP to unicorn.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
                >
                  <SparklesIcon className="h-6 w-6" />
                  Start free now
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
                >
                  View plans
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
              
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.4s' }}>
                No credit card • 2-minute setup • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Designed for ambitious startups
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Everything you need to move fast without sacrificing quality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={benefit.title} 
                    className="glass-premium rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircleIcon className="h-5 w-5" />
                      {benefit.highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Everything included from day 1
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Don't waste time configuring, focus on your product
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {startupFeatures.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.category} 
                    className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-black rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Startups that trust InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Real stories of accelerated growth
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div 
                  key={story.company} 
                  className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl">{story.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {story.company}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                          {story.metric}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          {story.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {story.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {story.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Pricing that grows with you
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Start free, scale when you need it
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-10 transition-all duration-300 fade-in-up ${
                    tier.highlighted
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-premium-lg scale-105'
                      : 'glass-premium border border-slate-200 dark:border-slate-800 hover-lift-premium'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        Most popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className={`text-5xl font-black ${
                        tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {tier.price}
                      </span>
                      {tier.price !== '$0' && (
                        <span className={tier.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'}>
                          /month
                        </span>
                      )}
                    </div>
                    <p className={`${
                      tier.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className={`h-6 w-6 flex-shrink-0 ${
                          tier.highlighted ? 'text-emerald-200' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={tier.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/registro"
                    className={`block text-center py-4 px-8 rounded-full font-semibold transition-all ${
                      tier.highlighted
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-slate-600 dark:text-slate-400">
                Need something special? {' '}
                <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                  Let's talk
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Startup Program */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <BeakerIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  InfraUX Startup Program
                </h2>
                <p className="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                  If your startup is less than 2 years old and has raised less than $2M, 
                  you qualify for our special program with up to $10,000 in credits.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">$10k</div>
                    <p className="text-emerald-100 font-medium">in credits</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">6 months</div>
                    <p className="text-emerald-100 font-medium">of premium support</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">1-on-1</div>
                    <p className="text-emerald-100 font-medium">technical mentorship</p>
                  </div>
                </div>
                
                <Link
                  href="/startup-program"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Apply to program
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
              Your infrastructure shouldn't slow down your growth
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
              Join hundreds of startups building the future with InfraUX
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
              >
                Start free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/demos/startup-setup"
                className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
              >
                Watch 5-min demo
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>2-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}