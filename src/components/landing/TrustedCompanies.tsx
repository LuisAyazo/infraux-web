'use client'

const companies = [
  { name: 'TechSolutions', logo: 'TS' },
  { name: 'Innovatec', logo: 'IT' },
  { name: 'CloudNine Co.', logo: 'C9' },
  { name: 'StartupTech', logo: 'ST' },
  { name: 'ScaleUp Inc.', logo: 'SU' },
  { name: 'MegaCorp', logo: 'MC' },
  { name: 'DataFlow Labs', logo: 'DF' },
  { name: 'NextGen Systems', logo: 'NG' },
  { name: 'CloudFirst', logo: 'CF' },
  { name: 'DevOps Pro', logo: 'DP' },
  { name: 'InfraTech', logo: 'IF' },
  { name: 'CloudScale', logo: 'CS' },
  { name: 'TechNova', logo: 'TN' },
  { name: 'ServerLess Co.', logo: 'SL' },
  { name: 'CodeCraft', logo: 'CC' },
]

export default function TrustedCompanies() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Más de <span className="text-electric-purple-600 dark:text-electric-purple-400">500+ empresas</span> confían en <span className="text-gray-900 dark:text-gray-100">Infra</span><span className="bg-gradient-to-r from-emerald-green-600 via-emerald-green-500 to-emerald-green-700 bg-clip-text text-transparent">UX</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Desde startups hasta empresas Fortune 500, organizaciones de todos los tamaños utilizan <span className="text-gray-900 dark:text-gray-100">Infra</span><span className="bg-gradient-to-r from-emerald-green-600 via-emerald-green-500 to-emerald-green-700 bg-clip-text text-transparent">UX</span> para acelerar su transformación digital en la nube
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Una sola fila con movimiento suave */}
        <div className="relative mb-16">
          <div className="flex animate-slide-smooth space-x-8 whitespace-nowrap">
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`company-${index}`}
                className="inline-flex items-center justify-center min-w-[240px] h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg group-hover:text-electric-purple-600 dark:group-hover:text-electric-purple-400 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas mejoradas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in-delay-1 group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow mb-2">
              500+
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Empresas activas
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Desde startups hasta Fortune 500
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-2 group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow mb-2">
              15k+
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Deployments exitosos
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              En AWS, GCP y Azure
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-3 group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow mb-2">
              99.9%
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Uptime garantizado
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              SLA empresarial incluido
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-4 group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow mb-2">
              24/7
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Soporte técnico
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Equipo de expertos disponible
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
