# Integración de PostHog en Landing Page

## Resumen
Se ha integrado exitosamente PostHog Analytics en el landing page de InfraUX para rastrear el comportamiento de los usuarios y obtener insights valiosos.

## Configuración Implementada

### 1. Instalación
```bash
npm install posthog-js
```

### 2. Variables de Entorno
Se creó el archivo `.env` con las credenciales de PostHog:
```env
NEXT_PUBLIC_POSTHOG_KEY=phc_nUnaMDKt1EiOPDYAbBYPimyyGSzt44gFj7yphGb9IOK
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### 3. Provider de PostHog
Se creó `src/providers/PostHogProvider.tsx` que:
- Inicializa PostHog con las credenciales
- Habilita el tracking automático de pageviews
- Envuelve la aplicación para manejar el tracking de rutas
- No usa PostHogProvider de React para evitar problemas de compatibilidad

### 4. Hook Personalizado
Se creó `src/hooks/usePostHog.ts` que accede directamente a la instancia global de PostHog con métodos útiles:
- `trackEvent()`: Para eventos personalizados
- `trackButtonClick()`: Para clics en botones
- `trackPageView()`: Para vistas de página manuales
- `trackFormSubmit()`: Para envíos de formularios
- `trackLinkClick()`: Para clics en enlaces
- `identify()`: Para identificar usuarios
- `reset()`: Para resetear la sesión

### 5. Integración en Layout
Se envolvió la aplicación con `PostHogProviderWrapper` en `src/app/layout.tsx`

## Eventos Implementados

### En la Página Principal (`src/app/page.tsx`)

1. **Hero Section**
   - `hero_start_free`: Clic en botón "Empieza gratis"
   - `hero_view_demo`: Clic en botón "Ver demo interactiva"
   - `demo_carousel_click`: Interacción con el carrusel de demos

2. **Use Cases Section**
   - Tracking de clics en CTAs de casos de uso con propiedades:
     - `use_case`: Tipo de caso (Startups, Empresas, Agencias)
     - `href`: URL de destino

3. **Final CTA Section**
   - `final_cta_create_account`: Clic en "Crear cuenta gratis"
   - `final_cta_contact_sales`: Clic en "Hablar con ventas"

### En el Header (`src/components/landing/HeaderNew.tsx`)

1. **Navegación Principal**
   - Tracking de todos los clics en menús con formato: `nav_{section}_{item}`
   - Tracking de clics en enlaces simples: `nav_{linkName}`

2. **Switch de Idioma**
   - `language_switch`: Cambio de idioma con propiedades:
     - `from`: Idioma actual
     - `to`: Idioma destino

3. **CTAs del Header**
   - `header_login`: Clic en "Iniciar Sesión"
   - `header_start_free`: Clic en "Prueba Gratis"

## Datos que se Capturan Automáticamente

PostHog captura automáticamente:
- Pageviews (vistas de página)
- Tiempo en página
- Información del dispositivo y navegador
- Ubicación geográfica (país/ciudad)
- Fuente de tráfico (referrer)
- Parámetros UTM de campañas

## Próximos Pasos Recomendados

1. **Agregar más tracking en otras páginas**:
   - Página de precios
   - Página de documentación
   - Formularios de contacto

2. **Configurar objetivos y funnels en PostHog**:
   - Funnel de conversión: Home → Pricing → Sign Up
   - Objetivo: Registros completados

3. **Implementar A/B Testing**:
   - Probar diferentes copys en CTAs
   - Experimentar con diseños de landing

4. **Crear dashboards personalizados**:
   - Métricas de engagement
   - Tasas de conversión por fuente
   - Análisis de comportamiento por dispositivo

## Verificación

Para verificar que PostHog está funcionando:
1. Abre las DevTools del navegador
2. Ve a la pestaña Network
3. Filtra por "posthog"
4. Deberías ver peticiones a `https://us.i.posthog.com`
5. En el dashboard de PostHog verás los eventos en tiempo real

## Notas Importantes

- PostHog respeta automáticamente las preferencias de "Do Not Track" del navegador
- Los datos son anónimos por defecto hasta que se use `identify()`
- El tracking está deshabilitado en desarrollo local por defecto (se puede cambiar en la configuración)
- La implementación no usa PostHogProvider de React para evitar problemas de SSR en Next.js
- PostHog se inicializa globalmente y está disponible en toda la aplicación