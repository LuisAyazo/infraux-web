'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: string
  storageKey?: string
  attribute?: string // Usually 'class' or 'data-theme'
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system', 
  storageKey = 'vite-ui-theme', // Using a generic key, can be infraux-theme
  ...props 
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(storageKey) || defaultTheme
    }
    return defaultTheme
  })

  const applyTheme = useCallback((currentTheme: string) => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (currentTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(currentTheme)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey)
      if (storedTheme) {
        setThemeState(storedTheme)
        applyTheme(storedTheme)
      } else {
        applyTheme(defaultTheme)
      }
    }
  }, [applyTheme, defaultTheme, storageKey])
  
  useEffect(() => {
    applyTheme(theme)
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, applyTheme, storageKey])


  const setTheme = (newTheme: string) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState((prevTheme) => {
      if (prevTheme === 'light') return 'dark'
      if (prevTheme === 'dark') return 'light'
      // If theme is 'system', toggle based on current resolved system theme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      return systemTheme === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
