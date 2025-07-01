import { BlogPost } from '../types';
import { porQueCreamosInfraUX } from './por-que-creamos-infraux';
import { arquitecturaMultiTenant } from './arquitectura-multi-tenant';
import { construyendoEditorVisual } from './construyendo-editor-visual';
import { terraformVsCloudformation } from './terraform-vs-cloudformation';
import { cicdGithubActionsAws } from './cicd-github-actions-aws';
import { kubernetesProduccionMejoresPracticas } from './kubernetes-produccion-mejores-practicas';
import { seguridadCloudAwsAzureGcp } from './seguridad-cloud-aws-azure-gcp';
import { optimizacionCostosCloud } from './optimizacion-costos-cloud';
import { monitoreoObservabilidadCloud } from './monitoreo-observabilidad-cloud';
import { microserviciosKubernetesServiceMesh } from './microservicios-kubernetes-service-mesh';

// Importar todos los posts aquí
export const blogPosts: BlogPost[] = [
  porQueCreamosInfraUX,
  arquitecturaMultiTenant,
  construyendoEditorVisual,
  terraformVsCloudformation,
  cicdGithubActionsAws,
  kubernetesProduccionMejoresPracticas,
  seguridadCloudAwsAzureGcp,
  optimizacionCostosCloud,
  monitoreoObservabilidadCloud,
  microserviciosKubernetesServiceMesh,
  // Agregar más posts aquí a medida que se creen
];

// Función para obtener todos los posts ordenados por fecha
export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Función para obtener un post por ID
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Función para obtener posts destacados
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Función para obtener posts por categoría
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Función para obtener posts por tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Función para obtener posts relacionados
export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostById(postId);
  if (!currentPost) return [];

  // Encontrar posts con tags similares
  const relatedPosts = blogPosts
    .filter(post => post.id !== postId)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return relatedPosts;
};