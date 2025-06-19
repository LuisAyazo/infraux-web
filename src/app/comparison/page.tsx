import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CheckIcon, 
  XMarkIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CubeIcon,
  CommandLineIcon,
  ClockIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  GlobeAltIcon,
  BoltIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX vs Terraform, Pulumi, AWS CDK | Detailed Comparison',
  description: 'Compare InfraUX with Terraform, Pulumi, AWS CDK and other IaC tools. Discover why InfraUX is the best choice for managing your cloud infrastructure visually.',
  keywords: ['InfraUX vs Terraform', 'InfraUX vs Pulumi', 'InfraUX vs AWS CDK', 'IaC comparison', 'infrastructure as code', 'DevOps tools'],
  openGraph: {
    title: 'InfraUX vs Terraform, Pulumi, AWS CDK - Comparison',
    description: 'Discover the advantages of InfraUX over other infrastructure as code tools.',
    url: 'https://infraux.com/comparison',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX vs Terraform, Pulumi, AWS CDK',
    description: 'The definitive IaC tools comparison',
  },
  alternates: {
    canonical: 'https://infraux.com/comparison',
    languages: {
      'en': 'https://infraux.com/comparison',
      'es': 'https://infraux.com/comparacion'
    }
  },
}

const competitors = [
  {
    name: 'Terraform',
    logo: '🔧',
    description: 'Declarative IaC tool by HashiCorp',
    pros: [
      'Wide industry adoption',
      'Large provider ecosystem',
      'Mature multi-cloud support',
      'Active community'
    ],
    cons: [
      'Steep learning curve',
      'Requires HCL knowledge',
      'No visual interface',
      'Complex debugging',
      'Problematic shared state'
    ]
  },
  {
    name: 'Pulumi',
    logo: '🎯',
    description: 'IaC with programming languages',
    pros: [
      'Uses familiar languages',
      'Good CI/CD integration',
      'Strong typing',
      'Programmatic flexibility'
    ],
    cons: [
      'Fewer providers than Terraform',
      'Requires programming skills',
      'No visualization',
      'More complex for non-developers',
      'Expensive license for teams'
    ]
  },
  {
    name: 'AWS CDK',
    logo: '☁️',
    description: 'AWS framework for IaC',
    pros: [
      'Native AWS integration',
      'High-level abstractions',
      'Official AWS support',
      'Good documentation'
    ],
    cons: [
      'AWS only',
      'Requires programming',
      'No visual interface',
      'Learning curve',
      'AWS lock-in'
    ]
  },
  {
    name: 'CloudFormation',
    logo: '📋',
    description: 'Native AWS service',
    pros: [
      'AWS native',
      'No additional cost',
      'Complete integration',
      'Automatic rollback'
    ],
    cons: [
      'AWS only',
      'Verbose YAML/JSON',
      'Hard to debug',
      'No native visualization',
      'Limited to AWS resources'
    ]
  }
]

