import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // This CSS variable is used in tailwind.config.ts
});

export const metadata: Metadata = {
  title: "InfraUX - Visual Cloud Infrastructure Management",
  description: "Create, visualize, and deploy cloud infrastructure with InfraUX. Supports GCP, AWS, Azure, and integrates with Terraform, Pulumi, Ansible, and CloudFormation for seamless IaC workflows.",
  keywords: "InfraUX, cloud, infrastructure, visual, diagram, IaC, Infrastructure as Code, GCP, AWS, Azure, Terraform, Pulumi, Ansible, CloudFormation, DevOps, cloud management, deployment, automation",
  authors: [{ name: "The InfraUX Team", url: "https://www.infraux.com" }], // Replace with actual URL
  creator: "The InfraUX Team",
  publisher: "InfraUX",
  openGraph: {
    title: "InfraUX: Intuitive Cloud Infrastructure by Diagramming",
    description: "Design, build, and manage your cloud resources on GCP, AWS, and Azure using a powerful visual editor. Export to Terraform, Pulumi, and more.",
    type: "website",
    locale: "es_CO", // Based on initial prompt language
    url: "https://www.infraux.com", // Replace with actual domain
    siteName: "InfraUX",
    images: [
      {
        url: 'https://www.infraux.com/og-image.png', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'InfraUX Visual Cloud Editor Interface',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfraUX", // Replace with actual Twitter handle
    creator: "@InfraUX_Team", // Replace if different
    title: "InfraUX - Visual IaC for Modern Cloud Teams",
    description: "Stop wrestling with complex IaC code. Start diagramming your cloud infrastructure with InfraUX.",
    images: ['https://www.infraux.com/twitter-image.png'], // Replace with actual Twitter card image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Standard favicon
    apple: '/apple-touch-icon.png', // For Apple devices
    // other: [ // Example for different sizes or types
    //   { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    //   { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    // ],
  },
  // manifest: '/site.webmanifest', // If you have a web app manifest
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
      <body className={`${inter.className} antialiased`}> {/* Inter font class + antialiased */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="infraux-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
