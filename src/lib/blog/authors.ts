import { Author } from './types';

export const authors: { [key: string]: Author } = {
  founders: { name: 'Equipo Fundador', role: 'Fundadores de InfraUX' },
  carlos: { name: 'Carlos Rodríguez', role: 'CEO & Co-founder' },
  ana: { name: 'Ana Martínez', role: 'CTO & Co-founder' },
  luis: { name: 'Luis Chen', role: 'CPO & Co-founder' },
  maria: { name: 'María González', role: 'VP of Engineering' },
  // Nuevos autores técnicos
  diego: { name: 'Diego Fernández', role: 'DevOps Engineer', bio: 'Especialista en arquitecturas cloud y automatización' },
  sofia: { name: 'Sofía Vargas', role: 'Cloud Architect', bio: 'Experta en AWS y arquitecturas multi-cloud' },
  miguel: { name: 'Miguel Torres', role: 'SRE Lead', bio: 'Especialista en Kubernetes y sistemas distribuidos' },
  laura: { name: 'Laura Mendoza', role: 'Security Engineer', bio: 'Experta en seguridad cloud y compliance' },
};