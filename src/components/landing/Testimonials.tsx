'use client'

import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Ana Pérez',
    role: 'Arquitecta Cloud Senior',
    company: 'TechSolutions',
    avatar: '/placeholders/avatar-1.jpg',
    rating: 5,
    quote:
      'InfraUX ha transformado la forma en que diseñamos y desplegamos infraestructura. Lo que antes tomaba días, ahora se hace en horas, ¡y con menos errores!',
    initial: 'A',
    bgColor: 'from-electric-purple-500 to-electric-purple-600',
  },
  {
    id: 2,
    name: 'Carlos Vega',
    role: 'Ingeniero DevOps Lead',
    company: 'Innovatec',
    avatar: '/placeholders/avatar-2.jpg',
    rating: 5,
    quote:
      'La capacidad de visualizar la infraestructura antes de desplegarla es invaluable. InfraUX nos ha ahorrado incontables horas de debugging y optimización.',
    initial: 'C',
    bgColor: 'from-cloud-blue-500 to-cloud-blue-600',
  },
  {
    id: 3,
    name: 'Sofía Ramírez',
    role: 'CTO',
    company: 'CloudNine Co.',
    avatar: '/placeholders/avatar-3.jpg',
    rating: 5,
    quote:
      'Como CTO, InfraUX me permite tener visibilidad completa de nuestra infraestructura. La herramienta facilita la toma de decisiones estratégicas y reduce significativamente los riesgos.',
    initial: 'S',
    bgColor: 'from-emerald-green-500 to-emerald-green-600',
  },
  {
    id: 4,
    name: 'Miguel Torres',
    role: 'Developer Full Stack',
    company: 'StartupTech',
    avatar: '/placeholders/avatar-4.jpg',
    rating: 5,
    quote:
      'Como desarrollador, siempre me intimidaba la configuración de infraestructura. InfraUX hace que sea tan fácil como arrastrar y soltar. ¡Increíble!',
    initial: 'M',
    bgColor: 'from-yellow-500 to-orange-500',
  },
  {
    id: 5,
    name: 'Laura Jiménez',
    role: 'VP Engineering',
    company: 'ScaleUp Inc.',
    avatar: '/placeholders/avatar-5.jpg',
    rating: 5,
    quote:
      'El pre-deploy y post-deploy automatizado nos ha dado una confianza increíble. Podemos escalar nuestra infraestructura con un click y estar seguros de que todo funcionará perfectamente.',
    initial: 'L',
    bgColor: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    name: 'Roberto Silva',
    role: 'Site Reliability Engineer',
    company: 'MegaCorp',
    avatar: '/placeholders/avatar-6.jpg',
    rating: 5,
    quote:
      'La capacidad de InfraUX para manejar multi-cloud con validación en tiempo real es excepcional. Nuestros deployments son ahora 100% confiables.',
    initial: 'R',
    bgColor: 'from-indigo-500 to-purple-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-purple-500/5 via-cloud-blue-500/5 to-emerald-green-500/5"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-electric-purple-400/8 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-green-400/8 rounded-full blur-3xl animate-float-delay"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent">
              usuarios
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo InfraUX está ayudando a equipos como el tuyo a innovar más rápido y con mayor confianza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 drop-shadow-sm' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${testimonial.bgColor} flex items-center justify-center mr-4 shadow-lg`}>
                    <span className="text-xl font-bold text-white">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-electric-purple-500/10 via-cloud-blue-500/10 to-emerald-green-500/10 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <svg className="w-8 h-8 text-electric-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Únete a <span className="text-electric-purple-600 dark:text-electric-purple-400 font-bold">cientos de equipos</span> que ya confían en InfraUX
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
