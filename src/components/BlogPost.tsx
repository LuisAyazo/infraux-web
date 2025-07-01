'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface BlogPostProps {
  content: string;
}

export function BlogPost({ content }: BlogPostProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Código con syntax highlighting
        code({ className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          
          // Si es un bloque de código con lenguaje especificado
          if (className && language) {
            return (
              <div className="my-4">
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={language}
                  PreTag="div"
                  className="rounded-lg overflow-hidden"
                  showLineNumbers={true}
                  customStyle={{
                    margin: 0,
                    fontSize: '14px',
                    lineHeight: '1.5',
                  }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          }
          
          // Código inline
          return (
            <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          );
        },
        
        // Tablas mejoradas
        table({ children }: any) {
          return (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {children}
              </table>
            </div>
          );
        },
        
        thead({ children }: any) {
          return (
            <thead className="bg-gray-50 dark:bg-gray-800">
              {children}
            </thead>
          );
        },
        
        tbody({ children }: any) {
          return (
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {children}
            </tbody>
          );
        },
        
        tr({ children }: any) {
          return <tr>{children}</tr>;
        },
        
        th({ children }: any) {
          return (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {children}
            </th>
          );
        },
        
        td({ children }: any) {
          return (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
              {children}
            </td>
          );
        },
        
        // Encabezados
        h1({ children }: any) {
          return (
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              {children}
            </h1>
          );
        },
        
        h2({ children }: any) {
          return (
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              {children}
            </h2>
          );
        },
        
        h3({ children }: any) {
          return (
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              {children}
            </h3>
          );
        },
        
        h4({ children }: any) {
          return (
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              {children}
            </h4>
          );
        },
        
        // Párrafos
        p({ children }: any) {
          return (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {children}
            </p>
          );
        },
        
        // Listas
        ul({ children }: any) {
          return (
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              {children}
            </ul>
          );
        },
        
        ol({ children }: any) {
          return (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              {children}
            </ol>
          );
        },
        
        li({ children }: any) {
          return <li className="ml-4">{children}</li>;
        },
        
        // Blockquotes
        blockquote({ children }: any) {
          return (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300">
              {children}
            </blockquote>
          );
        },
        
        // Links
        a({ href, children }: any) {
          return (
            <a
              href={href}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          );
        },
        
        // Imágenes
        img({ src, alt }: any) {
          return (
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-md my-6 max-w-full h-auto"
            />
          );
        },
        
        // Línea horizontal
        hr() {
          return <hr className="my-8 border-gray-200 dark:border-gray-700" />;
        },
        
        // Pre (contenedor de código)
        pre({ children }: any) {
          return <>{children}</>;
        },
        
        // Divs especiales para cajas de información
        div({ className, children }: any) {
          // Cajas de información especiales
          if (className === 'info-box') {
            return (
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
                {children}
              </div>
            );
          }
          
          if (className === 'warning-box') {
            return (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-4 rounded-r-lg">
                {children}
              </div>
            );
          }
          
          if (className === 'success-box') {
            return (
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
                {children}
              </div>
            );
          }
          
          return <div className={className}>{children}</div>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}