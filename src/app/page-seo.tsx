import { Metadata } from 'next'
import HomepageClient from './HomepageClient'

// 🚀 METADATA SEO OPTIMIZADO PARA HOMEPAGE - NIVEL ENTERPRISE
export const metadata: Metadata = {
  title: 'InfraUX | Visual Cloud Infrastructure Platform | Terraform, AWS, Azure, GCP',
  description: 'Transform your cloud infrastructure with InfraUX - the visual platform for DevOps teams. Design, deploy, and manage AWS, Azure, and GCP infrastructure with our intuitive drag-and-drop interface. Generate Terraform code automatically.',
  keywords: [
    // Primary keywords
    'visual cloud infrastructure',
    'cloud infrastructure platform',
    'visual devops',
    'infrastructure as code',
    'terraform visual editor',
    'aws infrastructure design',
    'azure infrastructure design',
    'gcp infrastructure design',
    'cloud architecture tool',
    'devops platform',
    
    // Secondary keywords
    'infrastructure automation',
    'cloud deployment',
    'terraform generator',
    'visual terraform',
    'infrastructure visualization',
    'cloud management platform',
    'devops tools',
    'infrastructure orchestration',
    'multi-cloud management',
    'cloud infrastructure automation',
    
    // Technical keywords
    'kubernetes infrastructure',
    'docker deployment',
    'ci/cd pipeline',
    'infrastructure monitoring',
    'cloud security',
    'infrastructure compliance',
    'terraform modules',
    'aws cloudformation',
    'azure resource manager',
    'google cloud deployment manager',
    
    // Solution keywords
    'startup infrastructure',
    'enterprise cloud',
    'scalable infrastructure',
    'cost optimization',
    'infrastructure best practices',
    'cloud migration',
    'infrastructure modernization',
    
    // Brand keywords
    'infraux',
    'infraux platform',
    'visual infrastructure editor',
    'drag and drop cloud'
  ],
  authors: [
    { name: 'InfraUX Team', url: 'https://infraux.com/company' }
  ],
  creator: 'InfraUX',
  publisher: 'InfraUX Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://infraux.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/',
      'en': '/',
      'x-default': '/'
    }
  },
  openGraph: {
    title: 'InfraUX - Visual Cloud Infrastructure Platform for DevOps Teams',
    description: 'Design, deploy, and manage cloud infrastructure visually. Generate Terraform code automatically. Support for AWS, Azure, and GCP. Transform your DevOps workflow today.',
    url: 'https://infraux.com',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX - Visual Cloud Infrastructure Platform',
        type: 'image/jpeg',
      },
      {
        url: '/og-homepage-large.jpg',
        width: 1800,
        height: 945,
        alt: 'InfraUX Platform Dashboard - Visual Infrastructure Design',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX - Visual Cloud Infrastructure Platform',
    description: 'Transform your DevOps workflow with visual infrastructure design. Generate Terraform code automatically for AWS, Azure, and GCP.',
    site: '@infraux',
    creator: '@infraux',
    images: ['/og-homepage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        bing: process.env.NEXT_PUBLIC_BING_VERIFICATION
      }),
    }
  }),
  category: 'technology',
  classification: 'software platform',
  other: {
    'application-name': 'InfraUX Platform',
    'theme-color': '#0ea5e9',
    'color-scheme': 'light dark',
  }
}

export default function HomePage() {
  return <HomepageClient />
}
