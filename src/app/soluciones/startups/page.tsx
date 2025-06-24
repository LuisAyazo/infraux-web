import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  RocketLaunchIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  ChartBarIcon,
  BeakerIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX para Startups | Infraestructura que Escala Contigo',
  description: 'Solución de infraestructura cloud diseñada para startups. Empieza gratis, escala sin límites. Sin sorpresas en costos.',
  keywords: ['startups', 'infraestructura startup', 'cloud para startups', 'escalar infraestructura', 'aws startup'],
  openGraph: {
    title: 'InfraUX para Startups',
    description: 'La infraestructura que crece con tu startup',
    url: 'https://infraux.com/soluciones/startups',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const startupBenefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Empieza Gratis',
    description: 'Plan gratuito generoso para que puedas validar tu idea sin costos iniciales.',
    highlight: 'Sin tarjeta de crédito'
  },
  {
    icon: BoltIcon,
    title: 'Lanza en Minutos',
    description: 'De la idea al deployment en menos de 10 minutos. Sin configuraciones complejas.',
    highlight: 'Setup instantáneo'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Escala Sin Límites',
    description: 'Arquitectura que crece contigo. De 10 a 10 millones de usuarios sin cambiar nada.',
    highlight: 'Auto-scaling incluido'
  },
  {
    icon: CreditCardIcon,
    title: 'Costos Predecibles',
    description: 'Alertas de costos y límites configurables. Nunca más sorpresas en la factura.',
    highlight: 'Control total'
  }
]

const startupFeatures = [
  {
    category: 'Desarrollo Rápido',
    icon: RocketLaunchIcon,
    features: [
      'Templates pre-configurados para apps comunes',
      'Ambientes dev/staging/prod automáticos',
      'CI/CD configurado desde el día 1',
      'Preview environments para cada PR'
    ]
  },
  {
    category: 'Optimización de Costos',
    icon: ChartBarIcon,
    features: [
      'Recomendaciones automáticas de ahorro',
      'Apagado automático de recursos no usados',
      'Alertas de costos en tiempo real',
      'Reportes detallados de gastos'
    ]
  },
  {
    category: 'Seguridad Incluida',
    icon: ShieldCheckIcon,
    features: [
      'SSL/TLS automático',
      'Backups diarios incluidos',
      'Monitoreo 24/7',
      'Cumplimiento SOC2 ready'
    ]
  }
]

const successStories = [
  {
    company: 'TechStart',
    logo: '🚀',
    quote: 'Pasamos de 0 a 100k usuarios en 3 meses. InfraUX escaló perfectamente sin que tuviéramos que tocar nada.',
    author: 'María Chen',
    role: 'CTO & Co-founder',
    metric: '100k usuarios',
    achievement: 'en 3 meses'
  },
  {
    company: 'FinanceApp',
    logo: '💰',
    quote: 'Redujimos nuestros costos de infraestructura en 70% con las optimizaciones automáticas de InfraUX.',
    author: 'Carlos Ruiz',
    role: 'Founder',
    metric: '70%',
    achievement: 'reducción de costos'
  },
  {
    company: 'EduTech',
    logo: '📚',
    quote: 'Lanzamos en 3 países diferentes en una semana. Multi-region fue tan fácil como un clic.',
    author: 'Ana López',
    role: 'Head of Engineering',
    metric: '3 países',
    achievement: 'en 1 semana'
  }
]

const pricingTiers = [
  {
    name: 'Hobby',
    price: '$0',
    description: 'Perfecto para proyectos personales y MVPs',
    features: [
      '1 proyecto',
      '10k requests/mes',
      'SSL automático',
      'Soporte comunidad'
    ],
    cta: 'Empezar gratis',
    highlighted: false
  },
  {
    name: 'Startup',
    price: '$49',
    description: 'Todo lo que necesitas para lanzar y crecer',
    features: [
      '5 proyectos',
      '1M requests/mes',
      'Auto-scaling',
      'Soporte prioritario',
      'Ambientes ilimitados',
      'CI/CD incluido'
    ],
    cta: 'Prueba gratis 14 días',
    highlighted: true
  },
  {
    name: 'Scale',
    price: '$299',
    description: 'Para startups en crecimiento acelerado',
    features: [
      'Proyectos ilimitados',
      'Requests ilimitados',
      'Multi-region',
      'SLA 99.9%',
      'Soporte dedicado',
      'Consultoría mensual'
    ],
    cta: 'Contactar ventas',
    highlighted: false
  }
]

export default function StartupsPage() {
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
                <RocketLaunchIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Solución para Startups
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                La infraestructura que
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  crece con tu startup
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Empieza gratis, escala sin límites. InfraUX se adapta a cada etapa 
                de tu startup, desde el MVP hasta el unicornio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
                >
                  <SparklesIcon className="h-6 w-6" />
                  Empezar gratis ahora
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
                >
                  Ver planes
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
              
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.4s' }}>
                Sin tarjeta de crédito • Setup en 2 minutos • Cancela cuando quieras
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Diseñado para startups ambiciosas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Todo lo que necesitas para moverte rápido sin sacrificar calidad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={benefit.title} 
                    className="glass-premium rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircleIcon className="h-5 w-5" />
                      {benefit.highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Todo incluido desde el día 1
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                No pierdas tiempo configurando, enfócate en tu producto
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {startupFeatures.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.category} 
                    className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-black rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Startups que confían en InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Historias reales de crecimiento acelerado
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div 
                  key={story.company} 
                  className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl">{story.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {story.company}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                          {story.metric}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          {story.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {story.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {story.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Precios que crecen contigo
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                Empieza gratis, escala cuando lo necesites
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-10 transition-all duration-300 fade-in-up ${
                    tier.highlighted
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-premium-lg scale-105'
                      : 'glass-premium border border-slate-200 dark:border-slate-800 hover-lift-premium'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        Más popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className={`text-5xl font-black ${
                        tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {tier.price}
                      </span>
                      {tier.price !== '$0' && (
                        <span className={tier.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'}>
                          /mes
                        </span>
                      )}
                    </div>
                    <p className={`${
                      tier.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className={`h-6 w-6 flex-shrink-0 ${
                          tier.highlighted ? 'text-emerald-200' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={tier.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/register"
                    className={`block text-center py-4 px-8 rounded-full font-semibold transition-all ${
                      tier.highlighted
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-slate-600 dark:text-slate-400">
                ¿Necesitas algo especial? {' '}
                <Link href="/contacto" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                  Hablemos
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Startup Program */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <BeakerIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Programa InfraUX para Startups
                </h2>
                <p className="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                  Si tu startup tiene menos de 2 años y has levantado menos de $2M, 
                  califica para nuestro programa especial con hasta $10,000 en créditos.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">$10k</div>
                    <p className="text-emerald-100 font-medium">en créditos</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">6 meses</div>
                    <p className="text-emerald-100 font-medium">de soporte premium</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-black mb-2">1-on-1</div>
                    <p className="text-emerald-100 font-medium">mentoría técnica</p>
                  </div>
                </div>
                
                <Link
                  href="/startup-program"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Aplicar al programa
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
              Tu infraestructura no debería frenar tu crecimiento
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
              Únete a cientos de startups que están construyendo el futuro con InfraUX
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
              >
                Empezar gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/demos/startup-setup"
                className="inline-flex items-center gap-2 px-10 py-5 glass-premium text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300"
              >
                Ver demo de 5 min
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>Setup en 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}