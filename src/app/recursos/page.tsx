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
  title: 'Recursos | Guías, Tutoriales y Documentación de InfraUX',
  description: 'Centro de recursos de InfraUX: guías detalladas, tutoriales en video, plantillas descargables, webinars y mejores prácticas para gestionar tu infraestructura cloud.',
  keywords: ['recursos InfraUX', 'guías DevOps', 'tutoriales infraestructura', 'plantillas IaC', 'documentación cloud', 'webinars', 'mejores prácticas'],
  openGraph: {
    title: 'Centro de Recursos - InfraUX',
    description: 'Todo lo que necesitas para dominar la gestión visual de infraestructura cloud.',
    url: 'https://infraux.com/recursos',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos InfraUX - Guías y Tutoriales',
    description: 'Aprende a gestionar tu infraestructura cloud de forma visual',
  },
  alternates: {
    canonical: 'https://infraux.com/recursos',
    languages: {
      'es': 'https://infraux.com/recursos',
      'en': 'https://infraux.com/resources'
    }
  },
}

const resourceCategories = [
  {
    id: 'guides',
    title: 'Guías Detalladas',
    description: 'Documentación paso a paso para dominar InfraUX',
    icon: BookOpenIcon,
    color: 'from-blue-500 to-cyan-500',
    resources: [
      {
        title: 'Guía de Inicio Rápido',
        description: 'Aprende los conceptos básicos de InfraUX en 15 minutos',
        type: 'Guía',
        readTime: '15 min',
        level: 'Principiante',
        link: '/docs/quickstart'
      },
      {
        title: 'Migración desde Terraform',
        description: 'Cómo importar tu infraestructura Terraform existente',
        type: 'Guía',
        readTime: '30 min',
        level: 'Intermedio',
        link: '/docs/migration/terraform'
      },
      {
        title: 'Mejores Prácticas de Seguridad',
        description: 'Configura tu infraestructura siguiendo estándares de seguridad',
        type: 'Guía',
        readTime: '45 min',
        level: 'Avanzado',
        link: '/docs/security-best-practices'
      },
      {
        title: 'Optimización de Costos',
        description: 'Estrategias para reducir costos en AWS, GCP y Azure',
        type: 'Guía',
        readTime: '25 min',
        level: 'Intermedio',
        link: '/docs/cost-optimization'
      }
    ]
  },
  {
    id: 'tutorials',
    title: 'Tutoriales en Video',
    description: 'Aprende viendo cómo se hace',
    icon: VideoCameraIcon,
    color: 'from-purple-500 to-pink-500',
    resources: [
      {
        title: 'Tu Primera Aplicación en InfraUX',
        description: 'Despliega una aplicación completa desde cero',
        type: 'Video',
        duration: '20 min',
        level: 'Principiante',
        link: '/tutorials/first-app'
      },
      {
        title: 'Configuración Multi-Cloud',
        description: 'Gestiona recursos en AWS, GCP y Azure simultáneamente',
        type: 'Video',
        duration: '35 min',
        level: 'Avanzado',
        link: '/tutorials/multi-cloud'
      },
      {
        title: 'CI/CD con InfraUX',
        description: 'Integra InfraUX en tu pipeline de deployment',
        type: 'Video',
        duration: '40 min',
        level: 'Intermedio',
        link: '/tutorials/cicd-integration'
      },
      {
        title: 'Colaboración en Equipo',
        description: 'Trabaja con tu equipo en tiempo real',
        type: 'Video',
        duration: '15 min',
        level: 'Principiante',
        link: '/tutorials/team-collaboration'
      }
    ]
  },
  {
    id: 'templates',
    title: 'Plantillas Descargables',
    description: 'Arquitecturas pre-diseñadas listas para usar',
    icon: PuzzlePieceIcon,
    color: 'from-green-500 to-emerald-500',
    resources: [
      {
        title: 'Stack MEAN en AWS',
        description: 'MongoDB, Express, Angular, Node.js con auto-scaling',
        type: 'Plantilla',
        category: 'Full Stack',
        downloads: '2.3k',
        link: '/templates/mean-stack-aws'
      },
      {
        title: 'Kubernetes Multi-Region',
        description: 'Cluster K8s con alta disponibilidad en múltiples regiones',
        type: 'Plantilla',
        category: 'Containers',
        downloads: '1.8k',
        link: '/templates/k8s-multi-region'
      },
      {
        title: 'Data Lake en GCP',
        description: 'Arquitectura completa para análisis de big data',
        type: 'Plantilla',
        category: 'Data',
        downloads: '1.2k',
        link: '/templates/gcp-data-lake'
      },
      {
        title: 'Serverless API Gateway',
        description: 'API REST serverless con Lambda y DynamoDB',
        type: 'Plantilla',
        category: 'Serverless',
        downloads: '3.1k',
        link: '/templates/serverless-api'
      }
    ]
  },
  {
    id: 'webinars',
    title: 'Webinars y Workshops',
    description: 'Sesiones en vivo con expertos',
    icon: MicrophoneIcon,
    color: 'from-indigo-500 to-purple-500',
    resources: [
      {
        title: 'InfraUX para Principiantes',
        description: 'Introducción completa a la plataforma',
        type: 'Webinar',
        date: 'Todos los martes',
        duration: '1 hora',
        link: '/webinars/beginners'
      },
      {
        title: 'Arquitecturas Enterprise',
        description: 'Diseña infraestructura para grandes organizaciones',
        type: 'Workshop',
        date: '28 de Junio',
        duration: '2 horas',
        link: '/webinars/enterprise'
      },
      {
        title: 'FinOps con InfraUX',
        description: 'Optimiza costos y gestiona presupuestos',
        type: 'Webinar',
        date: '5 de Julio',
        duration: '45 min',
        link: '/webinars/finops'
      },
      {
        title: 'Q&A con el Equipo',
        description: 'Pregunta directamente a los creadores de InfraUX',
        type: 'Live Q&A',
        date: 'Último viernes del mes',
        duration: '1 hora',
        link: '/webinars/qa'
      }
    ]
  }
]

