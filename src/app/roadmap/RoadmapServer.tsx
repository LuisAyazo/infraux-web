import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import RoadmapClient from './RoadmapClient'

export const metadata: Metadata = pageMetadata.utility.roadmap()

export default function RoadmapPage() {
  return <RoadmapClient />
}
