import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HomepageClient from './HomepageClient'

// SEO Metadata optimizado para Homepage - Nivel Enterprise
export const metadata: Metadata = pageMetadata.home()

export default function Homepage() {
  return <HomepageClient />
}