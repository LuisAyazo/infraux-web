'use client'

import BrandName from '@/components/BrandName'

export default function TrustedCompanies() {
  const companies = [
    { name: 'TechSolutions', category: 'Startup' },
    { name: 'Innovatec', category: 'Enterprise' },
    { name: 'CloudNine Co.', category: 'Scale-up' },
    { name: 'StartupTech', category: 'Tech' },
    { name: 'ScaleUp Inc.', category: 'Growth' },
    { name: 'MegaCorp', category: 'Enterprise' },
    { name: 'DataFlow Labs', category: 'AI/ML' },
    { name: 'NextGen Systems', category: 'Innovation' },
  ]

  const stats = [
    { number: '10K+', label: 'Desarrolladores Activos', icon: '👨‍💻' },
    { number: '50+', label: 'Países de Confianza', icon: '🌍' },
    { number: '99.9%', label: 'Satisfacción Cliente', icon: '⭐' },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Efectos de fondo minimalistas */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-5 dark:opacity-3" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header minimalista y elegante */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full font-semibold text-sm mb-6 border border-emerald-200 dark:border-emerald-500/20">
            ✨ Confianza Global
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="block">Con la confianza de</span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              equipos innovadores
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl text-slate-600 dark:text-slate-400 font-medium mt-2">
              en todo el mundo
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Desde startups hasta enterprise, miles de equipos confían en <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> para transformar su infraestructura cloud
          </p>
        </div>

        {/* Lista elegante de empresas - SIN CARDS */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <div 
                key={company.name} 
                className="group text-center transform hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  {/* Nombre de la empresa elegante */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1">
                    {company.name}
                  </h3>
                  {/* Categoría sutil */}
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                    {company.category}
                  </p>
                  
                  {/* Efecto hover minimalista */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats premium en una línea horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action minimalista */}
        <div className="text-center mt-16">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            🚀 Únete a miles de equipos que ya transforman su infraestructura con <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />
          </p>
        </div>
      </div>
    </section>
  )
}
