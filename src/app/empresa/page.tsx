import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
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

export const metadata: Metadata = pageMetadata.spanish.business.company()

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
                  Nuestra historia
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Democratizando la
                <span className="block gradient-text-emerald">
                  infraestructura cloud
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                En InfraUX, creemos que gestionar infraestructura cloud no debería
                requerir años de experiencia. Nuestra misión es hacer que sea tan
                fácil como dibujar un diagrama.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group hover-lift-premium animate-fade-in-up">
                <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <RocketLaunchIcon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Nuestra Misión
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Empoderar a cada desarrollador, sin importar su experiencia en DevOps,
                      para que pueda crear, gestionar y optimizar infraestructura cloud de
                      forma visual, colaborativa y eficiente.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group hover-lift-premium animate-fade-in-up animation-delay-200">
                <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Nuestra Visión
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Un mundo donde la complejidad de la infraestructura cloud no sea una
                      barrera para la innovación. Donde cualquier idea pueda convertirse en
                      realidad sin fricción técnica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestros valores
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Los principios que guían cada decisión que tomamos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="text-center group hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex p-5 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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

        {/* Timeline - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestro viaje
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                De una idea a una plataforma que transforma empresas
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.date}
                  className="relative flex items-start mb-8 last:mb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 opacity-20 last:hidden" />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-lg">
                    <CalendarIcon className="h-7 w-7 text-white" />
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-premium border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300">
                      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                        {milestone.date}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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

        {/* Team - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Conoce al equipo
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Las personas apasionadas detrás de InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                        {member.role}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {member.bio}
                      </p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-3 transition-all"
                      >
                        LinkedIn
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                ¿Quieres ser parte de nuestro equipo?
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Ver posiciones abiertas
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats - Premium Style */}
        <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl sm:text-6xl font-black text-white mb-3">
                    {stat.value}
                  </div>
                  <div className="text-emerald-100 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investors - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Respaldados por los mejores
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Inversores que creen en nuestra visión
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {investors.map((investor, index) => (
                <div
                  key={investor.name}
                  className="flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                    {investor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestras oficinas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Un equipo global con presencia local
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { city: 'San Francisco', desc: 'Sede principal', address: '123 Market St, Suite 400' },
                { city: 'Ciudad de México', desc: 'Oficina LATAM', address: 'Polanco, CDMX' },
                { city: 'Madrid', desc: 'Oficina Europa', address: 'Gran Vía 32' }
              ].map((office, index) => (
                <div
                  key={office.city}
                  className="group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-premium border border-slate-200 dark:border-slate-800 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                        <MapPinIcon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {office.city}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        {office.desc}<br />
                        {office.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Premium Style */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Únete a nuestra misión
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              Ayúdanos a democratizar la infraestructura cloud para todos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Prueba InfraUX gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover-lift-premium transition-all duration-300"
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