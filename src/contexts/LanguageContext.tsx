'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { 
  Language, 
  translations, 
  defaultLanguage, 
  getNestedTranslation,
  detectBrowserLanguage,
  getSavedLanguage,
  saveLanguage,
  formatNumber,
  formatCurrency,
  formatDate
} from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  formatNumber: (num: number) => string
  formatCurrency: (amount: number, currency?: string) => string
  formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Mapeo de rutas entre idiomas
import { routeTranslations } from '@/lib/route-translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Inicializar idioma
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)
  
  // Función para cambiar idioma
  const setLanguage = (newLang: Language) => {
    if (newLang === language) return
    
    // Guardar en localStorage
    saveLanguage(newLang)
    
    // Actualizar estado
    setLanguageState(newLang)
    
    // Navegar a la ruta traducida si existe
    if (pathname && routeTranslations[pathname]) {
      const newRoute = routeTranslations[pathname][newLang]
      if (newRoute && newRoute !== pathname) {
        router.push(newRoute)
      }
    }
  }
  
  // Función de traducción mejorada
  const t = (key: string): string => {
    const translation = getNestedTranslation(translations[language], key)
    
    // En desarrollo, mostrar una advertencia si no se encuentra la traducción
    if (process.env.NODE_ENV === 'development' && translation === key) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`)
    }
    
    return translation
  }
  
  // Funciones de formateo con el idioma actual
  const contextFormatNumber = (num: number) => formatNumber(num, language)
  const contextFormatCurrency = (amount: number, currency?: string) => formatCurrency(amount, language, currency)
  const contextFormatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => formatDate(date, language, options)
  
  // Detectar idioma inicial
  useEffect(() => {
    if (!isInitialized && typeof window !== 'undefined') {
      // Prioridad: 1. Guardado en localStorage, 2. Idioma del navegador, 3. Default
      const savedLang = getSavedLanguage()
      const detectedLang = savedLang || detectBrowserLanguage()
      
      if (detectedLang !== language) {
        setLanguageState(detectedLang)
      }
      
      setIsInitialized(true)
    }
  }, [isInitialized, language])
  
  // Actualizar el atributo lang del HTML
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])
  
  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t,
        formatNumber: contextFormatNumber,
        formatCurrency: contextFormatCurrency,
        formatDate: contextFormatDate
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook para obtener la ruta traducida
export function useTranslatedRoute(path: string, targetLang?: Language) {
  const { language } = useLanguage()
  const lang = targetLang || language
  
  if (routeTranslations[path]) {
    return routeTranslations[path][lang]
  }
  
  return path
}

// Hook para obtener todas las traducciones de una sección
export function useTranslations(section: string) {
  const { t, language } = useLanguage()
  
  const sectionTranslations = getNestedTranslation(translations[language], section)
  
  if (typeof sectionTranslations === 'object' && sectionTranslations !== null) {
    return sectionTranslations
  }
  
  return {}
}