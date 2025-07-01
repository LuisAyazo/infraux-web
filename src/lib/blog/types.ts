export interface Author {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  week: number;
  month: string;
  year: number;
  category: 'Técnico' | 'Producto' | 'Desarrollo' | 'Visión' | 'Seguridad';
  author: Author;
  tags: string[];
  readTime: string;
  featured: boolean;
  images?: string[];
  relatedPosts?: string[];
}