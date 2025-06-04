'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void
  }
}

function AnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
      })
    }

    // Track scroll depth for SEO insights
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      
      if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
        sessionStorage.setItem('scroll_25', 'true')
        window.gtag?.('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '25%',
          value: 25
        })
      }
      
      if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
        sessionStorage.setItem('scroll_50', 'true')
        window.gtag?.('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '50%',
          value: 50
        })
      }
      
      if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
        sessionStorage.setItem('scroll_75', 'true')
        window.gtag?.('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '75%',
          value: 75
        })
      }
      
      if (scrollPercentage >= 100 && !sessionStorage.getItem('scroll_100')) {
        sessionStorage.setItem('scroll_100', 'true')
        window.gtag?.('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '100%',
          value: 100
        })
      }
    }

    // Track CTA clicks for conversion optimization
    const trackCTAClicks = () => {
      const ctaButtons = document.querySelectorAll('a[href="#pricing"], a[href="#demo"]')
      
      ctaButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLAnchorElement
          const href = target.getAttribute('href')
          const text = target.textContent
          
          window.gtag?.('event', 'click', {
            event_category: 'cta',
            event_label: `${text} - ${href}`,
            value: 1
          })
        })
      })
    }

    // Set up event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true })
    trackCTAClicks()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
    }
  }, [pathname, searchParams])

  return null
}

// Main Analytics component wrapped in Suspense
export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  )
}

// Hook for tracking custom events
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: object) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackConversion = (conversionName: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/' + conversionName,
        value: value,
        currency: 'USD'
      })
    }
  }

  return { trackEvent, trackConversion }
}
