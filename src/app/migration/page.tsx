import { Metadata } from 'next';
import MigrationClient from './MigrationClient';

export const metadata: Metadata = {
  title: 'Migration Guides - InfraUX',
  description: 'Migrate from Terraform, Ansible, Pulumi, and other tools to InfraUX with our step-by-step guides.',
};

export default function MigrationPage() {
  return <MigrationClient />;
}