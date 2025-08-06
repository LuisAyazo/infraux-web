'use client'

import BrandName from '@/components/BrandName'
import OptimizedImage from '@/components/OptimizedImage'

export default function TrustedCompanies() {
  const companies = [
    { name: 'aws', src: '/images/cloud-providers/aws.png' },
    { name: 'gcp', src: '/images/cloud-providers/gcp.png' },
    { name: 'azure', src: '/images/cloud-providers/azure.png' },
    { name: 'docker', src: '/images/cloud-providers/docker.png' },
    { name: 'github', src: '/images/cloud-providers/github.png' },
    { name: 'kubernetes', src: '/images/cloud-providers/kubernetes.png' },
    { name: 'pulumi', src: '/images/cloud-providers/pulumi.png' },
    { name: 'terraform', src: '/images/cloud-providers/terraform.png' },
  ]

  return (
    <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-8 text-slate-900 dark:text-white">
            Con la confianza de los mejores equipos del mundo
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Desde startups hasta empresas de Fortune 500, los equipos más innovadores confían en InfraUX.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-10">
            {companies.map((company) => (
              <div key={company.name} className="flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <OptimizedImage
                    className="h-12 w-auto"
                    src={company.src}
                    alt={company.name}
                    width={158}
                    height={48}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
