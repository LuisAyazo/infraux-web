import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  SparklesIcon,
  CursorArrowRaysIcon,
  CubeIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  CommandLineIcon,
  EyeIcon,
  BoltIcon,
  PuzzlePieceIcon,
  CloudIcon,
  ShieldCheckIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Visual Infrastructure Editor | InfraUX',
  description: 'Design your cloud infrastructure with drag & drop. No code, no YAML, no complexity. Compatible with AWS, GCP and Azure.',
  keywords: ['visual editor', 'drag and drop', 'visual infrastructure', 'no-code infrastructure', 'cloud design'],
  openGraph: {
    title: 'Visual Editor - InfraUX',
    description: 'The most intuitive way to design cloud infrastructure',
    url: 'https://infraux.com/product/editor',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const features = [
  {
    icon: CursorArrowRaysIcon,
    title: 'Intuitive Drag & Drop',
    description: 'Drag cloud components and connect them visually. As easy as making a diagram.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CloudIcon,
    title: 'Native Multi-Cloud',
    description: 'Pre-configured components for AWS, GCP and Azure. Switch providers with one click.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: EyeIcon,
    title: 'Real-Time Preview',
    description: 'See exactly how your infrastructure will look before deploying.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BoltIcon,
    title: 'Instant Validation',
    description: 'Detect configuration errors while designing. No surprises in production.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Reusable Components',
    description: 'Create your own components and reuse them across all your projects.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Automatic Documentation',
    description: 'Generate visual documentation of your architecture automatically.',
    color: 'from-pink-500 to-rose-500'
  }
]

const editorCapabilities = [
  'Over 200 pre-configured cloud components',
  'Smart connections between resources',
  'Visual grouping and organization',
  'Smooth zoom and navigation',
  'Quick component search',
  'Unlimited undo/redo',
  'Export in multiple formats',
  'Dark and light mode'
]

export default function EditorPage() {
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
                <SparklesIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Visual Editor
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Design infrastructure
                <span className="block gradient-text-emerald">
                  without writing code
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                The most powerful visual editor for creating and managing your cloud infrastructure. 
                Drag, connect and deploy. It's that simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demos/visual-builder"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <PlayIcon className="h-6 w-6" />
                  Watch live demo
                </Link>
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Try free
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                  <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 text-center text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-black text-slate-900 dark:text-white">Infra</span>
                        <span className="font-black text-emerald-500">UX</span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium"> - Visual Editor</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <CubeIcon className="h-32 w-32 text-slate-300 dark:text-slate-600 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Interactive editor demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Everything you need to design
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Professional tools with the simplicity you deserve
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

        {/* Capabilities List - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  An editor that thinks like you
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Designed by engineers for engineers. Every detail is crafted 
                  to make your work more efficient and enjoyable.
                </p>
                
                <ul className="space-y-4">
                  {editorCapabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <CommandLineIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <ShieldCheckIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  Perfect integration with your workflow
                </h2>
                <p className="text-xl lg:text-2xl text-emerald-50 mb-10 max-w-3xl mx-auto font-medium">
                  The editor integrates with your favorite tools.
                  Export to Terraform, connect with Git, deploy with one click.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/product/iac"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    View code generation
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/product/deployment"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-2xl hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    View deployment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Start designing visually today
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Join thousands of teams already designing their infrastructure visually
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Request demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}