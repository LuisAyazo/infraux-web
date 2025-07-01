import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CloudIcon,
  GlobeAltIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LockClosedIcon,
  ServerStackIcon,
  BoltIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import { pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = pageMetadata.solutions.multiCloud()

const cloudProviders = [
  {
    name: 'Amazon Web Services',
    logo: '☁️',
    services: ['EC2', 'ECS', 'Lambda', 'RDS', 'S3', 'CloudFront'],
    strengths: ['Largest service catalog', 'Enterprise maturity', 'Global reach']
  },
  {
    name: 'Google Cloud Platform',
    logo: '🌐',
    services: ['GCE', 'GKE', 'Cloud Run', 'BigQuery', 'Cloud SQL', 'Firebase'],
    strengths: ['Best in AI/ML', 'Native Kubernetes', 'Data analytics']
  },
  {
    name: 'Microsoft Azure',
    logo: '🔷',
    services: ['VMs', 'AKS', 'Functions', 'Cosmos DB', 'Blob Storage', 'CDN'],
    strengths: ['Microsoft integration', 'Hybrid cloud', 'Enterprise ready']
  }
]

const multiCloudBenefits = [
  {
    icon: LockClosedIcon,
    title: 'No Vendor Lock-in',
    description: 'Switch providers or distribute loads between clouds without rewriting code.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost Optimization',
    description: 'Use the most economical service from each provider. Save up to 40%.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Coverage',
    description: 'Deploy in regions closest to your users, regardless of provider.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'High Availability',
    description: 'If one provider fails, your application keeps running on others.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BoltIcon,
    title: 'Best Performance',
    description: 'Use each cloud\'s strengths. AWS GPUs, Google AI, Azure AD.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ArrowsRightLeftIcon,
    title: 'Easy Migration',
    description: 'Move workloads between clouds with one click. No downtime.',
    color: 'from-pink-500 to-rose-500'
  }
]

const multiCloudFeatures = [
  {
    category: 'Unified Management',
    features: [
      'Single dashboard for all clouds',
      'Consolidated billing and reports',
      'Centralized security policies',
      'Multi-cloud monitoring and alerts'
    ]
  },
  {
    category: 'Smart Abstraction',
    features: [
      'Unified API for all services',
      'Automatic translation between clouds',
      'Cloud-agnostic templates',
      'Guaranteed portability'
    ]
  },
  {
    category: 'Automatic Optimization',
    features: [
      'Cost-saving recommendations',
      'Intelligent load balancing',
      'Multi-cloud auto-scaling',
      'Automatic disaster recovery'
    ]
  }
]

const useCases = [
  {
    title: 'Regional Compliance',
    icon: GlobeAltIcon,
    description: 'Meet local regulations using the right provider in each region.',
    example: 'Data in AWS Frankfurt for GDPR, Azure China for local compliance'
  },
  {
    title: 'Cost Optimization',
    icon: CurrencyDollarIcon,
    description: 'Run each workload where it\'s most economical without changing code.',
    example: 'Compute on GCP, storage on AWS S3, CDN on Azure'
  },
  {
    title: 'Disaster Recovery',
    icon: ShieldCheckIcon,
    description: 'Automatic backup on a different cloud for maximum resilience.',
    example: 'Production on AWS, automatic DR on Google Cloud'
  },
  {
    title: 'Best of Breed',
    icon: SparklesIcon,
    description: 'Use the best service from each provider for each need.',
    example: 'BigQuery for analytics, AWS Lambda for serverless, Azure AD for auth'
  }
]

export default function MultiCloudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section - Premium Style */}
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
                <CloudIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Multi-Cloud Strategy
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                One platform,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  all clouds
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Manage AWS, Google Cloud and Azure from a single place. 
                No vendor lock-in, with total freedom to choose the best from each cloud.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
                >
                  <CloudIcon className="h-6 w-6" />
                  Start multi-cloud
                </Link>
                <Link
                  href="/demos/multi-cloud"
                  className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
                >
                  View demo
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <ArrowPathIcon className="h-5 w-5" />
                  <span className="font-medium">No vendor lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <ServerStackIcon className="h-5 w-5" />
                  <span className="font-medium">3 clouds supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5" />
                  <span className="font-medium">ROI in 3 months</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                All providers, one interface
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Manage services from multiple clouds as if they were one
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div 
                  key={provider.name} 
                  className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl">{provider.logo}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {provider.name}
                    </h3>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                      Supported services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service) => (
                        <span key={service} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-sm rounded-full font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                      Strengths:
                    </h4>
                    <ul className="space-y-3">
                      {provider.strengths.map((strength) => (
                        <li key={strength} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                + Support for Alibaba Cloud, IBM Cloud, Oracle Cloud and more
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Benefits of a multi-cloud strategy
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Maximum flexibility, resilience and optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {multiCloudBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={benefit.title} 
                    className="group relative hover-lift-premium fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="h-full glass-premium rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Everything you need for multi-cloud
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Tools designed to simplify complexity
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {multiCloudFeatures.map((category, index) => (
                <div 
                  key={category.category} 
                  className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Multi-cloud use cases
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Proven strategies to maximize value from each cloud
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div 
                    key={useCase.title} 
                    className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                          {useCase.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                          {useCase.description}
                        </p>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                          <p className="font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Example:
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            {useCase.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Optimization - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <CurrencyDollarIcon className="h-20 w-20 mb-8 text-white/90" />
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">
                      Save up to 40% on cloud costs
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8 font-medium leading-relaxed">
                      Our multi-cloud optimizer continuously analyzes prices 
                      and performance to recommend the best option.
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Real-time price analysis</h3>
                          <p className="text-emerald-50">
                            Automatically compare costs between providers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Automatic workload migration</h3>
                          <p className="text-emerald-50">
                            Move loads to the most economical provider without downtime
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Multi-cloud reserved instances</h3>
                          <p className="text-emerald-50">
                            Manage commitments from all providers
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                      <h3 className="text-2xl font-bold mb-8">
                        Monthly savings example
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-3">
                            <span className="font-medium">Before (AWS only)</span>
                            <span className="font-bold text-xl">$12,450</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-4">
                            <div className="bg-red-400 h-4 rounded-full" style={{width: '100%'}} />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-3">
                            <span className="font-medium">After (Multi-cloud)</span>
                            <span className="font-bold text-xl">$7,890</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-4">
                            <div className="bg-emerald-300 h-4 rounded-full" style={{width: '63%'}} />
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-white/20">
                          <div className="flex justify-between text-2xl font-bold">
                            <span>Total savings:</span>
                            <span className="text-emerald-100">$4,560 (37%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Painless migration
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Proven process to adopt multi-cloud without risks
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Analysis and Assessment
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      We evaluate your current infrastructure and identify 
                      multi-cloud optimization opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Architecture Design
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      We create an optimized multi-cloud architecture for your 
                      specific business needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Gradual Migration
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      We migrate workloads incrementally, validating each step
                      to ensure zero downtime.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Continuous Optimization
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      We constantly monitor and optimize your multi-cloud
                      infrastructure for maximum performance and savings.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
                <Link
                  href="/resources/multicloud-migration-guide"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Download complete migration guide
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
              Unleash the power of multi-cloud
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
              Join companies already enjoying total cloud freedom
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
              >
                <CloudIcon className="h-6 w-6" />
                Start now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
              >
                Talk to sales
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  40%
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Average cost reduction
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  99.99%
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Guaranteed uptime
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                  24/7
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Expert support
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}