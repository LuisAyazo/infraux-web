import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CogIcon,
  CommandLineIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  CloudArrowUpIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  ServerStackIcon,
  CodeBracketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX for DevOps | Total Infrastructure Automation',
  description: 'Complete DevOps platform. CI/CD, IaC, monitoring and automation in one place. Accelerate your pipeline 10x.',
  keywords: ['devops', 'ci/cd', 'automation', 'infrastructure as code', 'pipeline', 'kubernetes'],
  openGraph: {
    title: 'InfraUX for DevOps',
    description: 'The DevOps platform your team needs',
    url: 'https://infraux.com/solutions/devops',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const devopsFeatures = [
  {
    icon: ArrowPathIcon,
    title: 'Integrated CI/CD',
    description: 'Visual pipelines with native integration for GitHub, GitLab and Bitbucket.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CodeBracketIcon,
    title: 'Native GitOps',
    description: 'Your Git repository as the source of truth. Automatic changes with every commit.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Total Observability',
    description: 'Metrics, logs and traces in a single dashboard. Smart alerts included.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BoltIcon,
    title: 'Extreme Automation',
    description: 'From commit to production without manual intervention. Zero-touch deployment.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BeakerIcon,
    title: 'Automated Testing',
    description: 'Infrastructure, security and performance tests on every deployment.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security by Design',
    description: 'Vulnerability scanning, secrets management and automatic compliance.',
    color: 'from-pink-500 to-rose-500'
  }
]

const devopsMetrics = [
  {
    metric: '10x',
    label: 'More deployments',
    description: 'per day'
  },
  {
    metric: '90%',
    label: 'Less time',
    description: 'on manual tasks'
  },
  {
    metric: '0',
    label: 'Downtime',
    description: 'in deployments'
  },
  {
    metric: '24/7',
    label: 'Monitoring',
    description: 'automatic'
  }
]

const pipelineStages = [
  {
    name: 'Code',
    icon: CodeBracketIcon,
    tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    description: 'Integrated version control'
  },
  {
    name: 'Build',
    icon: CogIcon,
    tools: ['Docker', 'Buildpacks', 'Kaniko'],
    description: 'Automatic and optimized build'
  },
  {
    name: 'Test',
    icon: BeakerIcon,
    tools: ['Jest', 'Cypress', 'Terraform Test'],
    description: 'Multi-level testing'
  },
  {
    name: 'Deploy',
    icon: CloudArrowUpIcon,
    tools: ['Kubernetes', 'ECS', 'Lambda'],
    description: 'Deploy to any target'
  },
  {
    name: 'Monitor',
    icon: ChartBarIcon,
    tools: ['Prometheus', 'Grafana', 'DataDog'],
    description: 'Complete observability'
  }
]

const devopsTools = [
  { name: 'Terraform', logo: '🔧', category: 'IaC' },
  { name: 'Kubernetes', logo: '⚓', category: 'Orchestration' },
  { name: 'Docker', logo: '🐳', category: 'Containers' },
  { name: 'Jenkins', logo: '🤖', category: 'CI/CD' },
  { name: 'Prometheus', logo: '📊', category: 'Monitoring' },
  { name: 'Ansible', logo: '🔄', category: 'Configuration' },
  { name: 'ArgoCD', logo: '🚀', category: 'GitOps' },
  { name: 'Vault', logo: '🔐', category: 'Secrets' }
]

export default function DevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <CogIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  DevOps Platform
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Frictionless DevOps
                <span className="block gradient-text-emerald mt-2">
                  Exponential results
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Automate your entire infrastructure pipeline. From code to 
                production in minutes, not days. The DevOps platform that accelerates your delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <BoltIcon className="h-6 w-6" />
                  Automate now
                </Link>
                <Link
                  href="/demos/devops-pipeline"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  See pipeline in action
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Results that speak for themselves
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Real metrics from DevOps teams using InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsMetrics.map((item, index) => (
                <div key={item.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-6xl font-black gradient-text-emerald mb-3">
                    {item.metric}
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline Visualization - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                End-to-end visual pipeline
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Visualize and control your entire DevOps flow in one place
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-10">
                  {pipelineStages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={stage.name} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="text-center">
                          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-5 mb-4 shadow-premium">
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                            {stage.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            {stage.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {stage.tools.map((tool) => (
                              <span key={tool} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full font-medium">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        {index < pipelineStages.length - 1 && (
                          <ArrowRightIcon className="h-8 w-8 text-slate-300 dark:text-slate-700 mx-6 hidden lg:block" />
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Pipeline Status
                    </h4>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold rounded-full">
                      Healthy
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Last deployment</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">12 min ago</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Success rate</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">99.8%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Avg. time</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">4.2 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Everything a DevOps team needs
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Integrated tools to accelerate your delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Integration - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Integrated with your favorite tools
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Don't change your stack, improve it with InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {devopsTools.map((tool, index) => (
                <div 
                  key={tool.name} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3">{tool.logo}</div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {tool.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Don't see your tool? {' '}
                <Link href="/integrations" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                  View all integrations
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* GitOps Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
                  <CodeBracketIcon className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    GitOps Ready
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Git as the single source of truth
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Adopt GitOps without complications. Every change in your repository 
                  is automatically reflected in your infrastructure.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Automatic synchronization
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Push to deploy. It's that simple.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Rollback with git revert
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Return to any previous state instantly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Multi-environment branching
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Dev, staging and prod with branching strategies.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <Link
                  href="/resources/gitops-guide"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Read GitOps guide
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-800">
                  <div className="flex items-center gap-2 px-6 py-4 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">terminal</span>
                  </div>
                  <div className="p-8 font-mono text-sm">
                    <div className="text-slate-400">$ git add infrastructure/</div>
                    <div className="text-slate-400">$ git commit -m "Scale to 10 replicas"</div>
                    <div className="text-slate-400">$ git push origin main</div>
                    <div className="text-emerald-400 mt-6">
                      ✓ Deployment triggered<br />
                      ✓ Building infrastructure...<br />
                      ✓ Applying changes...<br />
                      ✓ Deployment successful!
                    </div>
                    <div className="text-slate-400 mt-6">
                      Time elapsed: 2m 34s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="max-w-4xl mx-auto">
                  <CommandLineIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                  
                  <blockquote className="text-3xl font-medium text-center mb-10">
                    "InfraUX completely transformed our DevOps process. 
                    We went from weekly deployments to multiple daily deployments, 
                    with total confidence and without increasing the team."
                  </blockquote>
                  
                  <div className="text-center mb-10">
                    <p className="font-bold text-2xl">Michael Fernandez</p>
                    <p className="text-emerald-100 text-lg">Head of DevOps, TechCorp</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">50x</div>
                      <p className="text-emerald-100 font-medium">more deployments</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">0</div>
                      <p className="text-emerald-100 font-medium">failed rollbacks</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">80%</div>
                      <p className="text-emerald-100 font-medium">fewer incidents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Accelerate your DevOps pipeline today
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Join teams that deploy with confidence every day
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Talk to an expert
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span className="font-medium">5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <ServerStackIcon className="h-5 w-5" />
                <span className="font-medium">Without changing your stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CpuChipIcon className="h-5 w-5" />
                <span className="font-medium">100% automated</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}