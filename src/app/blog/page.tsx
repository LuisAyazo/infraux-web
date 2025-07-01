import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo-config';
import BrandName from '@/components/BrandName';

export const metadata: Metadata = pageMetadata.content.blog();

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <BrandName />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/producto" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Producto
              </Link>
              <Link href="/precios" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Precios
              </Link>
              <Link href="/blog" className="text-gray-900 dark:text-white font-medium">
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Blog de <BrandName />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Artículos técnicos, mejores prácticas y actualizaciones sobre el futuro de la infraestructura como código
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Artículos Destacados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg text-white h-full transform transition-transform group-hover:scale-[1.02]">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm opacity-90">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-white/90 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-sm font-semibold">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm opacity-75">{post.author.role}</p>
                          </div>
                        </div>
                        <time className="text-sm opacity-75">
                          {new Date(post.date).toLocaleDateString('es-ES', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Todos los Artículos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'Técnico' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        post.category === 'Producto' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        post.category === 'Desarrollo' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                        post.category === 'Visión' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {post.author.name}
                        </span>
                      </div>
                      <time className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            No te pierdas ningún artículo
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Suscríbete a nuestro newsletter y recibe las últimas novedades sobre <BrandName /> y el mundo de la infraestructura como código
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-[#374151] dark:text-white">Infra</span>
                <span className="text-emerald-500">UX</span>
              </Link>
              <p className="mt-2">Infraestructura visual para todos</p>
            </div>
            <div className="flex gap-6">
              <Link href="/producto" className="hover:text-white">Producto</Link>
              <Link href="/precios" className="hover:text-white">Precios</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/contacto" className="hover:text-white">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}