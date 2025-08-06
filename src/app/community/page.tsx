import { Metadata } from 'next';
import CommunityClient from './CommunityClient';

export const metadata: Metadata = {
  title: 'Community | InfraUX - Join the Open Source Movement',
  description: 'Join the InfraUX community. Connect with developers, contribute to the project, get help, and shape the future of visual infrastructure management.',
  keywords: [
    'infraux community',
    'open source community',
    'developer community',
    'infrastructure community',
    'discord infraux',
    'github discussions',
    'contribute infraux',
    'infraux forum'
  ],
  openGraph: {
    title: 'InfraUX Community - Join the Movement',
    description: 'Connect with thousands of developers building the future of infrastructure management.',
    url: 'https://infraux.com/community',
    siteName: 'InfraUX',
    images: [
      {
        url: '/og-community.jpg',
        width: 1200,
        height: 630,
        alt: 'InfraUX Community'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfraUX Community - Join the Movement',
    description: 'Connect with thousands of developers building the future of infrastructure management.',
    creator: '@infraux',
    images: ['/og-community.jpg'],
  },
  alternates: {
    canonical: '/community',
    languages: {
      'es': '/comunidad',
      'en': '/community'
    }
  }
};

export default function CommunityPage() {
  return <CommunityClient />;
}