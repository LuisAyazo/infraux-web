import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import SuccessStoriesClient from './SuccessStoriesClient'

export const metadata: Metadata = {
  title: 'Success Stories | InfraUX',
  description: 'Discover how companies of all sizes use InfraUX to transform their cloud infrastructure management.',
  keywords: ['success stories', 'customer stories', 'case studies', 'startups', 'enterprises', 'devops'],
  openGraph: {
    title: 'Customers Who Trust InfraUX',
    description: 'Read the stories of how our customers have accelerated innovation and optimized costs.',
    url: 'https://infraux.com/success-stories',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Success Stories',
    description: 'Real results from real companies.',
  },
  alternates: {
    canonical: 'https://infraux.com/success-stories',
    languages: {
      'es': 'https://infraux.com/casos-exito',
      'en': 'https://infraux.com/success-stories'
    }
  },
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />
}