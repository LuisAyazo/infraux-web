'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Mapeo completo de rutas entre idiomas
import { routeTranslations } from '@/lib/route-translations';

// Traducciones de UI
const translations: { [key: string]: { es: string; en: string } } = {
  // Header
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.producto': { es: 'Producto', en: 'Product' },
  'nav.soluciones': { es: 'Soluciones', en: 'Solutions' },
  'nav.recursos': { es: 'Recursos', en: 'Resources' },
  'nav.precios': { es: 'Precios', en: 'Pricing' },
  'nav.empresa': { es: 'Empresa', en: 'Company' },
  'nav.iniciar_sesion': { es: 'Iniciar Sesión', en: 'Sign In' },
  'nav.prueba_gratis': { es: 'Prueba Gratis', en: 'Try Free' },
  
  // Producto submenu
  'nav.editor_visual': { es: 'Editor Visual', en: 'Visual Editor' },
  'nav.editor_visual_desc': { es: 'Diseña infraestructura sin código', en: 'Design infrastructure without code' },
  'nav.generacion_iac': { es: 'Generación IaC', en: 'IaC Generation' },
  'nav.generacion_iac_desc': { es: 'Terraform, Pulumi, CloudFormation', en: 'Terraform, Pulumi, CloudFormation' },
  'nav.deployment': { es: 'Deployment', en: 'Deployment' },
  'nav.deployment_desc': { es: 'CI/CD visual y automatizado', en: 'Visual and automated CI/CD' },
  'nav.colaboracion': { es: 'Colaboración', en: 'Collaboration' },
  'nav.colaboracion_desc': { es: 'Trabaja en equipo en tiempo real', en: 'Work as a team in real time' },
  
  // Soluciones submenu
  'nav.para_startups': { es: 'Para Startups', en: 'For Startups' },
  'nav.para_startups_desc': { es: 'Escala rápido sin deuda técnica', en: 'Scale fast without technical debt' },
  'nav.para_empresas': { es: 'Para Empresas', en: 'For Enterprises' },
  'nav.para_empresas_desc': { es: 'Gobierna tu infraestructura', en: 'Govern your infrastructure' },
  'nav.para_devops': { es: 'Para DevOps', en: 'For DevOps' },
  'nav.para_devops_desc': { es: 'Automatiza todo tu workflow', en: 'Automate your entire workflow' },
  'nav.multi_cloud': { es: 'Multi-Cloud', en: 'Multi-Cloud' },
  'nav.multi_cloud_desc': { es: 'AWS, GCP y Azure unificados', en: 'AWS, GCP and Azure unified' },
  
  // Recursos submenu
  'nav.documentacion': { es: 'Documentación', en: 'Documentation' },
  'nav.documentacion_desc': { es: 'Guías y referencias completas', en: 'Complete guides and references' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.blog_desc': { es: 'Últimas noticias y tutoriales', en: 'Latest news and tutorials' },
  'nav.comunidad': { es: 'Comunidad', en: 'Community' },
  'nav.comunidad_desc': { es: 'Únete a miles de usuarios', en: 'Join thousands of users' },
  'nav.changelog': { es: 'Changelog', en: 'Changelog' },
  'nav.changelog_desc': { es: 'Nuevas funcionalidades', en: 'New features' },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Detectar idioma inicial basado en localStorage o ruta
  const [language, setLanguageState] = useState<Language>('es')
  
  // Función para cambiar idioma
  const setLanguage = (newLang: Language) => {
    if (newLang === language) return
    
    // Guardar en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('infraux-language', newLang)
    }
    
    // Actualizar estado
    setLanguageState(newLang)
    
    // Navegar a la ruta traducida
    if (pathname && routeTranslations[pathname]) {
      const newRoute = routeTranslations[pathname][newLang]
      if (newRoute && newRoute !== pathname) {
        router.push(newRoute)
      }
    }
  }
  
  // Función de traducción
  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('infraux-language') as Language
      if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        setLanguageState(savedLang)
      }
    }
  }, [])
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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