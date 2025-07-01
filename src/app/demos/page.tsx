import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import DemosClient from './DemosClient'

export const metadata: Metadata = pageMetadata.demos()

export default function DemosPage() {
  return <DemosClient />
}