const featuredResources = [
  {
    title: 'Curso Completo: De Cero a Experto',
    description: 'Domina InfraUX con nuestro curso de 8 módulos que te llevará desde los conceptos básicos hasta arquitecturas avanzadas.',
    image: '/resources/course-hero.jpg',
    duration: '8 horas',
    modules: 8,
    students: '5,000+',
    link: '/courses/zero-to-expert',
    badge: 'NUEVO'
  },
  {
    title: 'Certificación InfraUX Professional',
    description: 'Valida tus conocimientos y destaca en el mercado con nuestra certificación oficial.',
    image: '/resources/certification.jpg',
    duration: 'Examen 2h',
    price: '$149',
    certified: '1,200+',
    link: '/certification',
    badge: 'POPULAR'
  }
]

const blogPosts = [
  {
    title: '10 Errores Comunes en Infraestructura Cloud (y cómo evitarlos)',
    excerpt: 'Aprende de los errores más frecuentes que cometen los equipos al gestionar su infraestructura.',
    author: 'Ana García',
    date: '15 Jun 2025',
    readTime: '8 min',
    link: '/blog/common-cloud-mistakes'
  },
  {
    title: 'El Futuro de la Infraestructura: Visual, Colaborativa y Automatizada',
    excerpt: 'Exploramos las tendencias que están transformando la gestión de infraestructura cloud.',
    author: 'Carlos Mendoza',
    date: '10 Jun 2025',
    readTime: '12 min',
    link: '/blog/future-of-infrastructure'
  },
  {
    title: 'Caso de Estudio: Cómo TechCorp Redujo Costos en 45%',
    excerpt: 'Un análisis detallado de cómo una empresa logró optimizar su infraestructura con InfraUX.',
    author: 'Laura Jiménez',
    date: '5 Jun 2025',
    readTime: '15 min',
    link: '/blog/techcorp-case-study'
  }
]

export default function RecursosPage() {
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
                  Centro de aprendizaje
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Recursos para dominar
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  la infraestructura visual
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Todo lo que necesitas para aprender, implementar y optimizar
                tu infraestructura cloud con InfraUX
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <BookOpenIcon className="h-5 w-5" />
                  Explorar documentación
                </Link>
                <Link
                  href="#featured"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver recursos destacados
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
              Recursos destacados
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
                          {resource.modules} módulos
                        </div>
                      )}
                      {resource.students && (
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4" />
                          {resource.students} estudiantes
                        </div>
                      )}
                      {resource.certified && (
                        <div className="flex items-center gap-2">
                          <AcademicCapIcon className="h-4 w-4" />
                          {resource.certified} certificados
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                      Más información
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
                Últimos artículos del blog
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                Ver todos
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
                Mantente actualizado
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Recibe las últimas guías, tutoriales y mejores prácticas
                directamente en tu inbox cada semana
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Suscribirse
                </button>
              </form>
              
              <p className="mt-4 text-sm text-indigo-200">
                Sin spam. Puedes cancelar cuando quieras.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}