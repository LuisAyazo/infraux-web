import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import React from 'react'
import {
  RocketLaunchIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CloudIcon,
  CodeBracketIcon,
  CubeIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  CommandLineIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
  BeakerIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Use Cases | How Teams Use InfraUX',
  description: 'Discover how startups, enterprises, and DevOps teams use InfraUX to transform their cloud infrastructure management. Real examples and success stories.',
  keywords: ['InfraUX use cases', 'cloud infrastructure examples', 'DevOps automation', 'multi-cloud management', 'infrastructure as code'],
  openGraph: {
    title: 'Use Cases - InfraUX for Every Team',
    description: 'See how different teams use InfraUX to build, deploy, and manage cloud infrastructure visually.',
    url: 'https://infraux.com/use-cases',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use Cases - InfraUX',
    description: 'Real examples of teams transforming their infrastructure',
  },
  alternates: {
    canonical: 'https://infraux.com/use-cases',
    languages: {
      'en': 'https://infraux.com/use-cases',
      'es': 'https://infraux.com/casos-de-uso'
    }
  },
}

const useCases = [
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Scale fast without technical debt',
    description: 'Build production-ready infrastructure from day one. InfraUX helps startups deploy quickly while maintaining best practices.',
    icon: RocketLaunchIcon,
    gradient: 'from-violet-500 to-purple-600',
    benefits: [
      'From idea to production in hours, not weeks',
      'Automatic security and compliance best practices',
      'Scale from MVP to millions of users',
      'No need for dedicated DevOps team initially'
    ],
    features: [
      {
        title: 'Quick Start Templates',
        description: 'Pre-built architectures for common startup needs'
      },
      {
        title: 'Cost Optimization',
        description: 'Start small and scale efficiently as you grow'
      },
      {
        title: 'CI/CD Integration',
        description: 'Deploy automatically with every code push'
      }
    ],
    testimonial: {
      quote: "We went from concept to production in 3 days. What would have taken weeks of DevOps work was done visually in hours.",
      author: "Sarah Chen",
      role: "CTO at TechStartup",
      metric: "90% faster deployment"
    },
    cta: {
      primary: { text: 'Start Free Trial', href: '/register' },
      secondary: { text: 'View Startup Guide', href: '/docs/startups' }
    }
  },
  {
    id: 'enterprises',
    title: 'Enterprises',
    subtitle: 'Govern complex infrastructure at scale',
    description: 'Manage multi-cloud environments with enterprise-grade security, compliance, and governance.',
    icon: BuildingOfficeIcon,
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
    benefits: [
      'Unified view across AWS, GCP, and Azure',
      'Enterprise SSO and RBAC',
      'Audit trails and compliance reporting',
      'Private cloud and on-premise support'
    ],
    features: [
      {
        title: 'Multi-Account Management',
        description: 'Organize resources across departments and projects'
      },
      {
        title: 'Policy Enforcement',
        description: 'Ensure compliance with company standards automatically'
      },
      {
        title: 'Cost Governance',
        description: 'Track and optimize spending across all clouds'
      }
    ],
    testimonial: {
      quote: "InfraUX gave us visibility and control over our entire multi-cloud infrastructure. Compliance audits that took weeks now take hours.",
      author: "Michael Torres",
      role: "VP of Engineering at Fortune 500",
      metric: "75% reduction in audit time"
    },
    cta: {
      primary: { text: 'Request Demo', href: '/demo' },
      secondary: { text: 'Enterprise Features', href: '/enterprise' }
    }
  },
  {
    id: 'devops-teams',
    title: 'DevOps Teams',
    subtitle: 'Automate everything, visualize always',
    description: 'Empower your DevOps team with visual tools that integrate with your existing workflow.',
    icon: CommandLineIcon,
    gradient: 'from-blue-500 to-indigo-600',
    benefits: [
      'Visual editor with full IaC code access',
      'Git integration for version control',
      'Terraform/Pulumi state management',
      'API-first for custom automation'
    ],
    features: [
      {
        title: 'GitOps Workflow',
        description: 'Review and approve infrastructure changes via PRs'
      },
      {
        title: 'Module Library',
        description: 'Create reusable infrastructure components'
      },
      {
        title: 'Drift Detection',
        description: 'Automatically detect and fix configuration drift'
      }
    ],
    testimonial: {
      quote: "Finally, a tool that respects our code-first approach while making infrastructure accessible to the entire team.",
      author: "Alex Kumar",
      role: "DevOps Lead at ScaleUp Inc",
      metric: "3x faster onboarding"
    },
    cta: {
      primary: { text: 'Try It Free', href: '/register' },
      secondary: { text: 'DevOps Guide', href: '/docs/devops' }
    }
  },
  {
    id: 'agencies',
    title: 'Agencies & Consultants',
    subtitle: 'Manage multiple clients efficiently',
    description: 'Build and manage infrastructure for all your clients from a single platform.',
    icon: UserGroupIcon,
    gradient: 'from-pink-500 to-rose-600',
    benefits: [
      'Isolated workspaces for each client',
      'White-label options available',
      'Reusable templates across projects',
      'Granular billing and cost tracking'
    ],
    features: [
      {
        title: 'Client Management',
        description: 'Organize projects and resources by client'
      },
      {
        title: 'Template Marketplace',
        description: 'Monetize your infrastructure expertise'
      },
      {
        title: 'Team Collaboration',
        description: 'Invite clients to review and approve changes'
      }
    ],
    testimonial: {
      quote: "We manage 50+ client infrastructures with a team of 5. InfraUX made us 10x more efficient.",
      author: "Maria Rodriguez",
      role: "Founder at CloudConsult",
      metric: "50+ clients managed"
    },
    cta: {
      primary: { text: 'Partner Program', href: '/partners' },
      secondary: { text: 'Agency Features', href: '/agencies' }
    }
  }
]

