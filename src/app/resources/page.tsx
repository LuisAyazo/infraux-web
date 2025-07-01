import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  BookOpenIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  NewspaperIcon,
  MicrophoneIcon,
  DocumentArrowDownIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  TagIcon,
  CalendarIcon,
  UserIcon,
  PlayIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.resources()

const resourceCategories = [
  {
    id: 'guides',
    title: 'Detailed Guides',
    description: 'Step-by-step documentation to master InfraUX',
    icon: BookOpenIcon,
    color: 'from-blue-500 to-cyan-500',
    resources: [
      {
        title: 'Quick Start Guide',
        description: 'Learn the basics of InfraUX in 15 minutes',
        type: 'Guide',
        readTime: '15 min',
        level: 'Beginner',
        link: '/docs/quickstart'
      },
      {
        title: 'Migration from Terraform',
        description: 'How to import your existing Terraform infrastructure',
        type: 'Guide',
        readTime: '30 min',
        level: 'Intermediate',
        link: '/docs/migration/terraform'
      },
      {
        title: 'Security Best Practices',
        description: 'Configure your infrastructure following security standards',
        type: 'Guide',
        readTime: '45 min',
        level: 'Advanced',
        link: '/docs/security-best-practices'
      },
      {
        title: 'Cost Optimization',
        description: 'Strategies to reduce costs on AWS, GCP and Azure',
        type: 'Guide',
        readTime: '25 min',
        level: 'Intermediate',
        link: '/docs/cost-optimization'
      }
    ]
  },
  {
    id: 'tutorials',
    title: 'Video Tutorials',
    description: 'Learn by watching how it\'s done',
    icon: VideoCameraIcon,
    color: 'from-purple-500 to-pink-500',
    resources: [
      {
        title: 'Your First App in InfraUX',
        description: 'Deploy a complete application from scratch',
        type: 'Video',
        duration: '20 min',
        level: 'Beginner',
        link: '/tutorials/first-app'
      },
      {
        title: 'Multi-Cloud Configuration',
        description: 'Manage resources across AWS, GCP and Azure simultaneously',
        type: 'Video',
        duration: '35 min',
        level: 'Advanced',
        link: '/tutorials/multi-cloud'
      },
      {
        title: 'CI/CD with InfraUX',
        description: 'Integrate InfraUX into your deployment pipeline',
        type: 'Video',
        duration: '40 min',
        level: 'Intermediate',
        link: '/tutorials/cicd-integration'
      },
      {
        title: 'Team Collaboration',
        description: 'Work with your team in real-time',
        type: 'Video',
        duration: '15 min',
        level: 'Beginner',
        link: '/tutorials/team-collaboration'
      }
    ]
  },
  {
    id: 'templates',
    title: 'Downloadable Templates',
    description: 'Pre-designed architectures ready to use',
    icon: PuzzlePieceIcon,
    color: 'from-green-500 to-emerald-500',
    resources: [
      {
        title: 'MEAN Stack on AWS',
        description: 'MongoDB, Express, Angular, Node.js with auto-scaling',
        type: 'Template',
        category: 'Full Stack',
        downloads: '2.3k',
        link: '/templates/mean-stack-aws'
      },
      {
        title: 'Multi-Region Kubernetes',
        description: 'K8s cluster with high availability across multiple regions',
        type: 'Template',
        category: 'Containers',
        downloads: '1.8k',
        link: '/templates/k8s-multi-region'
      },
      {
        title: 'Data Lake on GCP',
        description: 'Complete architecture for big data analytics',
        type: 'Template',
        category: 'Data',
        downloads: '1.2k',
        link: '/templates/gcp-data-lake'
      },
      {
        title: 'Serverless API Gateway',
        description: 'Serverless REST API with Lambda and DynamoDB',
        type: 'Template',
        category: 'Serverless',
        downloads: '3.1k',
        link: '/templates/serverless-api'
      }
    ]
  },
  {
    id: 'webinars',
    title: 'Webinars & Workshops',
    description: 'Live sessions with experts',
    icon: MicrophoneIcon,
    color: 'from-indigo-500 to-purple-500',
    resources: [
      {
        title: 'InfraUX for Beginners',
        description: 'Complete introduction to the platform',
        type: 'Webinar',
        date: 'Every Tuesday',
        duration: '1 hour',
        link: '/webinars/beginners'
      },
      {
        title: 'Enterprise Architectures',
        description: 'Design infrastructure for large organizations',
        type: 'Workshop',
        date: 'June 28th',
        duration: '2 hours',
        link: '/webinars/enterprise'
      },
      {
        title: 'FinOps with InfraUX',
        description: 'Optimize costs and manage budgets',
        type: 'Webinar',
        date: 'July 5th',
        duration: '45 min',
        link: '/webinars/finops'
      },
      {
        title: 'Q&A with the Team',
        description: 'Ask questions directly to InfraUX creators',
        type: 'Live Q&A',
        date: 'Last Friday of month',
        duration: '1 hour',
        link: '/webinars/qa'
      }
    ]
  }
]

