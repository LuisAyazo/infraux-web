import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import PricingClient from './PricingClient'

// SEO Metadata optimizado para Pricing - Nivel Enterprise
export const metadata: Metadata = pageMetadata.pricing()

export default function PricingPage() {
  return <PricingClient />
}