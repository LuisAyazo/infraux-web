import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  PuzzlePieceIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = pageMetadata.product.integrations()

const categories = [
  { 
    name: 'Cloud Providers', 
    icon: CloudIcon,
    logos: ['aws-light.svg', 'gcp-light.svg', 'azure-light.svg', 'digitalocean-light.svg', 'oracle-light.svg', 'alibaba-light.svg']
  },
  { 
    name: 'Version Control', 
    icon: CodeBracketSquareIcon,
    logos: ['github-light.svg', 'gitlab-light.svg', 'bitbucket-light.svg']
  },
  { 
    name: 'CI/CD', 
    icon: BoltIcon,
    logos: ['jenkins-light.svg', 'circleci-light.svg', 'travisci-light.svg', 'githubactions-light.svg']
  },
  { 
    name: 'Monitoring & Alerting', 
    icon: BellIcon,
    logos: ['datadog-light.svg', 'newrelic-light.svg', 'prometheus-light.svg', 'grafana-light.svg']
  },
  { 
    name: 'Communication & Collaboration', 
    icon: ChatBubbleLeftRightIcon,
    logos: ['slack-light.svg', 'msteams-light.svg', 'jira-light.svg', 'discord-light.svg']
  },
  { 
    name: 'Security', 
    icon: ShieldCheckIcon,
    logos: ['snyk-light.svg', 'sonarqube-light.svg', 'vault-light.svg']
  },
]

const integrationBenefits = [
  'Automate your deployment pipelines from design to production.',
  'Keep your diagrams and code perfectly in sync with Git.',
  'Receive deployment notifications and status changes in Slack or Teams.',
  'Visualize infrastructure performance metrics directly within InfraUX.',
  'Create and manage Jira issues from infrastructure alerts.',
  'Ensure your infrastructure complies with your company\'s security policies.'
]

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-black dark:via-slate-950 dark:to-purple-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <PuzzlePieceIcon className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Integrations
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Connect your stack,
                <span className="block gradient-text-purple">
                  supercharge your workflow
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                InfraUX integrates natively with the tools you already use and love.
                Automate, collaborate, and deploy faster than ever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/integrations"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Browse Integrations
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/contact?request=integration"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Request an Integration
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                A Connected Ecosystem
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Deep integrations with the leaders in every category.
              </p>
            </div>

            <div className="space-y-16">
              {categories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 150}ms` }}>
                    <div className="flex items-center gap-4 mb-8">
                      <Icon className="h-8 w-8 text-purple-500" />
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{category.name}</h3>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
                      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />
                      <div className="flex items-center gap-12 overflow-x-auto py-4 no-scrollbar">
                        {category.logos.map(logo => (
                          <img key={logo} src={`/logos/${logo}`} alt={logo.split('.')[0]} className="h-12 dark:invert" />
                        ))}
                        {/* Duplicate for infinite scroll effect */}
                        {category.logos.map(logo => (
                          <img key={`${logo}-2`} src={`/logos/${logo}`} alt={logo.split('.')[0]} className="h-12 dark:invert" />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Automate Your DevOps Workflow
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Connect InfraUX to your ecosystem to eliminate manual tasks, reduce errors, and accelerate value delivery.
                </p>
                
                <ul className="space-y-4">
                  {integrationBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-purple-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <PuzzlePieceIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <CodeBracketSquareIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  Open API for Custom Integrations
                </h2>
                <p className="text-xl lg:text-2xl text-purple-50 mb-10 max-w-3xl mx-auto font-medium">
                  Can't find the integration you need? Use our REST API to build it yourself. The limit is your imagination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs/api"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    API Documentation
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Ready to connect your world?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Start using InfraUX and discover a new level of automation and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start for Free
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