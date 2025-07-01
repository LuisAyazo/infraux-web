import { Metadata } from 'next'
import PartnersClient from './PartnersClient'

// Metadata SEO optimizado para Partners
export const metadata: Metadata = {
  title: 'Become an InfraUX Partner | Reseller & Integration Partner Program',
  description: 'Join InfraUX partner program and help bring visual cloud infrastructure to more companies. Opportunities for resellers, consultants, and system integrators. Grow with us.',
  keywords: [
    'partners',
    'partner program',
    'resellers',
    'consultants',
    'system integrators',
    'cloud consultants',
    'infrastructure partners',
    'devops partners',
    'technology partners',
    'integration partners',
    'channel partners',
    'solution partners',
    'cloud solutions',
    'terraform partners',
    'kubernetes partners',
    'aws partners',
    'azure partners',
    'gcp partners',
    'infraux partners',
    'visual infrastructure partners'
  ],
  authors: [{ name: 'InfraUX Partner Team' }],
  creator: 'InfraUX',
  publisher: 'InfraUX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/partners',
    languages: {
      'es': '/socios',
      'en': '/partners'
    }
  },
  openGraph: {
    title: 'InfraUX Partner Program - Grow Your Business with Visual Infrastructure',
    description: 'Join our partner ecosystem and help democratize cloud infrastructure. Reseller programs, integration opportunities, and technical support included.',
    url: 'https://infraux.com/partners',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-partners.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX Partner Program - Business Growth Opportunities',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Partner Program - Grow Your Cloud Business',
    description: 'Join our partner ecosystem. Reseller programs, integration opportunities, and technical support for cloud infrastructure consultants.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-partners.jpg'],
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
  category: 'business',
}

export default function PartnersPage() {
  return <PartnersClient />
}