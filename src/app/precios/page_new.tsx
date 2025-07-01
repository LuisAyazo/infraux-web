import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import PreciosClient from './PreciosClient'

export const metadata: Metadata = pageMetadata.spanish.business.pricing()

export default function PreciosPage() {
  return <PreciosClient />
}
