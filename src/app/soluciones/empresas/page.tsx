import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ClockIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.solutions.enterprises()

const enterpriseFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Enterprise',
    description: 'Encriptación end-to-end, auditoría completa y cumplimiento de estándares internacionales.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Compliance Total',
    description: 'SOC2, ISO 27001, GDPR, HIPAA. Certificaciones y auditorías automatizadas.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: UserGroupIcon,
    title: 'Control de Acceso',
    description: 'SSO, SAML, RBAC avanzado. Integración con tu directorio activo.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ServerStackIcon,
    title: 'Alta Disponibilidad',
    description: 'SLA 99.99%, multi-region automático, disaster recovery incluido.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics Avanzado',
    description: 'Dashboards personalizados, reportes ejecutivos, predicción de costos.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BriefcaseIcon,
    title: 'Soporte Dedicado',
    description: 'Equipo asignado, respuesta en minutos, consultoría incluida.',
    color: 'from-pink-500 to-rose-500'
  }
]

const complianceStandards = [
  { name: 'SOC 2', icon: '🔒', description: 'Type II Certified' },
  { name: 'ISO 27001', icon: '📋', description: 'Certificado' },
  { name: 'GDPR', icon: '🇪🇺', description: 'Compliant' },
  { name: 'HIPAA', icon: '🏥', description: 'Ready' },
  { name: 'PCI DSS', icon: '💳', description: 'Level 1' },
  { name: 'CCPA', icon: '🛡️', description: 'Compliant' }
]

const enterpriseClients = [
  {
    company: 'Global Bank Corp',
    industry: 'Finanzas',
    size: '50,000+ empleados',
    quote: 'InfraUX nos permitió migrar toda nuestra infraestructura legacy a la nube en 6 meses, con cero downtime.',
    author: 'Roberto Méndez',
    role: 'CTO',
    logo: '🏦',
    results: [
      '60% reducción en costos operativos',
      '99.99% uptime garantizado',
      'Compliance automático con regulaciones bancarias'
    ]
  },
  {
    company: 'MedTech Solutions',
    industry: 'Salud',
    size: '10,000+ empleados',
    quote: 'La capacidad de InfraUX para manejar datos sensibles con compliance HIPAA fue fundamental para nosotros.',
    author: 'Dra. Laura Sánchez',
    role: 'VP of Technology',
    logo: '🏥',
    results: [
      'HIPAA compliance desde día 1',
      'Escalamiento global en 3 regiones',
      'Backup automático con encriptación'
    ]
  },
  {
    company: 'Retail Giant',
    industry: 'Retail',
    size: '100,000+ empleados',
    quote: 'Manejamos Black Friday sin problemas. InfraUX escaló automáticamente para manejar 10x nuestro tráfico normal.',
    author: 'Carlos Domínguez',
    role: 'Head of Infrastructure',
    logo: '🛍️',
    results: [
      '10x capacidad en peak times',
      'Zero downtime en 2 años',
      'Multi-cloud strategy implementada'
    ]
  }
]

const enterprisePlans = [
  {
    name: 'Business',
    description: 'Para equipos en crecimiento',
    features: [
      'Hasta 100 usuarios',
      'SSO incluido',
      'Soporte prioritario 24/7',
      'SLA 99.9%',
      'Auditoría básica',
      'Backups diarios'
    ],
    cta: 'Contactar ventas'
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizaciones',
    features: [
      'Usuarios ilimitados',
      'SSO + SAML + LDAP',
      'Soporte dedicado',
      'SLA 99.99%',
      'Auditoría completa',
      'Disaster recovery',
      'Compliance automation',
      'Custom integrations'
    ],
    cta: 'Solicitar demo',
    highlighted: true
  },
  {
    name: 'Enterprise Plus',
    description: 'Soluciones a medida',
    features: [
      'Todo de Enterprise',
      'Arquitecto asignado',
      'Desarrollo custom',
      'On-premise híbrido',
      'Consultoría ilimitada',
      'Training personalizado',
      'White-label option',
      'Priority roadmap'
    ],
    cta: 'Hablar con experto'
  }
]

