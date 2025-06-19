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
  // { name: 'CloudFirst', logo: 'CF' }, // Example: Keep list shorter for cleaner look
  // { name: 'DevOps Pro', logo: 'DP' },
  // { name: 'InfraTech', logo: 'IF' },
  // { name: 'CloudScale', logo: 'CS' },
  // { name: 'TechNova', logo: 'TN' },
  // { name: 'ServerLess Co.', logo: 'SL' },
  // { name: 'CodeCraft', logo: 'CC' },
]

export default function TrustedCompanies() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400">
          Con la confianza de equipos innovadores en todo el mundo
        </h2>
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-center">
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center">
              {/* 
                Idealmente, aquí irían los <Image /> de Next.js con los logos en SVG/PNG.
                Como no tenemos los archivos de imagen, usaremos una representación textual muy simple.
                Tailscale usa logos en escala de grises.
              */}
              <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {company.name} 
                {/* O podríamos usar company.logo si quisiéramos solo las iniciales, 
                    pero el nombre completo es más claro sin logos visuales. */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
