'use client';

import React, { useEffect, useState } from 'react';
import { 
  CodeBracketIcon,
  ArrowPathIcon,
  TagIcon,
  ClockIcon,
  UserIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

interface Release {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  author: {
    login: string;
    avatar_url: string;
  };
}

interface GitHubActivityFeedProps {
  repo?: string;
  showCommits?: boolean;
  showReleases?: boolean;
  maxItems?: number;
  className?: string;
}

export default function GitHubActivityFeed({
  repo = 'infraux/infraux',
  showCommits = true,
  showReleases = true,
  maxItems = 5,
  className = ''
}: GitHubActivityFeedProps) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'commits' | 'releases'>('commits');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (showCommits) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${repo}/commits?per_page=${maxItems}`
          );
          if (commitsResponse.ok) {
            const commitsData = await commitsResponse.json();
            setCommits(commitsData);
          }
        }

        if (showReleases) {
          const releasesResponse = await fetch(
            `https://api.github.com/repos/${repo}/releases?per_page=${maxItems}`
          );
          if (releasesResponse.ok) {
            const releasesData = await releasesResponse.json();
            setReleases(releasesData);
          }
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh every 10 minutes
    const interval = setInterval(fetchData, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [repo, showCommits, showReleases, maxItems]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return `hace ${diffInMinutes} minutos`;
    } else if (diffInHours < 24) {
      return `hace ${diffInHours} horas`;
    } else if (diffInHours < 48) {
      return 'ayer';
    } else {
      return date.toLocaleDateString('es-ES', { 
        day: 'numeric',
        month: 'short'
      });
    }
  };

  const truncateMessage = (message: string, maxLength: number = 80): string => {
    const firstLine = message.split('\n')[0];
    if (firstLine.length <= maxLength) return firstLine;
    return firstLine.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className={`bg-white dark:bg-slate-800 rounded-xl p-6 ${className}`}>
        <div className="flex items-center justify-center py-8">
          <ArrowPathIcon className="h-8 w-8 text-slate-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FaGithub className="h-6 w-6" />
            Actividad en GitHub
          </h3>
          <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            Ver en GitHub
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>
        
        {/* Tabs */}
        {showCommits && showReleases && (
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('commits')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'commits'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <CodeBracketIcon className="h-4 w-4 inline mr-2" />
              Commits
            </button>
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'releases'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <TagIcon className="h-4 w-4 inline mr-2" />
              Releases
            </button>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {activeTab === 'commits' && commits.length > 0 && (
          <div className="space-y-4">
            {commits.map((commit) => (
              <a
                key={commit.sha}
                href={commit.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {truncateMessage(commit.commit.message)}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <UserIcon className="h-3 w-3" />
                        {commit.commit.author.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {formatDate(commit.commit.author.date)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded font-mono">
                      {commit.sha.substring(0, 7)}
                    </code>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        
        {activeTab === 'releases' && releases.length > 0 && (
          <div className="space-y-4">
            {releases.map((release) => (
              <a
                key={release.id}
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TagIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {release.name || release.tag_name}
                      </h4>
                      <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                        {release.tag_name}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2">
                      {release.body}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <UserIcon className="h-3 w-3" />
                        {release.author.login}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {formatDate(release.published_at)}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        
        {((activeTab === 'commits' && commits.length === 0) || 
          (activeTab === 'releases' && releases.length === 0)) && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            No hay {activeTab === 'commits' ? 'commits' : 'releases'} recientes
          </div>
        )}
      </div>
    </div>
  );
}