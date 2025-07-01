import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostById } from '@/lib/blog';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogPostSchema } from './BlogPostSchema';
import Breadcrumbs from '@/components/Breadcrumbs';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostById(slug);
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    };
  }

  return {
    title: `${post.title} | InfraUX Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostById(slug);

  if (!post) {
    notFound();
  }

  // Generate Schema.org structured data
  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    author: post.author,
    tags: post.tags,
    slug: slug
  });

  // Convertir el contenido HTML a Markdown para mejor procesamiento
  const markdownContent = post.content
    .replace(/<h2>/g, '\n## ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<h3>/g, '\n### ')
    .replace(/<\/h3>/g, '\n')
    .replace(/<h4>/g, '\n#### ')
    .replace(/<\/h4>/g, '\n')
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<ul>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol>/g, '\n')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li>/g, '- ')
    .replace(/<\/li>/g, '\n')
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<em>/g, '*')
    .replace(/<\/em>/g, '*')
    .replace(/<blockquote>/g, '\n> ')
    .replace(/<\/blockquote>/g, '\n')
    .replace(/<pre><code>/g, '\n```\n')
    .replace(/<\/code><\/pre>/g, '\n```\n')
    .replace(/<code>/g, '`')
    .replace(/<\/code>/g, '`')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Limpiar espacios múltiples
    .trim();

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#374151] dark:text-white">Infra</span>
              <span className="text-emerald-500">UX</span>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Volver al Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${slug}` }
          ]}
        />
        
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {post.excerpt}
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Article Content with improved formatting */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <BlogPost content={markdownContent} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ver todos los posts
            </Link>
          </div>
        </nav>
      </article>
    </div>
    </>
  );
}