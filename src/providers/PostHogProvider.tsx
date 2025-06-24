'use client'

import { useEffect, useState } from 'react'
import posthog from 'posthog-js'

// PostHog initialization flag
let posthogInitialized = false

export function PostHogProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Initialize PostHog only once on client side
    if (typeof window !== 'undefined' && !posthogInitialized && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthogInitialized = true
      try {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
          capture_pageview: true,
          capture_pageleave: true,
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug()
          }
        })
      } catch (error) {
        console.warn('PostHog initialization failed:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === 'undefined' || !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      return
    }

    // Track page views on route changes
    const handleRouteChange = () => {
      if (posthog && posthog.capture) {
        posthog.capture('$pageview')
      }
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [isClient])

  // Always return children to avoid hydration issues
  return <>{children}</>
}