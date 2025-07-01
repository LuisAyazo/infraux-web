// Re-exportar todo desde la nueva estructura modular
export * from './blog/posts';
export * from './blog/types';
export * from './blog/authors';

// Para mantener compatibilidad con el código existente
import { blogPosts } from './blog/posts';
export { blogPosts };