import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Resources | Guides, Tutorials and InfraUX Documentation',
  description: 'InfraUX resource center: detailed guides, video tutorials, downloadable templates, webinars and best practices for managing your cloud infrastructure.',
  keywords: ['InfraUX resources', 'DevOps guides', 'infrastructure tutorials', 'IaC templates', 'cloud documentation', 'webinars', 'best practices'],
  openGraph: {
    title: 'Resource Center - InfraUX',
    description: 'Everything you need to master visual cloud infrastructure management.',
    url: 'https://infraux.com/resources',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Resources - Guides and Tutorials',
    description: 'Learn to manage your cloud infrastructure visually',
  },
  alternates: {
    canonical: 'https://infraux.com/resources',
    languages: {
      'en': 'https://infraux.com/resources',
      'es': 'https://infraux.com/recursos'
    }
  },
}

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
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Learning center
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Resources to master
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  visual infrastructure
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Everything you need to learn, implement and optimize
                your cloud infrastructure with InfraUX
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <BookOpenIcon className="h-5 w-5" />
                  Explore documentation
                </Link>
                <Link
                  href="#featured"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  View featured resources
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section id="featured" className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Featured resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredResources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {resource.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                        {resource.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
                    <div className="flex items-center justify-center">
                      <AcademicCapIcon className="h-24 w-24 text-indigo-300 dark:text-indigo-700" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                      {resource.duration && (
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4" />
                          {resource.duration}
                        </div>
                      )}
                      {resource.modules && (
                        <div className="flex items-center gap-2">
                          <BookOpenIcon className="h-4 w-4" />
                          {resource.modules} modules
                        </div>
                      )}
                      {resource.students && (
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4" />
                          {resource.students} students
                        </div>
                      )}
                      {resource.certified && (
                        <div className="flex items-center gap-2">
                          <AcademicCapIcon className="h-4 w-4" />
                          {resource.certified} certified
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        {resourceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <section key={category.id} className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-12 w-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.link}
                      className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                          {resource.type}
                        </span>
                        {'level' in resource && resource.level && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {resource.level}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
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
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Latest blog posts
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                View all
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.link}
                  className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
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
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <NewspaperIcon className="h-12 w-12 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">
                Stay updated
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get the latest guides, tutorials and best practices
                delivered to your inbox every week
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="mt-4 text-sm text-indigo-200">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}