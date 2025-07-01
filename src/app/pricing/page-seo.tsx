import { Metadata } from 'next'
import PricingClient from './PricingClient'

// 🚀 METADATA SEO OPTIMIZADO PARA PRICING - NIVEL ENTERPRISE
export const metadata: Metadata = {
  title: 'InfraUX Pricing | Free Cloud Infrastructure Platform | Transparent Plans',
  description: 'Start free with InfraUX cloud infrastructure platform. Transparent pricing for teams of all sizes. No hidden costs, cancel anytime. Free plan includes unlimited diagrams and Terraform generation.',
  keywords: [
    // Primary pricing keywords
    'infraux pricing',
    'cloud infrastructure pricing',
    'devops platform pricing',
    'terraform tool pricing',
    'free infrastructure tool',
    'visual cloud platform cost',
    
    // Plan-specific keywords
    'free infrastructure platform',
    'startup infrastructure pricing',
    'enterprise cloud pricing',
    'team collaboration pricing',
    'infrastructure automation cost',
    
    // Competitive keywords
    'terraform cloud pricing',
    'aws infrastructure cost',
    'azure pricing calculator',
    'gcp cost management',
    'cloudformation alternative',
    'infrastructure cost optimization',
    
    // Value proposition keywords
    'transparent pricing',
    'no hidden costs',
    'cancel anytime',
    'free trial',
    'money back guarantee',
    'cost effective devops',
    'budget friendly infrastructure',
    
    // Feature-based pricing keywords
    'unlimited diagrams',
    'terraform generation pricing',
    'multi-cloud pricing',
    'team collaboration cost',
    'enterprise features pricing',
    'sso pricing',
    'compliance pricing',
    
    // Geographic/business keywords
    'startup friendly pricing',
    'enterprise ready',
    'small team pricing',
    'large team pricing',
    'scalable pricing',
    'per user pricing'
  ],
  authors: [{ name: 'InfraUX Pricing Team' }],
  creator: 'InfraUX',
  publisher: 'InfraUX Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/pricing',
    languages: {
      'es': '/precios',
      'en': '/pricing'
    }
  },
  openGraph: {
    title: 'InfraUX Pricing - Start Free | Transparent Plans for Every Team',
    description: 'Free forever plan available. Transparent pricing with no hidden costs. Start building visual cloud infrastructure today.',
    url: 'https://infraux.com/pricing',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-pricing.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX Pricing Plans - Free Forever, Pro, and Enterprise',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Pricing - Start Free | Transparent Cloud Infrastructure Pricing',
    description: 'Free forever plan with unlimited diagrams. Pro and Enterprise plans for growing teams. No hidden costs, cancel anytime.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-pricing.jpg'],
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
  classification: 'pricing information',
}

export default function PricingPage() {
  return <PricingClient />
}
