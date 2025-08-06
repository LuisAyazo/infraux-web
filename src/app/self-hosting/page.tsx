import { Metadata } from 'next';
import SelfHostingClient from './SelfHostingClient';

export const metadata: Metadata = {
  title: 'Self-Host InfraUX - Deploy on Your Infrastructure | InfraUX',
  description: 'Install InfraUX on your own infrastructure with Docker, Kubernetes, or Terraform. 100% open source, free forever, full control of your data.',
  keywords: 'self-host, docker, kubernetes, terraform, open source, infrastructure, deployment, on-premise',
  openGraph: {
    title: 'Self-Host InfraUX - Deploy on Your Infrastructure',
    description: 'Install InfraUX on your own infrastructure. 100% open source, free forever.',
    images: ['/og-self-hosting.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Host InfraUX - Deploy on Your Infrastructure',
    description: 'Install InfraUX on your own infrastructure. 100% open source, free forever.',
    images: ['/og-self-hosting.png'],
  },
};

export default function SelfHostingPage() {
  return <SelfHostingClient />;
}