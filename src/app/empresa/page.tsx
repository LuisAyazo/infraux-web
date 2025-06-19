import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import Image from 'next/image'
import { 
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarIcon,
  TrophyIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sobre InfraUX | Nuestra Misión, Visión y Equipo',
  description: 'Conoce la historia de InfraUX, nuestra misión de democratizar la gestión de infraestructura cloud y el equipo apasionado que lo hace posible.',
  keywords: ['sobre InfraUX', 'empresa', 'misión', 'visión', 'equipo', 'historia', 'valores'],
  openGraph: {
    title: 'Sobre InfraUX - Transformando la Infraestructura Cloud',
    description: 'Conoce nuestra misión de hacer la infraestructura cloud accesible para todos.',
    url: 'https://infraux.com/empresa',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre InfraUX',
    description: 'La empresa que está democratizando la infraestructura cloud',
  },
  alternates: {
    canonical: 'https://infraux.com/empresa',
    languages: {
      'es': 'https://infraux.com/empresa',
      'en': 'https://infraux.com/about'
    }
  },
}

const values = [
  {
    icon: HeartIcon,
    title: 'Pasión por la simplicidad',
    description: 'Creemos que la tecnología compleja debe ser accesible. Transformamos lo difícil en intuitivo.'
  },
  {
    icon: UserGroupIcon,
    title: 'Colaboración primero',
    description: 'El mejor software se construye en equipo. Fomentamos la colaboración en todo lo que hacemos.'
  },
  {
    icon: LightBulbIcon,
    title: 'Innovación constante',
    description: 'Nunca dejamos de mejorar. Cada día buscamos nuevas formas de resolver problemas.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Confianza y seguridad',
    description: 'La seguridad no es negociable. Protegemos tu infraestructura como si fuera la nuestra.'
  }
]

const milestones = [
  {
    date: 'Agosto 2024',
    title: 'La idea nace',
    description: 'Tres ingenieros frustrados con la complejidad de las herramientas IaC deciden crear algo mejor.'
  },
  {
    date: 'Septiembre 2024',
    title: 'Primer prototipo',
    description: 'Después de noches sin dormir, nace el primer prototipo visual de InfraUX.'
  },
  {
    date: 'Octubre 2024',
    title: 'Beta privada',
    description: '50 early adopters prueban InfraUX y nos dan feedback invaluable.'
  },
  {
    date: 'Noviembre 2024',
    title: 'Ronda seed',
    description: 'Cerramos $2.5M en funding para acelerar el desarrollo.'
  },
  {
    date: 'Enero 2025',
    title: 'Lanzamiento público',
    description: 'InfraUX abre sus puertas al mundo con más de 500 usuarios en lista de espera.'
  },
  {
    date: 'Junio 2025',
    title: 'Hoy',
    description: 'Más de 15,000 usuarios confían en InfraUX para gestionar su infraestructura.'
  }
]

const team = [
  {
    name: 'Carlos Rodríguez',
    role: 'CEO & Co-founder',
    bio: 'Ex-Google Cloud. 15 años construyendo infraestructura a escala.',
    image: '/team/carlos.jpg',
    linkedin: 'https://linkedin.com/in/carlos'
  },
  {
    name: 'Ana Martínez',
    role: 'CTO & Co-founder',
    bio: 'Ex-AWS. Apasionada por hacer la tecnología accesible.',
    image: '/team/ana.jpg',
    linkedin: 'https://linkedin.com/in/ana'
  },
  {
    name: 'Luis Chen',
    role: 'CPO & Co-founder',
    bio: 'Ex-Microsoft. Obsesionado con la experiencia del usuario.',
    image: '/team/luis.jpg',
    linkedin: 'https://linkedin.com/in/luis'
  },
  {
    name: 'María García',
    role: 'VP of Engineering',
    bio: 'Ex-Spotify. Construyendo equipos de alto rendimiento.',
    image: '/team/maria.jpg',
    linkedin: 'https://linkedin.com/in/maria'
  },
  {
    name: 'Roberto Silva',
    role: 'VP of Sales',
    bio: 'Ex-Salesforce. Conectando empresas con soluciones.',
    image: '/team/roberto.jpg',
    linkedin: 'https://linkedin.com/in/roberto'
  },
  {
    name: 'Laura Jiménez',
    role: 'VP of Customer Success',
    bio: 'Ex-Zendesk. Tu éxito es nuestro éxito.',
    image: '/team/laura.jpg',
    linkedin: 'https://linkedin.com/in/laura'
  }
]

const stats = [
  { label: 'Usuarios activos', value: '15,000+' },
  { label: 'Países', value: '45' },
  { label: 'Uptime', value: '99.99%' },
  { label: 'NPS Score', value: '72' }
]

const investors = [
  { name: 'Sequoia Capital', logo: '/investors/sequoia.svg' },
  { name: 'Y Combinator', logo: '/investors/yc.svg' },
  { name: 'Andreessen Horowitz', logo: '/investors/a16z.svg' },
  { name: 'Index Ventures', logo: '/investors/index.svg' }
]

export default function EmpresaPage() {
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
                  Nuestra historia
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Democratizando la
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  infraestructura cloud
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                En InfraUX, creemos que gestionar infraestructura cloud no debería 
                requerir años de experiencia. Nuestra misión es hacer que sea tan 
                fácil como dibujar un diagrama.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <RocketLaunchIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Empoderar a cada desarrollador, sin importar su experiencia en DevOps, 
                  para que pueda crear, gestionar y optimizar infraestructura cloud de 
                  forma visual, colaborativa y eficiente.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <GlobeAltIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Un mundo donde la complejidad de la infraestructura cloud no sea una 
                  barrera para la innovación. Donde cualquier idea pueda convertirse en 
                  realidad sin fricción técnica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestros valores
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Los principios que guían cada decisión que tomamos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestro viaje
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                De una idea a una plataforma que transforma empresas
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.date} className="relative flex items-start mb-8 last:mb-0">
                  <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800 last:hidden" />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 border-4 border-indigo-600 dark:border-indigo-400 rounded-full">
                    <CalendarIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        {milestone.date}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Conoce al equipo
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Las personas apasionadas detrás de InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
                  >
                    LinkedIn
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                ¿Quieres ser parte de nuestro equipo?
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Ver posiciones abiertas
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-indigo-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investors */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Respaldados por los mejores
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Inversores que creen en nuestra visión
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {investors.map((investor) => (
                <div key={investor.name} className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all">
                  <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    {investor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestras oficinas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Un equipo global con presencia local
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPinIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  San Francisco
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Sede principal<br />
                  123 Market St, Suite 400
                </p>
              </div>
              
              <div className="text-center">
                <MapPinIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Ciudad de México
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Oficina LATAM<br />
                  Polanco, CDMX
                </p>
              </div>
              
              <div className="text-center">
                <MapPinIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Madrid
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Oficina Europa<br />
                  Gran Vía 32
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Únete a nuestra misión
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Ayúdanos a democratizar la infraestructura cloud para todos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Prueba InfraUX gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}