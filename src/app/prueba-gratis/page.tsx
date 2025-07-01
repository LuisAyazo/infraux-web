import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import PruebaGratisClient from './PruebaGratisClient'

export const metadata: Metadata = pageMetadata.utility.freeTrial()

export default function PruebaGratisPage() {
  return <PruebaGratisClient />
}
