import { Metadata } from 'next'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  BookOpenIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CubeIcon,
  CodeBracketIcon,
  CloudIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  CommandLineIcon,
  BeakerIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = pageMetadata.utility.tutorials()

const tutorialCategories = [
  {
    icon: RocketLaunchIcon,
    title: 'Primeros Pasos',
    description: 'Comienza tu viaje con InfraUX',
    tutorials: 12,
    color: 'from-emerald-500 to-teal-500',
    href: '/tutoriales/primeros-pasos'
  },
  {
    icon: CubeIcon,
    title: 'Editor Visual',
    description: 'Domina el editor de diagramas',
    tutorials: 18,
    color: 'from-purple-500 to-indigo-500',
    href: '/tutoriales/editor'
  },
  {
    icon: CodeBracketIcon,
    title: 'IaC & GitOps',
    description: 'Infraestructura como código',
    tutorials: 15,
    color: 'from-blue-500 to-cyan-500',
    href: '/tutoriales/iac'
  },
  {
    icon: CloudIcon,
    title: 'Multi-Cloud',
    description: 'AWS, GCP, Azure y más',
    tutorials: 24,
    color: 'from-orange-500 to-red-500',
    href: '/tutoriales/cloud'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad',
    description: 'Mejores prácticas de seguridad',
    tutorials: 10,
    color: 'from-pink-500 to-rose-500',
    href: '/tutoriales/seguridad'
  },
  {
    icon: ChartBarIcon,
    title: 'Optimización',
    description: 'Rendimiento y costos',
    tutorials: 8,
    color: 'from-amber-500 to-yellow-500',
    href: '/tutoriales/optimizacion'
  }
]

const featuredTutorials = [
  {
    title: 'Tu Primera Aplicación en AWS',
    description: 'Aprende a diseñar y desplegar una aplicación completa en AWS usando InfraUX.',
    duration: '45 min',
    level: 'Principiante',
    category: 'AWS',
    image: '/tutorials/aws-first-app.jpg',
    href: '/tutoriales/aws-primera-app',
    isVideo: true
  },
  {
    title: 'Arquitectura de Microservicios',
    description: 'Diseña una arquitectura de microservicios escalable con Kubernetes y service mesh.',
    duration: '60 min',
    level: 'Avanzado',
    category: 'Arquitectura',
    image: '/tutorials/microservices.jpg',
    href: '/tutoriales/microservicios',
    isVideo: true
  },
  {
    title: 'CI/CD con GitHub Actions',
    description: 'Configura un pipeline completo de CI/CD integrado con InfraUX.',
    duration: '30 min',
    level: 'Intermedio',
    category: 'DevOps',
    image: '/tutorials/cicd-github.jpg',
    href: '/tutoriales/cicd-github',
    isVideo: false
  },
  {
    title: 'Optimización de Costos Cloud',
    description: 'Estrategias probadas para reducir hasta un 40% tus gastos en la nube.',
    duration: '35 min',
    level: 'Intermedio',
    category: 'Optimización',
    image: '/tutorials/cost-optimization.jpg',
    href: '/tutoriales/optimizacion-costos',
    isVideo: true
  }
]

const learningPaths = [
  {
    title: 'DevOps Engineer',
    description: 'Conviértete en un experto DevOps con InfraUX',
    duration: '8 semanas',
    modules: 12,
    icon: '🚀',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Cloud Architect',
    description: 'Diseña arquitecturas cloud robustas y escalables',
    duration: '10 semanas',
    modules: 15,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Security Specialist',
    description: 'Especialízate en seguridad de infraestructura',
    duration: '6 semanas',
    modules: 8,
    icon: '🛡️',
    color: 'from-emerald-600 to-teal-600'
  }
]

export default function TutorialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-black dark:via-slate-950 dark:to-purple-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <BookOpenIcon className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Aprendizaje Práctico
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Conviértete en un
                <span className="block gradient-text-purple">
                  Experto en InfraUX
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Nuestras guías y tutoriales en video están diseñados para llevarte de cero a héroe en la gestión visual de infraestructura.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tutoriales/primeros-pasos"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Empezar Ahora
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="#learning-paths"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Ver Rutas de Aprendizaje
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorial Categories */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Explora por Categoría
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Encuentra exactamente lo que necesitas aprender hoy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorialCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-500 dark:text-slate-500">
                            {category.tutorials} tutoriales
                          </span>
                          <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Tutorials */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Tutoriales Destacados
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Los más populares entre nuestra comunidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredTutorials.map((tutorial, index) => (
                <Link
                  key={tutorial.title}
                  href={tutorial.href}
                  className="group relative hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
                      {tutorial.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-6 bg-white/90 dark:bg-black/90 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <PlayCircleIcon className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold">
                          {tutorial.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          tutorial.level === 'Principiante'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : tutorial.level === 'Intermedio'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <ClockIcon className="h-5 w-5" />
                          <span className="font-medium">{tutorial.duration}</span>
                        </span>
                        <ArrowRightIcon className="h-5 w-5 text-purple-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section id="learning-paths" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Rutas de Aprendizaje
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Programas estructurados para dominar InfraUX según tu rol.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <div 
                  key={path.title}
                  className="relative group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${path.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                    <div className="text-6xl mb-6">{path.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {path.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {path.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <ClockIcon className="h-5 w-5 text-purple-500" />
                        <span className="text-slate-700 dark:text-slate-300">Duración: {path.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <AcademicCapIcon className="h-5 w-5 text-purple-500" />
                        <span className="text-slate-700 dark:text-slate-300">{path.modules} módulos</span>
                      </div>
                    </div>
                    <Link
                      href={`/rutas/${path.title.toLowerCase().replace(' ', '-')}`}
                      className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r ${path.color} text-white font-bold rounded-2xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300`}
                    >
                      Comenzar Ruta
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <BeakerIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  Aprende Haciendo
                </h2>
                <p className="text-xl lg:text-2xl text-purple-50 mb-10 max-w-3xl mx-auto font-medium">
                  Prueba InfraUX directamente en tu navegador con nuestro playground interactivo. Sin instalación, sin configuración.
                </p>
                <Link
                  href="/playground"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl hover:bg-purple-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Abrir Playground
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Necesitas ayuda con algo específico?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium">
              Visita nuestra documentación completa o únete a la comunidad para obtener ayuda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/documentacion"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Ver Documentación
                <DocumentTextIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/comunidad"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300"
              >
                Unirse a la Comunidad
                <UserGroupIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}