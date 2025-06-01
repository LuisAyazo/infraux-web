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
    <section className="py-16 px-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Empresas que confían en InfraUX
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Primera fila - movimiento hacia la izquierda */}
        <div className="relative mb-8">
          <div className="flex animate-slide-left space-x-8 whitespace-nowrap">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`row1-${index}`}
                className="inline-flex items-center justify-center min-w-[200px] h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-electric-purple-600 dark:group-hover:text-electric-purple-400 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila - movimiento hacia la derecha */}
        <div className="relative">
          <div className="flex animate-slide-right space-x-8 whitespace-nowrap">
            {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
              <div
                key={`row2-${index}`}
                className="inline-flex items-center justify-center min-w-[200px] h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-green-500 to-cloud-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-emerald-green-600 dark:group-hover:text-emerald-green-400 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in-delay-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow">
              500+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Empresas activas
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow">
              10k+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Deployments exitosos
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-3">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow">
              99.9%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Uptime garantizado
            </div>
          </div>
          <div className="text-center animate-fade-in-delay-4">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 bg-clip-text text-transparent animate-pulse-glow">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Soporte técnico
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
