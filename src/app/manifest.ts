import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InfraUX - Visual Cloud Infrastructure Management',
    short_name: 'InfraUX',
    description: 'Create, visualize, and deploy cloud infrastructure with InfraUX. Supports GCP, AWS, Azure, and integrates with Terraform, Pulumi, Ansible, and CloudFormation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0ea5e9',
    theme_color: '#a855f7',
    orientation: 'portrait-primary',
    categories: ['productivity', 'developer', 'business'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
