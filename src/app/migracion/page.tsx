import { Metadata } from 'next';
import MigrationClient from '../migration/MigrationClient';

export const metadata: Metadata = {
  title: 'Guías de Migración - InfraUX',
  description: 'Migra desde Terraform, Ansible, Pulumi y otras herramientas a InfraUX con nuestras guías paso a paso.',
};

export default function MigracionPage() {
  return <MigrationClient />;
}