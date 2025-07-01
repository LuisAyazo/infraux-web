import { Metadata } from 'next'
import SlaClient from './SlaClient'

// Metadata SEO optimizado para SLA (en español e inglés)
export const metadata: Metadata = {
  title: 'Acuerdo de Nivel de Servicio (SLA) | InfraUX - Garantías de Uptime',
  description: 'Conoce nuestras garantías de tiempo de actividad (99.9% uptime), políticas de crédito de servicio y compromisos de disponibilidad para InfraUX. SLA transparente y confiable.',
  keywords: [
    'sla',
    'service level agreement',
    'acuerdo nivel servicio',
    'uptime',
    'tiempo actividad',
    'disponibilidad',
    'garantía servicio',
    'crédito servicio',
    'confiabilidad',
    'monitoreo 24/7',
    'infraestructura confiable',
    'tiempo respuesta',
    'soporte técnico',
    'mantenimiento programado',
    'política uptime',
    'garantía disponibilidad',
    'infraux sla',
    'cloud reliability',
    'service guarantee',
    'infrastructure uptime'
  ],
  authors: [{ name: 'InfraUX Legal & Operations Team' }],
  creator: 'InfraUX',
  publisher: 'InfraUX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/sla',
    languages: {
      'es': '/sla',
      'en': '/service-level-agreement'
    }
  },
  openGraph: {
    title: 'Acuerdo de Nivel de Servicio de InfraUX - 99.9% Uptime Garantizado',
    description: 'Nuestro compromiso transparente con la disponibilidad y confiabilidad de la plataforma. Garantía de uptime del 99.9% y soporte 24/7.',
    url: 'https://infraux.com/sla',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-sla.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX SLA - Garantía de Servicio 99.9% Uptime',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SLA de InfraUX - Garantía 99.9% Uptime',
    description: 'Nuestro compromiso con tu operación. SLA transparente con garantías de disponibilidad y créditos de servicio.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-sla.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    }
  }),
  category: 'legal',
}

export default function SlaPage() {
  return <SlaClient />
}