# Plan de Integración de Mascota Zenix

## Resumen
Este documento detalla el plan para integrar la mascota "Zenix" (un zorro) en diferentes ubicaciones estratégicas del landing page y la aplicación.

## Prompt de IA para Generar la Mascota
```
Create a friendly, modern fox mascot character named "Zenix" for a tech/infrastructure company. The fox should be:
- Minimalist and geometric in design
- Using a color palette of orange, white, and subtle purple accents
- In a sitting position, with a friendly expression
- Suitable for use as a web mascot/assistant
- Clean vector-style illustration
- Transparent background
- The fox should have a tech-savvy appearance while remaining approachable
```

## Ubicaciones Implementadas

### ✅ 1. Hero Section (Página de Inicio) - COMPLETADO
- **Ubicación**: Esquina superior derecha del hero
- **Comportamiento**: Aparece saludando cuando el usuario llega
- **Archivo**: `src/app/page.tsx`
- **Estado**: ✅ Implementado

### ✅ 2. Página de Precios - COMPLETADO Y LUEGO REMOVIDO
- **Ubicación**: Originalmente junto al plan "Team" (más popular)
- **Comportamiento**: Señalaba el plan recomendado
- **Archivos**: `src/app/pricing/page.tsx` y `src/app/precios/page.tsx`
- **Estado**: ❌ Removido por solicitud del usuario (se veía mal)

### ✅ 3. Página de Documentación - COMPLETADO
- **Ubicación**: Botón flotante en la esquina inferior derecha
- **Comportamiento**: Ofrece ayuda contextual
- **Archivo**: `src/app/docs/page.tsx`
- **Estado**: ✅ Implementado

## Ubicaciones Pendientes

### 4. Empty States (Estados vacíos)
- **Ubicación**: Centro de páginas sin contenido
- **Comportamiento**: Mensaje motivacional cuando no hay datos
- **Ejemplo**: "¡Hola! Soy Zenix. Parece que aún no tienes proyectos. ¿Empezamos?"

### 5. Error Pages (Páginas de error)
- **Ubicación**: Páginas 404, 500, etc.
- **Comportamiento**: Mensaje amigable de error
- **Ejemplo**: "¡Ups! Parece que esta página se perdió..."

## Progreso Total: 60% Completado

## Notas de Implementación
- Todas las implementaciones usan `next/image` para optimización
- La mascota está oculta en móviles usando `hidden lg:block`
- Se usa posicionamiento absoluto para no interferir con el layout
- Animaciones suaves con Tailwind CSS

## Archivos de Imagen
- `public/zenix-hero.png` - Imagen para el hero
- `public/zenix-pricing.png` - Imagen para pricing (ya no se usa)
- `public/zenix-help.png` - Imagen para documentación

## Cambios Adicionales Realizados

### 1. Reducción de Planes de Precios
- Se redujo de 5 a 4 planes (Hobby, Starter, Team, Enterprise)
- Se eliminó la sección de precios redundante del home page
- Se actualizaron tanto `/pricing` como `/precios`

### 2. Creación de Página de Precios en Español
- Se creó `/precios` como copia traducida de `/pricing`
- Misma estructura de 4 planes con traducciones completas

### 3. Switch de Idioma
- Se agregó un switch de idioma en el header con GlobeAltIcon
- Detecta el idioma actual basado en la ruta
- Mapeo de rutas entre versiones ES/EN
- Funciona con hover para mostrar dropdown

### 4. Limpieza de Archivos
- Se eliminó `globals-new.css` que causaba confusión
- Se mantiene solo `globals.css` como archivo principal de estilos

### 5. Características de Planes
- Se agregaron las características (highlights) faltantes a cada plan
- Cada plan ahora muestra claramente qué incluye

## Problemas Conocidos
1. Error de hidratación persistente en `page.tsx` - No resuelto completamente
2. El dropdown del switch de idioma puede no responder correctamente al hover en algunos casos