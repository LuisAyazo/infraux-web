import { Metadata } from 'next'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import WhatIsInfraUX from '@/components/landing/WhatIsInfraUX'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Qué es InfraUX - Editor Visual de Infraestructura Cloud',
  description: 'Descubre InfraUX, el editor visual que revoluciona la gestión de infraestructura cloud. Crea, gestiona y despliega recursos de AWS, GCP y Azure con una interfaz intuitiva.',
  keywords: ['infraestructura cloud', 'editor visual', 'AWS', 'GCP', 'Azure', 'DevOps', 'IaC', 'Terraform'],
  openGraph: {
    title: 'Qué es InfraUX - Editor Visual de Infraestructura Cloud',
    description: 'Revoluciona tu gestión de infraestructura cloud con InfraUX. Editor visual para AWS, GCP y Azure.',
    url: 'https://infraux.com/que-es-infraux',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qué es InfraUX - Editor Visual de Infraestructura Cloud',
    description: 'Revoluciona tu gestión de infraestructura cloud con InfraUX.',
  },
  alternates: {
    canonical: 'https://infraux.com/que-es-infraux',
  },
}

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
