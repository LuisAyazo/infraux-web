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

export const metadata: Metadata = pageMetadata.resourcesSpanish()

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
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <SparklesIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Centro de aprendizaje
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Recursos para dominar
                <span className="block gradient-text-emerald">
                  la infraestructura visual
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up animation-delay-200">
                Todo lo que necesitas para aprender, implementar y optimizar
                tu infraestructura cloud con InfraUX
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                <Link
                  href="/documentacion"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  <BookOpenIcon className="h-6 w-6" />
                  Explorar documentación
                </Link>
                <Link
                  href="#featured"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover-lift-premium transition-all duration-300"
                >
                  Ver recursos destacados
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources - Premium Style */}
        <section id="featured" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
              Recursos destacados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={resource.link}
                  className="group relative hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-premium border border-slate-200 dark:border-slate-800">
                    {resource.badge && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
                          {resource.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-12">
                      <div className="flex items-center justify-center">
                        <div className="p-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <AcademicCapIcon className="h-20 w-20 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-10">
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {resource.duration && (
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-5 w-5 text-emerald-500" />
                            {resource.duration}
                          </div>
                        )}
                        {resource.modules && (
                          <div className="flex items-center gap-2">
                            <BookOpenIcon className="h-5 w-5 text-emerald-500" />
                            {resource.modules} módulos
                          </div>
                        )}
                        {resource.students && (
                          <div className="flex items-center gap-2">
                            <UserIcon className="h-5 w-5 text-emerald-500" />
                            {resource.students} estudiantes
                          </div>
                        )}
                        {resource.certified && (
                          <div className="flex items-center gap-2">
                            <AcademicCapIcon className="h-5 w-5 text-emerald-500" />
                            {resource.certified} certificados
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-8 flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-lg group-hover:gap-4 transition-all">
                        Más información
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories - Premium Style */}
        {resourceCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <section key={category.id} className={`py-24 ${categoryIndex % 2 === 1 ? 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black' : ''}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.resources.map((resource, index) => (
                    <Link
                      key={resource.title}
                      href={resource.link}
                      className="group hover-lift-premium animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                              {resource.type}
                            </span>
                            {'level' in resource && resource.level && (
                              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                {resource.level}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {resource.title}
                          </h3>
                          
                          <p className="text-slate-600 dark:text-slate-400 mb-6">
                            {resource.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                            {'readTime' in resource && resource.readTime && (
                              <div className="flex items-center gap-2">
                                <ClockIcon className="h-4 w-4" />
                                {resource.readTime}
                              </div>
                            )}
                            {'duration' in resource && resource.duration && (
                              <div className="flex items-center gap-2">
                                <PlayIcon className="h-4 w-4" />
                                {resource.duration}
                              </div>
                            )}
                            {'downloads' in resource && resource.downloads && (
                              <div className="flex items-center gap-2">
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                {resource.downloads}
                              </div>
                            )}
                            {'date' in resource && resource.date && (
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4" />
                                {resource.date}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Blog Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Últimos artículos del blog
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-lg hover:gap-4 transition-all"
              >
                Ver todos
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.title}
                  href={post.link}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <span>{post.author}</span>
                        <span className="text-emerald-500">•</span>
                        <span>{post.date}</span>
                        <span className="text-emerald-500">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA - Premium Style */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-16 text-center text-white shadow-premium-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
                    <NewspaperIcon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    Mantente actualizado
                  </h2>
                  <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
                    Recibe las últimas guías, tutoriales y mejores prácticas
                    directamente en tu inbox cada semana
                  </p>
                  
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="flex-1 px-6 py-4 rounded-2xl text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                    >
                      Suscribirse
                    </button>
                  </form>
                  
                  <p className="mt-6 text-sm text-emerald-100">
                    Sin spam. Puedes cancelar cuando quieras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}