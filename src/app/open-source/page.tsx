import { Metadata } from 'next';
import OpenSourceClient from './OpenSourceClient';

export const metadata: Metadata = {
  title: 'Open Source | InfraUX - 100% Open Source Platform Engineering',
  description: 'InfraUX is 100% open source under Apache 2.0. Learn about our commitment to transparency, community-driven development, and how you can contribute.',
  keywords: [
    'infraux open source',
    'apache 2.0 license',
    'open source platform engineering',
    'community driven development',
    'contribute to infraux',
    'github infraux',
    'open source infrastructure',
    'transparent development'
  ],
  openGraph: {
    title: 'InfraUX - 100% Open Source Platform Engineering',
    description: 'Join the open source revolution in infrastructure management. Contribute, self-host, or use our managed cloud.',
    url: 'https://infraux.com/open-source',
    siteName: 'InfraUX',
    images: [
      {
        url: '/og-open-source.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX Open Source'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX - 100% Open Source Platform Engineering',
    description: 'Join the open source revolution in infrastructure management.',
    creator: '@infraux',
    images: ['/og-open-source.jpg'],
  },
  alternates: {
    canonical: '/open-source',
    languages: {
      'es': '/codigo-abierto',
      'en': '/open-source'
    }
  }
};

export default function OpenSourcePage() {
  return <OpenSourceClient />;
}