const industries = [
  { name: 'FinTech', icon: CurrencyDollarIcon, count: '500+' },
  { name: 'HealthTech', icon: ShieldCheckIcon, count: '300+' },
  { name: 'E-commerce', icon: ChartBarIcon, count: '1000+' },
  { name: 'SaaS', icon: CloudIcon, count: '2000+' },
  { name: 'Gaming', icon: CubeIcon, count: '200+' },
  { name: 'EdTech', icon: BeakerIcon, count: '400+' }
]

export default function UseCasesPage() {
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
                  For every team, every scale
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Built for teams that
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  move fast
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                From startups to Fortune 500, see how teams use InfraUX
                to transform their cloud infrastructure management
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <div key={useCase.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
                  {/* Content */}
                  <div className="lg:flex-1 mb-12 lg:mb-0">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} shadow-lg mb-6 fade-in`}>
                      {React.createElement(useCase.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    
                    {useCase.featured && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-4 fade-in">
                        <FireIcon className="h-4 w-4" />
                        MOST POPULAR
                      </div>
                    )}
                    
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
                      {useCase.title}
                    </h2>
                    <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6 fade-in-up" style={{ animationDelay: '0.15s' }}>
                      {useCase.subtitle}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                      {useCase.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 fade-in-up" style={{ animationDelay: `${0.25 + i * 0.05}s` }}>
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                            <CheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <Link
                        href={useCase.cta.primary.href}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        {useCase.cta.primary.text}
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                      <Link
                        href={useCase.cta.secondary.href}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-colors"
                      >
                        {useCase.cta.secondary.text}
                      </Link>
                    </div>
                  </div>
                  
                  {/* Features & Testimonial */}
                  <div className="lg:flex-1">
                    {/* Features */}
                    <div className="glass-premium rounded-3xl p-8 border border-slate-200 dark:border-slate-800 mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h3>
                      <div className="space-y-6">
                        {useCase.features.map((feature, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="relative fade-in-up" style={{ animationDelay: '0.35s' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl" />
                      <div className="relative glass-premium rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
                        <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                          "{useCase.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{useCase.testimonial.author}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{useCase.testimonial.role}</div>
                          </div>
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                            {useCase.testimonial.metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Trusted across industries
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Companies in every sector rely on InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.name} className="text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                    <div className="inline-flex p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{industry.name}</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold">{industry.count} companies</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-16 text-center text-white shadow-premium-lg">
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Ready to join them?
                </h2>
                <p className="text-xl text-emerald-50 mb-10 font-medium max-w-2xl mx-auto">
                  Start building better infrastructure today.
                  No credit card required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/registro"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                  >
                    Start free trial
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    Request demo
                  </Link>
                </div>
                
                <div className="mt-10 flex items-center justify-center gap-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5" />
                    <span>5-minute setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span>SOC2 certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5" />
                    <span>24/7 support</span>
                  </div>
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