const featuredResources = [
  {
    title: 'Complete Course: Zero to Expert',
    description: 'Master InfraUX with our 8-module course that will take you from basic concepts to advanced architectures.',
    image: '/resources/course-hero.jpg',
    duration: '8 hours',
    modules: 8,
    students: '5,000+',
    link: '/courses/zero-to-expert',
    badge: 'NEW'
  },
  {
    title: 'InfraUX Professional Certification',
    description: 'Validate your knowledge and stand out in the market with our official certification.',
    image: '/resources/certification.jpg',
    duration: '2h exam',
    price: '$149',
    certified: '1,200+',
    link: '/certification',
    badge: 'POPULAR'
  }
]

const blogPosts = [
  {
    title: '10 Common Cloud Infrastructure Mistakes (and how to avoid them)',
    excerpt: 'Learn from the most frequent mistakes teams make when managing their infrastructure.',
    author: 'Ana García',
    date: 'Jun 15, 2025',
    readTime: '8 min',
    link: '/blog/common-cloud-mistakes'
  },
  {
    title: 'The Future of Infrastructure: Visual, Collaborative and Automated',
    excerpt: 'We explore the trends that are transforming cloud infrastructure management.',
    author: 'Carlos Mendoza',
    date: 'Jun 10, 2025',
    readTime: '12 min',
    link: '/blog/future-of-infrastructure'
  },
  {
    title: 'Case Study: How TechCorp Reduced Costs by 45%',
    excerpt: 'A detailed analysis of how a company optimized their infrastructure with InfraUX.',
    author: 'Laura Jiménez',
    date: 'Jun 5, 2025',
    readTime: '15 min',
    link: '/blog/techcorp-case-study'
  }
]

export default function ResourcesPage() {
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
                  Learning center
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Resources to master
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  visual infrastructure
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Everything you need to learn, implement and optimize
                your cloud infrastructure with InfraUX
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/documentation"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpenIcon className="h-6 w-6" />
                  Explore documentation
                </Link>
                <Link
                  href="#featured"
                  className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
                >
                  View featured resources
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section id="featured" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 fade-in">
              Featured resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="group relative glass-premium rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {resource.badge && (
                    <div className="absolute top-6 right-6 z-10">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
                        {resource.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20">
                    <div className="flex items-center justify-center p-16">
                      <AcademicCapIcon className="h-32 w-32 text-emerald-300 dark:text-emerald-700" />
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                      {resource.duration && (
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-5 w-5" />
                          {resource.duration}
                        </div>
                      )}
                      {resource.modules && (
                        <div className="flex items-center gap-2">
                          <BookOpenIcon className="h-5 w-5" />
                          {resource.modules} modules
                        </div>
                      )}
                      {resource.students && (
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-5 w-5" />
                          {resource.students} students
                        </div>
                      )}
                      {resource.certified && (
                        <div className="flex items-center gap-2">
                          <AcademicCapIcon className="h-5 w-5" />
                          {resource.certified} certified
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-8 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        {resourceCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <section key={category.id} className={`py-24 ${categoryIndex % 2 === 0 ? '' : 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black'}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center gap-4 mb-12 fade-in">
                  <div className={`h-14 w-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, index) => (
                    <Link
                      key={resource.title}
                      href={resource.link}
                      className="group glass-premium rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                          {resource.type}
                        </span>
                        {'level' in resource && resource.level && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {resource.level}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        {'readTime' in resource && resource.readTime && (
                          <div className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {resource.readTime}
                          </div>
                        )}
                        {'duration' in resource && resource.duration && (
                          <div className="flex items-center gap-1">
                            <PlayIcon className="h-4 w-4" />
                            {resource.duration}
                          </div>
                        )}
                        {'downloads' in resource && resource.downloads && (
                          <div className="flex items-center gap-1">
                            <ArrowDownTrayIcon className="h-4 w-4" />
                            {resource.downloads}
                          </div>
                        )}
                        {'date' in resource && resource.date && (
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {resource.date}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Blog Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white fade-in">
                Latest blog posts
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-3 transition-all fade-in"
              >
                View all
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.title}
                  href={post.link}
                  className="group glass-premium rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-16 text-center text-white shadow-premium-lg">
                <NewspaperIcon className="h-16 w-16 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Stay updated
                </h2>
                <p className="text-xl text-emerald-50 mb-10 font-medium max-w-2xl mx-auto">
                  Get the latest guides, tutorials and best practices
                  delivered to your inbox every week
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="mt-6 text-sm text-emerald-100">
                  No spam. Unsubscribe anytime.
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