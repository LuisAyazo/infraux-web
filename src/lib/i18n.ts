import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

export type Language = 'es' | 'en';

export const languages: Language[] = ['es', 'en'];

export const defaultLanguage: Language = 'es';

export const translations = {
  es: esTranslations,
  en: enTranslations,
} as const;

export type TranslationKeys = keyof typeof esTranslations;

// Función helper para obtener traducciones anidadas
export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) || path;
}

// Detectar idioma del navegador
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const browserLang = navigator.language.toLowerCase();
  
  // Mapeo de códigos de idioma del navegador a nuestros idiomas soportados
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';
  
  return defaultLanguage;
}

// Obtener idioma guardado
export function getSavedLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  
  const saved = localStorage.getItem('infraux-language');
  if (saved && languages.includes(saved as Language)) {
    return saved as Language;
  }
  
  return null;
}

// Guardar idioma
export function saveLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('infraux-language', lang);
  }
}

// Función para formatear números según el idioma
export function formatNumber(num: number, lang: Language): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale).format(num);
}

// Función para formatear moneda según el idioma
export function formatCurrency(amount: number, lang: Language, currency: string = 'USD'): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Función para formatear fechas según el idioma
export function formatDate(date: Date, lang: Language, options?: Intl.DateTimeFormatOptions): string {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  return new Intl.DateTimeFormat(locale, options).format(date);
}