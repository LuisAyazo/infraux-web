import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import RegistroClient from './RegistroClient'

export const metadata: Metadata = pageMetadata.utility.signup()

export default function RegistroPage() {
  return <RegistroClient />
}
