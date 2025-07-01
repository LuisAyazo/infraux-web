import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  RocketLaunchIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CommandLineIcon,
  EyeIcon,
  BoltIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

// SEO Metadata optimizado para Product/Deployment - Nivel Enterprise
export const metadata: Metadata = pageMetadata.product.deployment()

const features = [
  {
    icon: RocketLaunchIcon,
    title: 'One-Click Deployments',
    description: 'Deploy your entire infrastructure stack to AWS, GCP, or Azure with a single click, directly from the UI.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: CloudIcon,
    title: 'Environment Management',
    description: 'Easily manage multiple environments like development, staging, and production with separate configurations.',
    color: 'from-sky-500 to-cyan-500'
  },
  {
    icon: EyeIcon,
    title: 'Deployment Previews',
    description: 'Preview all changes that will be applied to your infrastructure before confirming the deployment.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: ArrowPathIcon,
    title: 'Instant Rollbacks',
    description: 'Something went wrong? Roll back to a previous stable version of your infrastructure instantly.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Credentials Management',
    description: 'Securely store and manage your cloud provider credentials and secrets using our integrated vault.',
    color: 'from-blue-500 to-sky-500'
  },
  {
    icon: BoltIcon,
    title: 'Integrated CI/CD Pipeline',
    description: 'A complete CI/CD pipeline out-of-the-box. Connect your Git repository and automate your deployments.',
    color: 'from-rose-500 to-pink-500'
  }
]

const deploymentBenefits = [
  'Reduce deployment times from hours to minutes.',
  'Eliminate human error from manual deployment processes.',
  'Increase development velocity and release frequency.',
  'Gain full visibility into your deployment history and status.',
  'Ensure consistency across all your environments.',
  'Empower your team to deploy safely and confidently.'
]

export default function DeploymentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/20 dark:from-black dark:via-slate-950 dark:to-green-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <RocketLaunchIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Deployments
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Deploy with
                <span className="block gradient-text-green">
                  Confidence
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Go from visual design to live infrastructure in minutes.
                Our automated deployment pipeline makes releasing fast, safe, and reliable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Deploy Your First App
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/docs/deployments"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="p-4 bg-slate-100 dark:bg-slate-800/50">
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">Deployment Pipeline</p>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                    <div className="text-green-500 flex flex-col items-center gap-2">
                      <CheckCircleIcon className="h-10 w-10" />
                      <span>Plan</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700 mx-4" />
                    <div className="text-green-500 flex flex-col items-center gap-2">
                      <CheckCircleIcon className="h-10 w-10" />
                      <span>Apply</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700 mx-4" />
                    <div className="flex flex-col items-center gap-2">
                      <RocketLaunchIcon className="h-10 w-10" />
                      <span>Deploy</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-700 mx-4" />
                    <div className="flex flex-col items-center gap-2">
                      <BoltIcon className="h-10 w-10" />
                      <span>Monitor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                A Powerful and Flexible Pipeline
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Everything you need for modern, automated application delivery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Ship Faster and More Reliably
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Automate your path to production and empower your team to deliver value to customers, faster.
                </p>
                
                <ul className="space-y-4">
                  {deploymentBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <CommandLineIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Ready to Streamline Your Deployments?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Join the teams that are building and deploying faster with InfraUX.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start Deploying for Free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}