import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CodeBracketSquareIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CommandLineIcon,
  EyeIcon,
  BoltIcon,
  PuzzlePieceIcon,
  CloudIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'

// SEO Metadata optimizado para Product/IAC - Nivel Enterprise
export const metadata: Metadata = pageMetadata.product.iac()

const features = [
  {
    icon: CodeBracketSquareIcon,
    title: 'Multi-Provider Generation',
    description: 'Generate code for Terraform, Pulumi, CloudFormation, Bicep, and more. Choose the one that best fits your stack.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: ArrowPathIcon,
    title: 'Bidirectional Sync',
    description: 'Import your existing IaC code to visualize and modify it. Changes are reflected in both the code and the diagram.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: EyeIcon,
    title: 'Live Code Preview',
    description: 'See the generated code in real-time as you design your infrastructure in the visual editor.',
    color: 'from-sky-500 to-cyan-500'
  },
  {
    icon: BoltIcon,
    title: 'Best Practices Built-in',
    description: 'The generated code follows industry best practices for security, performance, and cost-efficiency.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Modules and Abstractions',
    description: 'Create and reuse your own IaC modules visually, promoting consistency and efficiency.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Analysis (SAST)',
    description: 'Scan your IaC code for vulnerabilities before they reach production.',
    color: 'from-blue-500 to-indigo-500'
  }
]

const iacCapabilities = [
  'Support for variables and outputs',
  'Integrated state management',
  'Drift detection for unmanaged changes',
  'Integration with version control systems (Git)',
  'Visual execution plans (Visual Plan)',
  'Real-time syntax and structure validation',
  'Code generation for multiple environments (dev, prod)',
  'Extensible with custom providers'
]

export default function IaCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/20 dark:from-black dark:via-slate-950 dark:to-orange-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <CodeBracketSquareIcon className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Infrastructure as Code
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                From diagram to code,
                <span className="block gradient-text-orange">
                  automatically
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Generate high-quality IaC code from your visual designs.
                Accelerate your deployments and eliminate manual errors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Generate My First Code
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/docs/iac"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="p-4 bg-slate-100 dark:bg-slate-800/50">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">visual-diagram.json</p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-8">
                    <CubeTransparentIcon className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="p-4 bg-slate-100 dark:bg-slate-800/50">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">main.tf</p>
                  </div>
                  <div className="aspect-video bg-[#0B0F13] p-6">
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
                      <code>
                        <span className="text-purple-400">resource</span> <span className="text-cyan-400">"aws_instance"</span> <span className="text-yellow-400">"web"</span> &#123;{"\n"}
                        {"  "}<span className="text-red-400">ami</span>           = <span className="text-green-400">"ami-0c55b159cbfafe1f0"</span>{"\n"}
                        {"  "}<span className="text-red-400">instance_type</span> = <span className="text-green-400">"t2.micro"</span>{"\n"}
                        {"\n"}
                        {"  "}<span className="text-red-400">tags</span> = &#123;{"\n"}
                        {"    "}<span className="text-blue-400">Name</span> = <span className="text-green-400">"HelloWorld"</span>{"\n"}
                        {"  "}&#125;{"\n"}
                        &#125;
                      </code>
                    </pre>
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
                A Complete IaC Workflow
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                From conception to production, all in one place.
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
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

        {/* Capabilities List */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Power and Flexibility for Experts
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Don't sacrifice control for simplicity. InfraUX gives you the best of both worlds.
                </p>
                
                <ul className="space-y-4">
                  {iacCapabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl" />
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
              Transform How You Work with IaC
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Start building visually and let InfraUX handle the code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start Building
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/product/editor"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Explore the Visual Editor
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}