import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import TutorialsClient from './TutorialsClient'

export const metadata: Metadata = {
  title: 'Tutorials | InfraUX',
  description: 'Learn to master InfraUX with our step-by-step tutorials. From basics to advanced techniques.',
  keywords: ['tutorials', 'guides', 'learn', 'infrastructure as code', 'devops', 'infraux'],
  openGraph: {
    title: 'Learn to Master InfraUX',
    description: 'Our tutorials will guide you to become an expert in visual infrastructure management.',
    url: 'https://infraux.com/tutorials',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Tutorials',
    description: 'Become an expert with our step-by-step guides.',
  },
  alternates: {
    canonical: 'https://infraux.com/tutorials',
    languages: {
      'es': 'https://infraux.com/tutoriales',
      'en': 'https://infraux.com/tutorials'
    }
  },
}

export default function TutorialsPage() {
  return <TutorialsClient />
}