import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import LoginClient from './LoginClient'

export const metadata: Metadata = pageMetadata.login()

export default function LoginPage() {
  return <LoginClient />
}