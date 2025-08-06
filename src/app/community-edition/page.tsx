import { Metadata } from 'next'
import CommunityEditionClient from './CommunityEditionClient'

export const metadata: Metadata = {
  title: 'Community Edition - InfraUX Open Source',
  description: 'Descubre InfraUX Community Edition: la versión open source gratuita para self-hosting. Ideal para proyectos personales y pequeños equipos.',
  keywords: 'infraux community edition, infraux open source, self hosting, infraestructura gratuita, terraform open source',
  openGraph: {
    title: 'InfraUX Community Edition - Open Source & Self-Hosted',
    description: 'La versión gratuita y open source de InfraUX. Self-hosting ilimitado para tu infraestructura cloud.',
    type: 'website',
    images: ['/og-community-edition.png'],
  },
}

export default function CommunityEditionPage() {
  return <CommunityEditionClient />
}