import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import UseCases from '@/components/landing/UseCases'

export const metadata: Metadata = {
  title: 'Casos de Uso - InfraUX para Diferentes Equipos y Proyectos',
  description: 'Descubre cómo InfraUX se adapta a diferentes casos de uso: startups, empresas, DevOps, desarrolladores y arquitectos cloud. Ejemplos reales de implementación.',
  keywords: ['casos de uso', 'DevOps', 'startups', 'empresas', 'desarrolladores', 'arquitectos cloud', 'migración cloud'],
  openGraph: {
    title: 'Casos de Uso - InfraUX para Diferentes Equipos',
    description: 'Descubre cómo InfraUX se adapta a startups, empresas, DevOps y desarrolladores.',
    url: 'https://infraux.com/casos-de-uso',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Uso - InfraUX para Diferentes Equipos',
    description: 'Descubre cómo InfraUX se adapta a diferentes equipos y proyectos.',
  },
  alternates: {
    canonical: 'https://infraux.com/casos-de-uso',
  },
}

export default function CasosDeUsoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      <main className="flex-grow">
        <UseCases />
      </main>
      <FooterNew />
    </div>
  )
}
