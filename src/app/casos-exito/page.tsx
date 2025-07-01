import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  TrophyIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  HeartIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Casos de Éxito | InfraUX',
  description: 'Descubre cómo empresas de todos los tamaños utilizan InfraUX para transformar su gestión de infraestructura cloud.',
  keywords: ['casos de éxito', 'clientes', 'historias de éxito', 'startups', 'empresas', 'devops'],
  openGraph: {
    title: 'Clientes que Confían en InfraUX',
    description: 'Lee las historias de cómo nuestros clientes han acelerado su innovación y optimizado sus costos.',
    url: 'https://infraux.com/casos-exito',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito de InfraUX',
    description: 'Resultados reales de empresas reales.',
  },
  alternates: {
    canonical: 'https://infraux.com/casos-exito',
    languages: {
      'es': 'https://infraux.com/casos-exito',
      'en': 'https://infraux.com/success-stories'
    }
  },
}

const featuredCases = [
  {
    company: 'TechStart',
    logo: '/logos/techstart.svg',
    industry: 'SaaS',
    size: '50-200 empleados',
    quote: 'InfraUX nos permitió reducir el tiempo de despliegue de 2 horas a 15 minutos. Ahora nuestros desarrolladores pueden enfocarse en crear valor, no en gestionar infraestructura.',
    author: 'María González',
    role: 'CTO',
    results: [
      { metric: '87%', description: 'Reducción en tiempo de despliegue' },
      { metric: '45%', description: 'Ahorro en costos cloud' },
      { metric: '3x', description: 'Más rápido time-to-market' }
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform'],
    challenge: 'Necesitaban escalar rápidamente su infraestructura para soportar el crecimiento exponencial de usuarios.',
    solution: 'Implementaron InfraUX para visualizar y automatizar su arquitectura multi-región en AWS.',
    image: '/case-studies/techstart.jpg'
  },
  {
    company: 'FinanceFlow',
    logo: '/logos/financeflow.svg',
    industry: 'FinTech',
    size: '200-500 empleados',
    quote: 'La capacidad de InfraUX para generar IaC automáticamente y mantener la documentación actualizada ha sido transformadora para nuestro equipo.',
    author: 'Carlos Mendoza',
    role: 'VP of Engineering',
    results: [
      { metric: '99.99%', description: 'Uptime alcanzado' },
      { metric: '60%', description: 'Menos incidentes' },
      { metric: '2 semanas', description: 'Para nuevos ambientes' }
    ],
    technologies: ['GCP', 'Docker', 'GitOps'],
    challenge: 'Cumplir con regulaciones estrictas mientras mantenían agilidad en el desarrollo.',
    solution: 'Usaron InfraUX para implementar controles de seguridad y compliance desde el diseño.',
    image: '/case-studies/financeflow.jpg'
  },
  {
    company: 'EduTech Global',
    logo: '/logos/edutech.svg',
    industry: 'EdTech',
    size: '1000+ empleados',
    quote: 'InfraUX democratizó el acceso a la infraestructura. Ahora todos en el equipo pueden entender y contribuir a nuestra arquitectura.',
    author: 'Ana Silva',
    role: 'Director of Infrastructure',
    results: [
      { metric: '5 países', description: 'Expansión global' },
      { metric: '70%', description: 'Reducción en onboarding' },
      { metric: '24/7', description: 'Disponibilidad global' }
    ],
    technologies: ['Multi-cloud', 'CDN', 'Microservices'],
    challenge: 'Expandirse globalmente manteniendo baja latencia y alta disponibilidad.',
    solution: 'Diseñaron una arquitectura multi-cloud con InfraUX optimizada para cada región.',
    image: '/case-studies/edutech.jpg'
  }
]

const industryResults = [
  {
    industry: 'E-commerce',
    icon: ShoppingCartIcon,
    companies: 45,
    avgSavings: '42%',
    keyBenefit: 'Escalabilidad automática en temporadas altas'
  },
  {
    industry: 'FinTech',
    icon: CreditCardIcon,
    companies: 38,
    avgSavings: '38%',
    keyBenefit: 'Compliance y seguridad integrados'
  },
  {
    industry: 'HealthTech',
    icon: HeartIcon,
    companies: 27,
    avgSavings: '51%',
    keyBenefit: 'HIPAA compliance automatizado'
  },
  {
    industry: 'EdTech',
    icon: AcademicCapIcon,
    companies: 33,
    avgSavings: '46%',
    keyBenefit: 'Infraestructura global optimizada'
  },
  {
    industry: 'SaaS',
    icon: GlobeAltIcon,
    companies: 62,
    avgSavings: '49%',
    keyBenefit: 'Multi-tenancy simplificado'
  },
  {
    industry: 'Gaming',
    icon: SparklesIcon,
    companies: 29,
    avgSavings: '55%',
    keyBenefit: 'Baja latencia global'
  }
]

const metrics = [
  { value: '500+', label: 'Empresas confían en InfraUX' },
  { value: '45%', label: 'Ahorro promedio en costos' },
  { value: '80%', label: 'Reducción en tiempo de despliegue' },
  { value: '99.9%', label: 'Uptime promedio' }
]

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-yellow-50/20 dark:from-black dark:via-slate-950 dark:to-yellow-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <TrophyIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Resultados Reales
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Historias de
                <span className="block gradient-text-yellow">
                  Éxito de Clientes
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Descubre cómo equipos como el tuyo están utilizando InfraUX para innovar más rápido, reducir costos y mejorar la colaboración.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {metrics.map((metric, index) => (
                <div 
                  key={metric.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl sm:text-5xl font-black gradient-text-yellow mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Casos Destacados
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Conoce las historias de transformación de nuestros clientes.
              </p>
            </div>

            <div className="space-y-24">
              {featuredCases.map((caseStudy, index) => (
                <div 
                  key={caseStudy.company}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-up`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-6">
                      <BuildingOfficeIcon className="h-4 w-4 text-yellow-700 dark:text-yellow-300" />
                      <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">
                        {caseStudy.industry} • {caseStudy.size}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {caseStudy.company}
                    </h3>
                    
                    <blockquote className="text-xl text-slate-700 dark:text-slate-300 italic mb-6">
                      "{caseStudy.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {caseStudy.author}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {caseStudy.role}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {caseStudy.results.map((result) => (
                        <div key={result.description} className="text-center">
                          <div className="text-3xl font-black text-yellow-500 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          El Desafío
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          La Solución
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative animate-fade-in-up animation-delay-200`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />
                    <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-premium-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TrophyIcon className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Results */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Resultados por Industria
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                InfraUX impulsa el éxito en todos los sectores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryResults.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={industry.industry}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg mb-6">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                          {industry.industry}
                        </h3>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600 dark:text-slate-400">Empresas</span>
                            <span className="font-bold text-slate-900 dark:text-white">{industry.companies}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600 dark:text-slate-400">Ahorro promedio</span>
                            <span className="font-bold text-yellow-500">{industry.avgSavings}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircleIcon className="h-4 w-4 inline text-green-500 mr-2" />
                          {industry.keyBenefit}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "InfraUX cambió completamente nuestra forma de trabajar. Es como tener un arquitecto cloud experto en el equipo.",
                  author: "Laura Martínez",
                  role: "DevOps Lead",
                  company: "StartupX"
                },
                {
                  quote: "La visualización en tiempo real y la generación automática de IaC nos ahorra horas cada semana.",
                  author: "Roberto Chen",
                  role: "Platform Engineer",
                  company: "TechCorp"
                },
                {
                  quote: "Finalmente, una herramienta que todo el equipo puede usar, no solo los expertos en infraestructura.",
                  author: "Patricia López",
                  role: "Engineering Manager",
                  company: "ScaleUp Inc"
                }
              ].map((testimonial, index) => (
                <div 
                  key={testimonial.author}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Únete a cientos de empresas que ya transformaron su infraestructura con InfraUX.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Empezar Prueba Gratis
                <RocketLaunchIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Solicitar Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}