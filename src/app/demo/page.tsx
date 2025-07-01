import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import DemoPlaceholder from '@/components/landing/DemoPlaceholder'
import { pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = pageMetadata.content.demo()

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      <main className="flex-grow">
        <DemoPlaceholder />
      </main>
      <FooterNew />
    </div>
  )
}
