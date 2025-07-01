import { Metadata } from 'next'
import PressClient from './PressClient'

// Metadata SEO optimizado para Press
export const metadata: Metadata = {
  title: 'Press Room | InfraUX - Media Resources & Press Releases',
  description: 'Official press room for InfraUX. Find press releases, media resources, brand guidelines, and contact information for journalists and media professionals.',
  keywords: [
    'press',
    'press room',
    'media',
    'news',
    'press releases',
    'media kit',
    'brand guidelines',
    'public relations',
    'journalism',
    'media resources',
    'infraux news',
    'company news',
    'product announcements',
    'media contact',
    'press kit download',
    'logo download',
    'brand assets',
    'media inquiries',
    'journalist resources',
    'tech news'
  ],
  authors: [{ name: 'InfraUX Communications Team' }],
  creator: 'InfraUX',
  publisher: 'InfraUX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/press',
    languages: {
      'es': '/prensa',
      'en': '/press'
    }
  },
  openGraph: {
    title: 'InfraUX Press Room - Media Resources & News',
    description: 'Find our latest press releases, media resources, and everything journalists need to cover InfraUX and visual cloud infrastructure.',
    url: 'https://infraux.com/press',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-press.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX Press Room - Media Resources',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Press Room - Media Resources & Press Releases',
    description: 'Official press resources for InfraUX. Press releases, media kit, and journalist resources for cloud infrastructure news.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-press.jpg'],
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
  category: 'news',
}

export default function PressPage() {
  return <PressClient />
}
