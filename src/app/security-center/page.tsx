import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import SecurityCenterClient from './SecurityCenterClient'

export const metadata: Metadata = pageMetadata.legal.security()

export default function SecurityCenterPage() {
  return <SecurityCenterClient />
}