export default function EmpresasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <BuildingOfficeIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Enterprise Solutions
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Infraestructura cloud de
                <span className="block gradient-text-emerald">
                  nivel enterprise
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Seguridad, compliance y escalabilidad sin compromisos. 
                La plataforma que las empresas líderes eligen para su transformación digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <BriefcaseIcon className="h-6 w-6" />
                  Solicitar demo empresarial
                </Link>
                <Link
                  href="/recursos/whitepaper-enterprise"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Descargar whitepaper
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - Premium Style */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-12 text-center">
              <div className="animate-fade-in">
                <div className="text-5xl font-black gradient-text-emerald mb-2">500+</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Empresas confían en nosotros</p>
              </div>
              <div className="h-16 w-px bg-slate-300 dark:bg-slate-700" />
              <div className="animate-fade-in animation-delay-200">
                <div className="text-5xl font-black gradient-text-emerald mb-2">99.99%</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">SLA garantizado</p>
              </div>
              <div className="h-16 w-px bg-slate-300 dark:bg-slate-700" />
              <div className="animate-fade-in animation-delay-400">
                <div className="text-5xl font-black gradient-text-emerald mb-2">24/7</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Soporte dedicado</p>
              </div>
              <div className="h-16 w-px bg-slate-300 dark:bg-slate-700" />
              <div className="animate-fade-in animation-delay-600">
                <div className="text-5xl font-black gradient-text-emerald mb-2">15 min</div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Tiempo de respuesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Todo lo que tu empresa necesita
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Características enterprise-grade diseñadas para organizaciones exigentes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

        {/* Compliance Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <LockClosedIcon className="h-20 w-20 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Compliance y certificaciones
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Cumplimos con los estándares más exigentes de la industria
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div 
                  key={standard.name} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{standard.icon}</div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-800">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      Auditoría continua
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      Nuestro sistema de auditoría automática garantiza el cumplimiento 
                      continuo de todas las regulaciones aplicables a tu industria.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Logs inmutables</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Reportes automáticos</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Alertas de compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 text-center border border-emerald-200 dark:border-emerald-800">
                      <DocumentCheckIcon className="h-32 w-32 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        Certificación automática
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Empresas líderes confían en InfraUX
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Casos de éxito de transformación digital
              </p>
            </div>
            
            <div className="space-y-8">
              {enterpriseClients.map((client, index) => (
                <div 
                  key={client.company} 
                  className="bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-10">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="text-6xl">{client.logo}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {client.company}
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            {client.industry} • {client.size}
                          </p>
                        </div>
                      </div>
                      
                      <blockquote className="text-xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
                        "{client.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-3">
                        <div className="font-bold text-lg text-slate-900 dark:text-white">
                          {client.author}
                        </div>
                        <span className="text-slate-600 dark:text-slate-400">•</span>
                        <div className="text-slate-600 dark:text-slate-400">
                          {client.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-6">
                        Resultados clave:
                      </h4>
                      <ul className="space-y-4">
                        {client.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">{result}</span>
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

        {/* Enterprise Plans - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Planes diseñados para empresas
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Soluciones flexibles que se adaptan a tus necesidades
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {enterprisePlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-10 animate-fade-in-up ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-premium-lg scale-105'
                      : 'bg-white dark:bg-slate-900 shadow-premium border border-slate-200 dark:border-slate-800'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        Más popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className={`text-3xl font-bold mb-3 ${
                      plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={`text-lg ${plan.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'}`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className={`h-6 w-6 flex-shrink-0 ${
                          plan.highlighted ? 'text-emerald-100' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={`${plan.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'} font-medium`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contacto"
                    className={`block text-center py-4 px-8 rounded-2xl font-bold text-lg transition-all ${
                      plan.highlighted
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transform hover:scale-[1.02]'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                Todos los planes incluyen:
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Onboarding personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Migración asistida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Training para tu equipo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="max-w-4xl mx-auto">
                  <AcademicCapIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                  <h2 className="text-4xl font-bold text-center mb-10">
                    Implementación sin fricciones
                  </h2>
                  
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-black">1</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">Discovery</h3>
                      <p className="text-emerald-50">
                        Análisis de tu infraestructura actual
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-black">2</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">Diseño</h3>
                      <p className="text-emerald-50">
                        Arquitectura personalizada
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-black">3</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">Migración</h3>
                      <p className="text-emerald-50">
                        Zero-downtime migration
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-black">4</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">Optimización</h3>
                      <p className="text-emerald-50">
                        Mejora continua
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <p className="text-2xl mb-8">
                      Tiempo promedio de implementación: <strong>4-6 semanas</strong>
                    </p>
                    <Link
                      href="/recursos/guia-implementacion"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      Descargar guía de implementación
                      <ArrowRightIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Transforma tu infraestructura hoy
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Únete a las empresas líderes que ya confían en InfraUX
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Agendar demo personalizada
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/recursos/caso-estudio-enterprise"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}