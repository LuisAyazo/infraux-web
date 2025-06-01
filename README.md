# 🚀 InfraUX Landing Page

<div align="center">

![InfraUX Logo](https://img.shields.io/badge/InfraUX-Cloud%20Infrastructure%20Platform-9333ea?style=for-the-badge&logo=cloud&logoColor=white)

**Visualiza y Despliega tu Infraestructura Cloud sin Esfuerzo**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

[🌐 Demo en Vivo](https://infraux.vercel.app) · [📖 Documentación](https://docs.infraux.com) · [🐛 Reportar Bug](https://github.com/infraux/landing/issues) · [✨ Solicitar Feature](https://github.com/infraux/landing/issues)

</div>

---

## ✨ Características Principales

### 🎨 **Diseño Moderno y Profesional**
- ✅ **Interfaz elegante** con animaciones suaves y transiciones fluidas
- ✅ **Responsive design** optimizado para desktop, tablet y móvil
- ✅ **Modo oscuro/claro** con transiciones automáticas
- ✅ **Gradientes dinámicos** y efectos visualales avanzados

### 🚀 **Rendimiento Optimizado**
- ✅ **Next.js 14** con App Router para máximo rendimiento
- ✅ **TypeScript** para desarrollo type-safe
- ✅ **Tailwind CSS v3** para estilos optimizados y consistentes
- ✅ **Animaciones CSS** nativas para fluidez

### 📱 **Experiencia de Usuario Excepcional**
- ✅ **Navegación intuitiva** con scroll suave entre secciones
- ✅ **Pricing interactivo** con toggle mensual/anual
- ✅ **Testimonios dinámicos** con efectos hover
- ✅ **Call-to-actions** prominentes y conversivos

---

## 🏗️ Arquitectura del Proyecto

```
landingPage/
├── 📁 src/
│   ├── 📁 app/                    # App Router de Next.js
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Página principal
│   │   └── globals.css           # Estilos globales
│   ├── 📁 components/
│   │   ├── ThemeProvider.tsx     # Proveedor de tema
│   │   ├── ThemeToggle.tsx       # Toggle modo oscuro/claro
│   │   └── 📁 landing/           # Componentes de la landing
│   │       ├── Header.tsx        # Navegación y botones auth
│   │       ├── Pricing.tsx       # Sección de precios
│   │       ├── Testimonials.tsx  # Testimonios de usuarios
│   │       ├── Footer.tsx        # Pie de página
│   │       └── ... (otros)       # Más componentes
├── 📁 public/                    # Assets estáticos
├── tailwind.config.ts           # Configuración Tailwind
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

---

## 🚀 Inicio Rápido

### 📋 Prerrequisitos

- **Node.js** 18.17+ 
- **npm** 9+ o **yarn** 1.22+
- **Git** para clonar el repositorio

### ⚡ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/infraux/landing-page.git
   cd landing-page
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o con yarn
   yarn dev
   ```

4. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la landing page en acción.

---

## 🎨 Sistema de Colores

Nuestro diseño utiliza una paleta de colores cuidadosamente seleccionada:

```css
/* Colores principales */
--cloud-blue: #0ea5e9      /* Elementos de navegación */
--electric-purple: #a855f7  /* CTAs principales */
--emerald-green: #10b981   /* Elementos de éxito */

/* Gradientes */
background: linear-gradient(to right, #a855f7, #10b981)
```

### 🎯 Uso de Colores
- **Cloud Blue** → Navegación, enlaces, elementos informativos
- **Electric Purple** → Botones primarios, CTAs, elementos destacados
- **Emerald Green** → Estados de éxito, confirmaciones, elementos positivos

---

## 🧩 Componentes Principales

### 📄 **Landing Page Sections**

| Componente | Descripción | Características |
|------------|-------------|-----------------|
| `Header` | Navegación principal | Login/registro, menú móvil, scroll sticky |
| `Hero` | Sección principal | CTA prominente, estadísticas, animaciones |
| `Pricing` | Planes y precios | 3 tiers, toggle mensual/anual, comparación |
| `Testimonials` | Opiniones de usuarios | Avatars dinámicos, ratings, quotes |
| `Footer` | Pie de página | Enlaces organizados, redes sociales |

### 🎭 **Animaciones Disponibles**

```typescript
// Animaciones principales
'fade-in-up'     // Entrada desde abajo con fade
'bounce-in'      // Entrada con efecto rebote
'float'          // Flotación continua
'slide-up'       // Deslizamiento hacia arriba
'gradient-shift' // Cambio de gradiente animado
```

---

## 📱 Responsive Breakpoints

```typescript
// Breakpoints de Tailwind CSS
sm: '640px'   // Móviles grandes
md: '768px'   // Tablets
lg: '1024px'  // Desktop pequeño
xl: '1280px'  // Desktop estándar
2xl: '1536px' // Desktop grande
```

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter de código
npm run type-check   # Verificación de tipos TypeScript
```

---

## 🔧 Configuración

### ⚙️ **Tailwind CSS**

El proyecto utiliza Tailwind CSS v3 con configuración personalizada:

```typescript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { /* Paleta personalizada */ },
      animation: { /* Animaciones personalizadas */ },
      fontFamily: { /* Tipografías */ }
    }
  }
}
```

### 🌙 **Modo Oscuro**

Implementación automática con persistencia:

```tsx
// Uso en componentes
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">
    Título que cambia con el tema
  </h1>
</div>
```

---

## 🚀 Despliegue

### 📦 **Vercel (Recomendado)**

1. **Push a GitHub**
   ```bash
   git add .
   git commit -m "feat: landing page lista para deploy"
   git push origin main
   ```

2. **Conecta con Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Deploy automático ✨

### 🐳 **Docker**

```dockerfile
# Dockerfile incluido para containerización
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📈 Métricas de Rendimiento

### ⚡ **Core Web Vitals**
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)

### 🎯 **Optimizaciones Implementadas**
- ✅ **Lazy loading** de imágenes
- ✅ **Code splitting** automático
- ✅ **Compresión** de assets
- ✅ **Prefetch** de rutas críticas

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

### 📝 **Proceso de Contribución**

1. **Fork el repositorio**
2. **Crea una rama feature**
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. **Commit tus cambios**
   ```bash
   git commit -m "feat: añadir nueva característica"
   ```
4. **Push a la rama**
   ```bash
   git push origin feature/nueva-caracteristica
   ```
5. **Abre un Pull Request**

### 🎨 **Convenciones de Código**

- **TypeScript** obligatorio para nuevos componentes
- **Tailwind CSS** para todos los estilos
- **Kebab-case** para nombres de archivos
- **PascalCase** para componentes React

---

## 📚 Recursos Útiles

### 🔗 **Enlaces Importantes**
- [Next.js Docs](https://nextjs.org/docs) - Framework principal
- [Tailwind CSS](https://tailwindcss.com/docs) - Framework de estilos
- [Heroicons](https://heroicons.com/) - Librería de iconos
- [Vercel](https://vercel.com/docs) - Plataforma de despliegue

### 🎓 **Tutoriales Recomendados**
- [Next.js 14 App Router](https://nextjs.org/docs/app)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

<div align="center">

Desarrollado con ❤️ por el equipo de **InfraUX**

[🌐 Website](https://infraux.com) · [📧 Email](mailto:team@infraux.com) · [🐦 Twitter](https://twitter.com/infraux)

</div>

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, danos una estrella!

**InfraUX** - Transformando la complejidad de la nube en simplicidad visual

</div>