const comparisonFeatures = [
  {
    category: 'User Experience',
    features: [
      { name: 'Visual drag & drop interface', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'No code required', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Real-time preview', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Real-time collaboration', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Onboarding < 5 minutes', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false }
    ]
  },
  {
    category: 'Technical Capabilities',
    features: [
      { name: 'Multi-cloud (AWS, GCP, Azure)', infraux: true, terraform: true, pulumi: true, awscdk: false, cloudformation: false },
      { name: 'Automatic IaC generation', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Import existing infrastructure', infraux: true, terraform: true, pulumi: true, awscdk: 'partial', cloudformation: 'partial' },
      { name: 'Integrated state management', infraux: true, terraform: 'manual', pulumi: true, awscdk: true, cloudformation: true },
      { name: 'Real-time validation', infraux: true, terraform: 'cli', pulumi: 'cli', awscdk: 'cli', cloudformation: false }
    ]
  },
  {
    category: 'Productivity',
    features: [
      { name: 'Pre-built templates', infraux: '100+', terraform: 'community', pulumi: 'limited', awscdk: 'patterns', cloudformation: 'samples' },
      { name: 'Integrated cost analysis', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Automatic documentation', infraux: true, terraform: false, pulumi: false, awscdk: false, cloudformation: false },
      { name: 'Visual rollback', infraux: true, terraform: 'manual', pulumi: 'manual', awscdk: 'manual', cloudformation: true },
      { name: 'Component marketplace', infraux: true, terraform: 'registry', pulumi: false, awscdk: false, cloudformation: false }
    ]
  },
  {
    category: 'Collaboration & Enterprise',
    features: [
      { name: 'Granular access control', infraux: true, terraform: 'cloud', pulumi: 'cloud', awscdk: 'iam', cloudformation: 'iam' },
      { name: 'Complete audit logs', infraux: true, terraform: 'cloud', pulumi: 'cloud', awscdk: 'cloudtrail', cloudformation: 'cloudtrail' },
      { name: 'SSO/SAML', infraux: true, terraform: 'cloud', pulumi: 'cloud', awscdk: 'iam', cloudformation: 'iam' },
      { name: 'Multiple environments', infraux: true, terraform: 'workspaces', pulumi: 'stacks', awscdk: 'stacks', cloudformation: 'stacks' },
      { name: 'Compliance (SOC2, HIPAA)', infraux: true, terraform: 'cloud', pulumi: 'cloud', awscdk: 'aws', cloudformation: 'aws' }
    ]
  }
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
    ) : (
      <XMarkIcon className="h-5 w-5 text-slate-300 dark:text-slate-600" />
    )
  }
  
  if (value === 'partial') {
    return <span className="text-sm text-amber-600 dark:text-amber-400">Partial</span>
  }
  
  if (value === 'manual' || value === 'cli') {
    return <span className="text-sm text-slate-500 dark:text-slate-400">{value}</span>
  }
  
  if (value === 'cloud' || value === 'iam' || value === 'aws' || value === 'cloudtrail') {
    return <span className="text-sm text-blue-600 dark:text-blue-400">{value}</span>
  }
  
  return <span className="text-sm text-slate-700 dark:text-slate-300">{value}</span>
}

export default function ComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <ChartBarIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Honest and transparent comparison
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                InfraUX vs
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Traditional IaC Tools
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Discover why thousands of teams are migrating to InfraUX to manage
                their cloud infrastructure visually, collaboratively, and efficiently
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Try InfraUX free
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/demos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Watch live demos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Why InfraUX is different
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <CubeIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  100% Visual
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Design your infrastructure with drag & drop. No need to learn HCL, YAML, or programming languages.
                  InfraUX generates the code for you.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <BoltIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  10x Faster
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Create and deploy infrastructure in minutes, not hours. With pre-built templates and real-time validation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <UserGroupIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Real Collaboration
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Work with your team in real-time. See changes instantly, comment and review without merge conflicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitors Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
              Comparison with popular tools
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
              We respect all these tools and use them internally. 
              InfraUX doesn't replace them, it complements them with a visual layer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {competitors.map((competitor) => (
                <div key={competitor.name} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{competitor.logo}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {competitor.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {competitor.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                        <CheckIcon className="h-5 w-5" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {competitor.pros.map((pro, index) => (
                          <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                        <XMarkIcon className="h-5 w-5" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {competitor.cons.map((con, index) => (
                          <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Detailed feature comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 min-w-[120px]">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">InfraUX</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400">Recommended</div>
                    </th>
                    <th className="text-center py-4 px-6 min-w-[120px]">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Terraform</div>
                    </th>
                    <th className="text-center py-4 px-6 min-w-[120px]">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Pulumi</div>
                    </th>
                    <th className="text-center py-4 px-6 min-w-[120px]">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">AWS CDK</div>
                    </th>
                    <th className="text-center py-4 px-6 min-w-[120px]">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">CloudFormation</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category) => (
                    <>
                      <tr key={category.category} className="bg-slate-100 dark:bg-slate-800">
                        <td colSpan={6} className="py-3 px-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature) => (
                        <tr key={feature.name} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="py-4 px-6 text-sm text-slate-700 dark:text-slate-300">
                            {feature.name}
                          </td>
                          <td className="text-center py-4 px-6">
                            <FeatureValue value={feature.infraux} />
                          </td>
                          <td className="text-center py-4 px-6">
                            <FeatureValue value={feature.terraform} />
                          </td>
                          <td className="text-center py-4 px-6">
                            <FeatureValue value={feature.pulumi} />
                          </td>
                          <td className="text-center py-4 px-6">
                            <FeatureValue value={feature.awscdk} />
                          </td>
                          <td className="text-center py-4 px-6">
                            <FeatureValue value={feature.cloudformation} />
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Migration Path */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Already using Terraform, Pulumi, or CDK?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                InfraUX imports your existing infrastructure and generates compatible code.
                No need to migrate, you can use both tools together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
                >
                  Import my infrastructure
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/docs/migration"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition-colors"
                >
                  View migration guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Join the visual infrastructure revolution
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Thousands of teams already trust InfraUX to manage their infrastructure more efficiently
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start free trial
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Request personalized demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}