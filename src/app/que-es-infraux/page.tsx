import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import WhatIsInfraUX from '@/components/landing/WhatIsInfraUX'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = pageMetadata.spanish.business.whatIs()

export default function QueEsInfraUXPage() {
  const breadcrumbItems = [
    { name: 'Qué es InfraUX', href: '/que-es-infraux', current: true }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="pt-4">
        <WhatIsInfraUX />
      </main>
      <Footer />
    </div>
  )
}
