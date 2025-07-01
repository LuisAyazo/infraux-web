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
  'nav.integraciones': { es: 'Integraciones', en: 'Integrations' },
  'nav.integraciones_desc': { es: 'Conecta tus herramientas favoritas', en: 'Connect your favorite tools' },
  'nav.seguridad': { es: 'Seguridad', en: 'Security' },
  'nav.seguridad_desc': { es: 'Nuestras prácticas de seguridad', en: 'Our security practices' },
  
  // Soluciones submenu
  'nav.para_startups': { es: 'Para Startups', en: 'For Startups' },
  'nav.para_startups_desc': { es: 'Escala rápido sin deuda técnica', en: 'Scale fast without technical debt' },
  'nav.para_empresas': { es: 'Para Empresas', en: 'For Enterprises' },
  'nav.para_empresas_desc': { es: 'Gobierna tu infraestructura', en: 'Govern your infrastructure' },
  'nav.para_devops': { es: 'Para DevOps', en: 'For DevOps' },
  'nav.para_devops_desc': { es: 'Automatiza todo tu workflow', en: 'Automate your entire workflow' },
  'nav.multi_cloud': { es: 'Multi-Cloud', en: 'Multi-Cloud' },
  'nav.multi_cloud_desc': { es: 'AWS, GCP y Azure unificados', en: 'AWS, GCP and Azure unified' },
  'nav.casos_exito': { es: 'Casos de Éxito', en: 'Success Stories' },
  'nav.casos_exito_desc': { es: 'Resultados reales de nuestros clientes', en: 'Real results from our customers' },
  
  // Recursos submenu
  'nav.documentacion': { es: 'Documentación', en: 'Documentation' },
  'nav.documentacion_desc': { es: 'Guías y referencias completas', en: 'Complete guides and references' },
  'nav.blog': { es: 'Blog', en: 'Blog' },
  'nav.blog_desc': { es: 'Últimas noticias y tutoriales', en: 'Latest news and tutorials' },
  'nav.tutoriales': { es: 'Tutoriales', en: 'Tutorials' },
  'nav.tutoriales_desc': { es: 'Aprende a dominar InfraUX', en: 'Learn to master InfraUX' },
  'nav.api': { es: 'API Reference', en: 'API Reference' },
  'nav.api_desc': { es: 'Automatiza y extiende InfraUX', en: 'Automate and extend InfraUX' },
  'nav.comunidad': { es: 'Comunidad', en: 'Community' },
  'nav.comunidad_desc': { es: 'Únete a miles de usuarios', en: 'Join thousands of users' },
  'nav.roadmap': { es: 'Roadmap', en: 'Roadmap' },
  'nav.roadmap_desc': { es: 'Nuestros planes y próximas funcionalidades', en: 'Our plans and upcoming features' },
  'nav.changelog': { es: 'Changelog', en: 'Changelog' },
  'nav.changelog_desc': { es: 'Nuevas funcionalidades', en: 'New features' },

  // Empresa submenu
  'nav.sobre_nosotros': { es: 'Sobre Nosotros', en: 'About Us' },
  'nav.sobre_nosotros_desc': { es: 'Nuestra misión, visión y equipo', en: 'Our mission, vision, and team' },
  'nav.carreras': { es: 'Carreras', en: 'Careers' },
  'nav.carreras_desc': { es: 'Únete a nuestro equipo', en: 'Join our team' },
  'nav.partners': { es: 'Partners', en: 'Partners' },
  'nav.partners_desc': { es: 'Crece con nosotros', en: 'Grow with us' },
  'nav.prensa': { es: 'Prensa', en: 'Press' },
  'nav.prensa_desc': { es: 'Recursos para medios', en: 'Resources for media' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },

  // Integrations Page
  'integrations.title': { es: 'Integraciones', en: 'Integrations' },
  'integrations.subtitle': { es: 'Herramientas Favoritas', en: 'Favorite Tools' },
  'integrations.description': { es: 'InfraUX se conecta con tu stack tecnológico actual para que puedas trabajar sin fricciones y potenciar tus flujos de trabajo.', en: 'InfraUX connects with your current tech stack so you can work frictionlessly and supercharge your workflows.' },
  'integrations.available_title': { es: 'Integraciones Disponibles', en: 'Available Integrations' },
  'integrations.available_desc': { es: 'Contenido sobre las integraciones actuales irá aquí.', en: 'Content about current integrations will go here.' },
  'integrations.coming_soon_title': { es: 'Próximamente', en: 'Coming Soon' },
  'integrations.coming_soon_desc': { es: 'Contenido sobre las futuras integraciones irá aquí.', en: 'Content about upcoming integrations will go here.' },
  'integrations.request_title': { es: '¿No ves tu herramienta?', en: "Don't See Your Tool?" },
  'integrations.request_desc': { es: 'Estamos constantemente agregando nuevas integraciones. ¡Dinos qué necesitas!', en: "We're constantly adding new integrations. Let us know what you need!" },
  'integrations.request_cta': { es: 'Solicitar una Integración', en: 'Request an Integration' },

  // Security Page
  'security.badge': { es: 'Confianza y Seguridad', en: 'Trust & Safety' },
  'security.title': { es: 'Seguridad', en: 'Security' },
  'security.subtitle': { es: 'Diseño', en: 'Design' },
  'security.description': { es: 'En InfraUX, la seguridad no es una ocurrencia tardía, es la base sobre la que construimos todo.', en: "At InfraUX, security isn't an afterthought—it's the foundation upon which we build everything." },
  'security.pillars_title': { es: 'Nuestros Pilares de Seguridad', en: 'Our Security Pillars' },
  'security.pillars_desc': { es: 'Contenido sobre los pilares de seguridad (encriptación, compliance, etc.) irá aquí.', en: 'Content about security pillars (encryption, compliance, etc.) will go here.' },
  'security.compliance_title': { es: 'Certificaciones y Compliance', en: 'Certifications & Compliance' },
  'security.compliance_desc': { es: 'Información sobre SOC2 (pendiente) e ISO 27001 (planeado) irá aquí.', en: 'Information about SOC2 (pending) and ISO 27001 (planned) will go here.' },
  'security.report_title': { es: 'Reportar una Vulnerabilidad', en: 'Report a Vulnerability' },
  'security.report_desc': { es: 'La seguridad es un esfuerzo comunitario. Si has encontrado una vulnerabilidad, te agradecemos que nos lo comuniques de forma responsable.', en: "Security is a community effort. If you've found a vulnerability, we appreciate your responsible disclosure." },
  'security.report_cta': { es: 'Contacto de Seguridad', en: 'Security Contact' },

  // Tutorials Page
  'tutorials.badge': { es: 'Aprendizaje Práctico', en: 'Hands-On Learning' },
  'tutorials.title': { es: 'Conviértete en un', en: 'Become an' },
  'tutorials.subtitle': { es: 'Experto en InfraUX', en: 'InfraUX Expert' },
  'tutorials.description': { es: 'Nuestras guías y tutoriales en video están diseñados para llevarte de cero a héroe en la gestión visual de infraestructura.', en: 'Our guides and video tutorials are designed to take you from zero to hero in visual infrastructure management.' },
  'tutorials.categories_title': { es: 'Categorías de Tutoriales', en: 'Tutorial Categories' },
  'tutorials.categories_desc': { es: 'Contenido sobre las categorías (Primeros pasos, Editor, etc.) irá aquí.', en: 'Content about categories (Getting Started, Editor, etc.) will go here.' },
  'tutorials.latest_title': { es: 'Últimos Tutoriales', en: 'Latest Tutorials' },
  'tutorials.latest_desc': { es: 'Grid con los tutoriales más recientes irá aquí.', en: 'A grid with the latest tutorials will go here.' },
  'tutorials.help_title': { es: '¿Necesitas ayuda con algo específico?', en: 'Need help with something specific?' },
  'tutorials.help_desc': { es: 'Visita nuestra documentación completa o únete a la comunidad para obtener ayuda.', en: 'Check out our full documentation or join the community to get help.' },
  'tutorials.cta_docs': { es: 'Ver Documentación', en: 'View Documentation' },
  'tutorials.cta_community': { es: 'Unirse a la Comunidad', en: 'Join the Community' },

  // Success Stories Page
  'success_stories.badge': { es: 'Resultados Reales', en: 'Real Results' },
  'success_stories.title': { es: 'Historias de', en: 'Customer' },
  'success_stories.subtitle': { es: 'Éxito de Clientes', en: 'Success Stories' },
  'success_stories.description': { es: 'Descubre cómo equipos como el tuyo están utilizando InfraUX para innovar más rápido, reducir costos y mejorar la colaboración.', en: 'Discover how teams like yours are using InfraUX to innovate faster, reduce costs, and improve collaboration.' },
  'success_stories.featured_title': { es: 'Casos Destacados', en: 'Featured Stories' },
  'success_stories.featured_desc': { es: 'Grid con los casos de éxito más impactantes irá aquí.', en: 'A grid with the most impactful success stories will go here.' },
  'success_stories.industry_title': { es: 'Resultados por Industria', en: 'Results by Industry' },
  'success_stories.industry_desc': { es: 'Contenido sobre cómo InfraUX ayuda a diferentes industrias (FinTech, SaaS, E-commerce) irá aquí.', en: 'Content about how InfraUX helps different industries (FinTech, SaaS, E-commerce) will go here.' },
  'success_stories.cta_title': { es: '¿Quieres ser nuestro próximo caso de éxito?', en: 'Want to be our next success story?' },
  'success_stories.cta_desc': { es: 'Empieza a construir tu infraestructura de forma visual y cuéntanos tu historia.', en: 'Start building your infrastructure visually and tell us your story.' },
  'success_stories.cta_button': { es: 'Empezar Gratis', en: 'Start for Free' },

  // Careers Page
  'careers.badge': { es: 'Únete al Equipo', en: 'Join the Team' },
  'careers.title': { es: 'Construye el futuro', en: 'Build the future' },
  'careers.subtitle': { es: 'con nosotros', en: 'with us' },
  'careers.description': { es: 'Buscamos personas talentosas y apasionadas para unirse a nuestra misión de hacer la infraestructura cloud simple y accesible para todos.', en: 'We are looking for talented and passionate people to join our mission to make cloud infrastructure simple and accessible for everyone.' },
  'careers.culture_title': { es: 'Nuestra Cultura', en: 'Our Culture' },
  'careers.culture_desc': { es: 'Contenido sobre la cultura de la empresa (colaboración, innovación, etc.) irá aquí.', en: 'Content about the company culture (collaboration, innovation, etc.) will go here.' },
  'careers.positions_title': { es: 'Posiciones Abiertas', en: 'Open Positions' },
  'careers.positions_desc': { es: 'Actualmente no tenemos posiciones abiertas, pero siempre estamos interesados en conocer gente talentosa. ¡Envíanos tu CV!', en: 'We currently have no open positions, but we are always interested in hearing from talented people. Send us your resume!' },
  'careers.cta_title': { es: '¿No ves tu rol ideal?', en: "Don't see your ideal role?" },
  'careers.cta_desc': { es: 'Siempre estamos buscando personas excepcionales. Si crees que puedes aportar a nuestro equipo, nos encantaría saber de ti.', en: 'We are always looking for exceptional people. If you think you can contribute to our team, we would love to hear from you.' },
  'careers.cta_button': { es: 'Envíanos tu CV', en: 'Send us your Resume' },

  // Partners Page
  'partners.badge': { es: 'Crece con Nosotros', en: 'Grow With Us' },
  'partners.title': { es: 'Programa de Partners', en: 'Partner Program' },
  'partners.subtitle': { es: 'de InfraUX', en: 'InfraUX' },
  'partners.description': { es: 'Únete a nuestro ecosistema de consultores, integradores y revendedores para ofrecer soluciones de infraestructura de vanguardia a tus clientes.', en: 'Join our ecosystem of consultants, integrators, and resellers to deliver cutting-edge infrastructure solutions to your clients.' },
  'partners.types_title': { es: 'Tipos de Partnership', en: 'Partnership Types' },
  'partners.types_desc': { es: 'Contenido sobre los tipos de partners (Consultores, Integradores, Revendedores) irá aquí.', en: 'Content about partner types (Consultants, Integrators, Resellers) will go here.' },
  'partners.benefits_title': { es: 'Beneficios para Partners', en: 'Partner Benefits' },
  'partners.benefits_desc': { es: 'Información sobre los beneficios (comisiones, soporte, etc.) irá aquí.', en: 'Information about benefits (commissions, support, etc.) will go here.' },
  'partners.cta_title': { es: 'Conviértete en Partner', en: 'Become a Partner' },
  'partners.cta_desc': { es: '¿Interesado en unirte a nuestro programa de partners? Contáctanos para más información.', en: 'Interested in joining our partner program? Contact us for more information.' },
  'partners.cta_button': { es: 'Aplica Ahora', en: 'Apply Now' },

  // Press Page
  'press.badge': { es: 'Sala de Prensa', en: 'Press Room' },
  'press.title': { es: 'InfraUX en los', en: 'InfraUX in the' },
  'press.subtitle': { es: 'Medios', en: 'Media' },
  'press.description': { es: 'Encuentra nuestros últimos anuncios, comunicados de prensa y recursos para periodistas y medios de comunicación.', en: 'Find our latest announcements, press releases, and resources for journalists and media outlets.' },
  'press.releases_title': { es: 'Comunicados de Prensa', en: 'Press Releases' },
  'press.releases_desc': { es: 'Una lista de los comunicados de prensa más recientes irá aquí.', en: 'A list of the most recent press releases will go here.' },
  'press.kit_title': { es: 'Kit de Prensa', en: 'Press Kit' },
  'press.kit_desc': { es: 'Descarga nuestro kit de prensa que incluye logos, imágenes de producto y biografías de los fundadores.', en: 'Download our press kit which includes logos, product images, and founder bios.' },
  'press.kit_cta': { es: 'Descargar Kit de Prensa', en: 'Download Press Kit' },
  'press.contact_title': { es: 'Contacto de Medios', en: 'Media Contact' },
  'press.contact_desc': { es: 'Para consultas de prensa, por favor contacta a nuestro equipo de relaciones públicas.', en: 'For press inquiries, please contact our public relations team.' },
  'press.contact_cta': { es: 'Contactar a Prensa', en: 'Contact Press' },

  // Security Center Page
  'security_center.badge': { es: 'Seguridad y Confianza', en: 'Security & Trust' },
  'security_center.title': { es: 'Centro de', en: 'Security' },
  'security_center.subtitle': { es: 'Seguridad', en: 'Center' },
  'security_center.description': { es: 'Información detallada sobre nuestras prácticas de seguridad, políticas y certificaciones para proteger tus datos e infraestructura.', en: 'Detailed information about our security practices, policies, and certifications to protect your data and infrastructure.' },
  'security_center.policies_title': { es: 'Políticas de Seguridad', en: 'Security Policies' },
  'security_center.policies_desc': { es: 'Contenido detallado sobre nuestras políticas de seguridad irá aquí.', en: 'Detailed content about our security policies will go here.' },
  'security_center.reporting_title': { es: 'Reporte de Vulnerabilidades', en: 'Vulnerability Reporting' },
  'security_center.reporting_desc': { es: 'Información sobre cómo reportar vulnerabilidades de forma responsable irá aquí.', en: 'Information on how to responsibly report vulnerabilities will go here.' },
  'security_center.compliance_title': { es: 'Cumplimiento', en: 'Compliance' },
  'security_center.compliance_desc': { es: 'Detalles sobre nuestro estado de cumplimiento con SOC2, ISO 27001, etc. irán aquí.', en: 'Details about our compliance status with SOC2, ISO 27001, etc. will go here.' },
  'security_center.cta_title': { es: '¿Tienes preguntas de seguridad?', en: 'Have security questions?' },
  'security_center.cta_desc': { es: 'Nuestro equipo de seguridad está disponible para responder tus preguntas.', en: 'Our security team is available to answer your questions.' },
  'security_center.cta_button': { es: 'Contactar a Seguridad', en: 'Contact Security' },

  // SLA Page
  'sla.badge': { es: 'Nuestro Compromiso', en: 'Our Commitment' },
  'sla.title': { es: 'Acuerdo de Nivel', en: 'Service Level' },
  'sla.subtitle': { es: 'de Servicio (SLA)', en: 'Agreement (SLA)' },
  'sla.description': { es: 'Detallamos nuestro compromiso con la disponibilidad y el rendimiento de la plataforma InfraUX para nuestros clientes de pago.', en: 'We detail our commitment to the availability and performance of the InfraUX platform for our paid customers.' },
  'sla.uptime_title': { es: 'Garantía de Uptime', en: 'Uptime Guarantee' },
  'sla.uptime_desc': { es: 'Contenido detallado sobre las garantías de uptime por plan (Pro: 99.5%, Business: 99.9%, Enterprise: 99.99%) irá aquí.', en: 'Detailed content about uptime guarantees per plan (Pro: 99.5%, Business: 99.9%, Enterprise: 99.99%) will go here.' },
  'sla.credits_title': { es: 'Créditos de Servicio', en: 'Service Credits' },
  'sla.credits_desc': { es: 'Información sobre cómo se calculan y aplican los créditos de servicio en caso de no cumplir con el SLA.', en: 'Information on how service credits are calculated and applied in case of non-compliance with the SLA.' },
  'sla.exclusions_title': { es: 'Exclusiones', en: 'Exclusions' },
  'sla.exclusions_desc': { es: 'Detalles sobre las exclusiones del SLA (mantenimiento programado, problemas de terceros, etc.).', en: 'Details about SLA exclusions (scheduled maintenance, third-party issues, etc.).' },
  'sla.claim_title': { es: 'Procedimiento de Reclamación', en: 'Claim Procedure' },
  'sla.claim_desc': { es: 'Cómo solicitar un crédito de servicio si crees que no hemos cumplido con el SLA.', en: 'How to request a service credit if you believe we have not met the SLA.' },

  // Footer
  'footer.description': { es: 'La plataforma visual para diseñar, desplegar y gestionar infraestructura cloud. Simplifica la complejidad, acelera la innovación.', en: 'The visual platform to design, deploy, and manage cloud infrastructure. Simplify complexity, accelerate innovation.' },
  'footer.newsletter_title': { es: 'Suscríbete a nuestro newsletter', en: 'Subscribe to our newsletter' },
  'footer.newsletter_desc': { es: 'Las últimas noticias, artículos y recursos, enviados a tu inbox semanalmente.', en: 'The latest news, articles, and resources, sent to your inbox weekly.' },
  'footer.newsletter_placeholder': { es: 'tu@email.com', en: 'you@email.com' },
  'footer.newsletter_cta': { es: 'Suscribirse', en: 'Subscribe' },
  'footer.rights_reserved': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  // Legal
  'nav.terminos': { es: 'Términos y Condiciones', en: 'Terms & Conditions' },
  'nav.privacidad': { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'nav.reembolso': { es: 'Política de Reembolsos', en: 'Refund Policy' },
  'nav.seguridad_legal': { es: 'Seguridad', en: 'Security' },
  'nav.sla': { es: 'SLA', en: 'SLA' },
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