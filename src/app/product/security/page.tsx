import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  EyeIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LifebuoyIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

// SEO Metadata optimizado para Product/Security - Nivel Enterprise
export const metadata: Metadata = pageMetadata.product.security()

const securityFeatures = [
  {
    icon: LockClosedIcon,
    title: 'Data Encryption',
    description: 'All your data is encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3 protocols.',
    color: 'from-blue-500 to-sky-500'
  },
  {
    icon: KeyIcon,
    title: 'Granular Access Control',
    description: 'Use Role-Based Access Control (RBAC) to ensure users only have access to the resources they need.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Continuous Monitoring',
    description: 'We continuously monitor our systems for threats and vulnerabilities with advanced detection systems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Compliance & Certifications',
    description: 'We are compliant with SOC 2 Type II, GDPR, and ISO 27001. Reports are available upon request.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: EyeIcon,
    title: 'Audit Logs',
    description: 'A complete and immutable log of all actions taken within your organization for full transparency and accountability.',
    color: 'from-slate-500 to-slate-600'
  },
  {
    icon: LifebuoyIcon,
    title: 'Disaster Recovery',
    description: 'Robust backup and disaster recovery plans to ensure business continuity and data availability.',
    color: 'from-rose-500 to-pink-500'
  }
]

const securityCommitments = [
  'Regular penetration testing by independent third parties.',
  'Secure Software Development Lifecycle (SSDLC) practices.',
  'Vulnerability disclosure program and bug bounty.',
  'Employee security training and background checks.',
  'Data residency options in multiple geographic regions.',
  'Secure and isolated multi-tenant architecture.'
]

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-black dark:via-slate-950 dark:to-blue-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Security
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Security by
                <span className="block gradient-text-blue">
                  Design
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Your trust is our top priority. We build security into every layer of our platform
                to protect your most critical assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/security"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-sky-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Read Security Docs
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/security-center"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Visit Security Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                A Comprehensive Security Framework
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                We protect your infrastructure from every angle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

        {/* Commitments Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Commitment to Your Security
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Security is not just a feature, it's the foundation of our platform. We are committed to continuous improvement and transparency.
                </p>
                
                <ul className="space-y-4">
                  {securityCommitments.map((commitment) => (
                    <li key={commitment} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                      <span className="text-lg text-slate-700 dark:text-slate-300">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <ServerIcon className="h-40 w-40 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Build with Confidence
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Focus on innovation while we handle the security of your infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-sky-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start Building Securely
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Talk to a Security Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}