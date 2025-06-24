import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientOnly from "@/components/ClientOnly";
import { PostHogProviderWrapper } from "@/providers/PostHogProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
// import { Analytics } from "@/components/Analytics";
// import {
//   organizationSchema,
//   softwareApplicationSchema,
//   websiteSchema,
//   breadcrumbSchema,
//   faqSchema
// } from "@/lib/structured-data";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // This CSS variable is used in tailwind.config.ts
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infraux.com'),
  title: {
    default: "InfraUX - Visualiza y Despliega tu Infraestructura Cloud sin Esfuerzo",
    template: "%s | InfraUX - Cloud Infrastructure Platform"
  },
  description: "🚀 Diseña, crea y gestiona infraestructura en GCP, AWS y Azure mediante diagramas intuitivos. Genera código IaC automáticamente con Terraform, Pulumi, Ansible y CloudFormation. ¡Prueba gratis!",
  keywords: [
    // Palabras clave principales en español
    "infraestructura cloud", "diagrama cloud", "terraform visual", "pulumi visual", "AWS visual", "GCP visual", "Azure visual",
    // Palabras clave en inglés para SEO internacional
    "cloud infrastructure", "visual cloud", "infrastructure as code", "IaC", "terraform", "pulumi", "ansible", "cloudformation",
    // Términos técnicos específicos
    "devops", "cloud automation", "infrastructure diagram", "multi-cloud", "cloud deployment", "infrastructure management",
    // Long-tail keywords
    "diseñar infraestructura cloud visualmente", "generar terraform automáticamente", "herramienta visual devops",
    "plataforma multi-cloud", "automatización infraestructura", "colaboración devops"
  ].join(", "),
  authors: [{ name: "Equipo InfraUX", url: "https://www.infraux.com/team" }],
  creator: "InfraUX Team",
  publisher: "InfraUX",
  category: "Technology",
  classification: "Cloud Infrastructure Software",
  openGraph: {
    title: "InfraUX: Diseña tu Infraestructura Cloud Visualmente | Terraform, AWS, GCP, Azure",
    description: "🎯 Transforma diagramas en código IaC real. Soporte para AWS, GCP, Azure + Terraform, Pulumi, Ansible. Colaboración en tiempo real. Despliegue automático. ¡Empieza gratis hoy!",
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US", "es_ES", "pt_BR"],
    url: "https://www.infraux.com",
    siteName: "InfraUX",
    images: [
      {
        url: '/og-image-main.png',
        width: 1200,
        height: 630,
        alt: 'InfraUX - Plataforma Visual para Infraestructura Cloud con soporte para AWS, GCP, Azure, Terraform y Pulumi',
        type: 'image/png',
      },
      {
        url: '/og-image-features.png',
        width: 1200,
        height: 630,
        alt: 'Funcionalidades de InfraUX: Diseño visual, generación automática de IaC, multi-cloud',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfraUX",
    creator: "@InfraUX_Team",
    title: "InfraUX - De Diagramas a Infraestructura Real en Minutos",
    description: "🚀 Diseña visualmente → Genera IaC automáticamente → Despliega en AWS/GCP/Azure. La herramienta que todo DevOps necesita. #CloudInfrastructure #DevOps #IaC",
    images: ['/twitter-card-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.infraux.com',
    languages: {
      'es-CO': 'https://www.infraux.com',
      'en-US': 'https://www.infraux.com/en',
      'es-ES': 'https://www.infraux.com/es',
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con el código real
    yandex: 'yandex-verification-code', // Si aplica
    yahoo: 'yahoo-verification-code', // Si aplica
  },
  appleWebApp: {
    capable: true,
    title: 'InfraUX',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  abstract: "Plataforma visual para diseñar y desplegar infraestructura cloud con soporte multi-cloud y generación automática de IaC.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#74B4C4' }, // cloud-blue
    { media: '(prefers-color-scheme: dark)', color: '#121826' },  // background.dark
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Optional: for better control over zooming on mobile
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Favicon for production */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data for SEO - Temporarily commented */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        /> */}
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Cartagena" />
        <meta name="ICBM" content="4.7110,-74.0721" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}> {/* Inter font class + antialiased */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="infraux-theme"
        >
          <ClientOnly>
            <PostHogProviderWrapper>
              <LanguageProvider>
                {children}
              </LanguageProvider>
            </PostHogProviderWrapper>
          </ClientOnly>
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
