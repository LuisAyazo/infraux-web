import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import DemoPlaceholder from '@/components/landing/DemoPlaceholder'

export const metadata: Metadata = {
  title: 'Demo - Ve InfraUX en Acción | Editor Visual de Infraestructura',
  description: 'Mira cómo funciona InfraUX en acción. Demostración del editor visual de infraestructura cloud más intuitivo del mercado.',
  keywords: ['demo', 'demostración', 'editor visual', 'infraestructura cloud', 'tutorial', 'preview'],
  openGraph: {
    title: 'Demo - Ve InfraUX en Acción',
    description: 'Demostración del editor visual de infraestructura cloud más intuitivo.',
    url: 'https://infraux.com/demo',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo - Ve InfraUX en Acción',
    description: 'Demostración del editor visual de infraestructura cloud.',
  },
  alternates: {
    canonical: 'https://infraux.com/demo',
  },
}

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      <main className="flex-grow">
        <DemoPlaceholder />
      </main>
      <FooterNew />
    </div>
  )
}
