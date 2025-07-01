'use client'

import BrandName from '@/components/BrandName';

// Iconos personalizados con soporte para props
const GitHubIcon = ({ className, ...props }: { className?: string; [key: string]: unknown }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const TwitterIcon = ({ className, ...props }: { className?: string; [key: string]: unknown }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

const LinkedInIcon = ({ className, ...props }: { className?: string; [key: string]: unknown }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)


const footerNavigation = {
  solutions: [
    { name: 'Qué es InfraUX', href: '/que-es-infraux' },
    { name: 'Demo', href: '/demo' },
    { name: 'Casos de Uso', href: '/casos-de-uso' },
    { name: 'Precios', href: '/precios' },
  ],
  resources: [
    { name: 'Documentación', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Tutoriales', href: '#' },
    { name: 'Comunidad', href: '#' },
  ],
  company: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Carreras', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Soporte Técnico', href: '#' },
    { name: 'Estado del Servicio', href: '#' },
  ],
  legal: [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
    { name: 'Licencias', href: '#' },
  ],
  social: [
    { name: 'GitHub', href: '#', icon: GitHubIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-electric-purple-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-green-400/5 rounded-full blur-3xl"></div>
      
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>
      <div className="relative max-w-7xl mx-auto py-12 lg:py-16 px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 animate-fade-in-up">
            <div className="h-10 w-auto text-3xl">
              <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />
            </div>
            <p className="text-gray-400 text-base animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Transformando la complejidad de la nube en simplicidad visual.
            </p>
            <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 group"> {/* Hover a gris claro */}
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Soluciones</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.solutions.map((item, index) => (
                    <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                      <a href={item.href} className="text-sm leading-6 hover:text-white transition-colors duration-300 relative group"> {/* Hover a blanco */}
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span> {/* Subrayado a gris */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Recursos</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.resources.map((item, index) => (
                    <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      <a href={item.href} className="text-sm leading-6 hover:text-white transition-colors duration-300 relative group"> {/* Hover a blanco */}
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span> {/* Subrayado a gris */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Empresa</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.company.map((item, index) => (
                    <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                      <a href={item.href} className="text-sm leading-6 hover:text-white transition-colors duration-300 relative group"> {/* Hover a blanco */}
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span> {/* Subrayado a gris */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white mb-6">Legal</h3>
                <ul role="list" className="space-y-4">
                  {footerNavigation.legal.map((item, index) => (
                    <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${1.6 + index * 0.1}s` }}>
                      <a href={item.href} className="text-sm leading-6 hover:text-white transition-colors duration-300 relative group"> {/* Hover a blanco */}
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span> {/* Subrayado a gris */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> Technologies. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
