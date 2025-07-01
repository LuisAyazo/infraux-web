import { Metadata } from 'next'
import CareersClient from './CareersClient'

// Metadata SEO optimizado para Careers
export const metadata: Metadata = {
  title: 'Careers at InfraUX | Join Our Cloud Infrastructure Team',
  description: 'Join InfraUX and help democratize cloud infrastructure. Explore remote opportunities in DevOps, Frontend, Backend, and Cloud Engineering. Build the future of visual infrastructure management.',
  keywords: [
    'careers',
    'jobs',
    'hiring',
    'remote jobs',
    'devops careers',
    'cloud engineer jobs',
    'frontend developer',
    'backend developer',
    'infrastructure jobs',
    'kubernetes jobs',
    'terraform jobs',
    'startup careers',
    'tech jobs',
    'software engineer',
    'site reliability engineer',
    'platform engineer',
    'cloud architect',
    'infraux careers',
    'visual infrastructure',
    'cloud automation jobs'
  ],
  authors: [{ name: 'InfraUX Talent Team' }],
  creator: 'InfraUX',
  publisher: 'InfraUX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/careers',
    languages: {
      'es': '/carreras',
      'en': '/careers'
    }
  },
  openGraph: {
    title: 'Work with Us at InfraUX - Remote Cloud Infrastructure Careers',
    description: 'We are looking for passionate people to join our mission to democratize cloud infrastructure. Remote-first culture, competitive benefits, and meaningful work.',
    url: 'https://infraux.com/careers',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'Join InfraUX - Cloud Infrastructure Careers',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at InfraUX - Join Our Cloud Infrastructure Team',
    description: 'Build the future of cloud infrastructure. Remote opportunities in DevOps, Frontend, Backend, and Cloud Engineering.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-careers.jpg'],
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
  category: 'employment',
}

export default function CareersPage() {
  return <CareersClient />
}