'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { StarIcon } from '@heroicons/react/24/solid';

interface GitHubStarsButtonProps {
  repo?: string;
  className?: string;
}

export default function GitHubStarsButton({ 
  repo = 'infraux/infraux',
  className = ''
}: GitHubStarsButtonProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStars, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [repo]);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${className}`}
      aria-label="Star on GitHub"
    >
      <FaGithub className="h-5 w-5" />
      <span className="text-sm font-semibold">Star</span>
      
      {!loading && stars !== null && (
        <>
          <div className="w-px h-4 bg-slate-700 dark:bg-slate-300" />
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-bold">{formatStars(stars)}</span>
          </div>
        </>
      )}
    </a>
  );
}