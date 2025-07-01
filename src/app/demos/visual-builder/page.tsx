import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import VisualBuilderClient from './VisualBuilderClient'

export const metadata: Metadata = pageMetadata.visualBuilderDemo()

export default function VisualBuilderDemoPage() {
  return <VisualBuilderClient />
}