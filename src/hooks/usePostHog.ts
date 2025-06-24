'use client'

import posthog from 'posthog-js'
import { useCallback } from 'react'

export function usePostHog() {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && posthog && posthog.capture) {
      posthog.capture(eventName, properties)
    }
  }, [])

  const trackButtonClick = useCallback((buttonName: string, properties?: Record<string, any>) => {
    trackEvent('button_clicked', {
      button_name: buttonName,
      ...properties
    })
  }, [trackEvent])

  const trackLinkClick = useCallback((linkName: string, href: string, properties?: Record<string, any>) => {
    trackEvent('link_clicked', {
      link_name: linkName,
      link_href: href,
      ...properties
    })
  }, [trackEvent])

  const trackFormSubmit = useCallback((formName: string, properties?: Record<string, any>) => {
    trackEvent('form_submitted', {
      form_name: formName,
      ...properties
    })
  }, [trackEvent])

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    trackEvent('$pageview', {
      page_name: pageName,
      ...properties
    })
  }, [trackEvent])

  const identifyUser = useCallback((userId: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && posthog && posthog.identify) {
      posthog.identify(userId, properties)
    }
  }, [])

  const setUserProperties = useCallback((properties: Record<string, any>) => {
    if (typeof window !== 'undefined' && posthog && posthog.people && posthog.people.set) {
      posthog.people.set(properties)
    }
  }, [])

  return {
    trackEvent,
    trackButtonClick,
    trackLinkClick,
    trackFormSubmit,
    trackPageView,
    identifyUser,
    setUserProperties
  }
}