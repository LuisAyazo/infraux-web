'use client';

import React, { useEffect, useState } from 'react';
import { StarIcon, UserGroupIcon, CloudArrowDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '@/contexts/LanguageContext';

interface GitHubStats {
  stars: number;
  contributors: number;
}

interface Stats {
  githubStars: number;
  contributors: number;
  weeklyDownloads: number;
  discordMembers: number;
}

export default function OpenSourceStats() {
  const { language } = useLanguage();
  const [stats, setStats] = useState<Stats>({
    githubStars: 0,
    contributors: 0,
    weeklyDownloads: 0,
    discordMembers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGitHubStats = async () => {
      try {
        // TODO: Replace with actual GitHub repo when public
        const repoResponse = await fetch('https://api.github.com/repos/infraux/infraux');
        if (repoResponse.ok) {
          const repoData = await repoResponse.json();
          
          const contributorsResponse = await fetch('https://api.github.com/repos/infraux/infraux/contributors');
          const contributorsData = contributorsResponse.ok ? await contributorsResponse.json() : [];
          
          setStats(prev => ({
            ...prev,
            githubStars: repoData.stargazers_count || 0,
            contributors: contributorsData.length || 0
          }));
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    // Fetch npm downloads (if published)
    const fetchNpmStats = async () => {
      try {
        // TODO: Replace with actual npm package when published
        const response = await fetch('https://api.npmjs.org/downloads/point/last-week/@infraux/cli');
        if (response.ok) {
          const data = await response.json();
          setStats(prev => ({
            ...prev,
            weeklyDownloads: data.downloads || 0
          }));
        }
      } catch (error) {
        console.error('Error fetching npm stats:', error);
      }
    };

    // For now, use placeholder data until repo is public
    // Remove this and uncomment above when ready
    setStats({
      githubStars: 0,
      contributors: 0,
      weeklyDownloads: 0,
      discordMembers: 0
    });
    setLoading(false);

    // Uncomment when repo is public
    // fetchGitHubStats();
    // fetchNpmStats();
    // setLoading(false);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const statItems = [
    {
      icon: StarIcon,
      value: stats.githubStars,
      label: language === 'es' ? 'Estrellas GitHub' : 'GitHub Stars',
      color: 'from-yellow-500 to-orange-500',
      target: language === 'es' ? 'Meta: 10K+' : 'Goal: 10K+',
      link: 'https://github.com/infraux/infraux'
    },
    {
      icon: UserGroupIcon,
      value: stats.contributors,
      label: language === 'es' ? 'Contribuidores' : 'Contributors',
      color: 'from-purple-500 to-pink-500',
      target: language === 'es' ? 'Meta: 100+' : 'Goal: 100+',
      link: 'https://github.com/infraux/infraux/graphs/contributors'
    },
    {
      icon: CloudArrowDownIcon,
      value: stats.weeklyDownloads,
      label: language === 'es' ? 'Descargas/Semana' : 'Weekly Downloads',
      color: 'from-emerald-500 to-teal-500',
      target: language === 'es' ? 'Meta: 50K+' : 'Goal: 50K+',
      link: 'https://www.npmjs.com/package/@infraux/cli'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      value: stats.discordMembers,
      label: language === 'es' ? 'Miembros Discord' : 'Discord Members',
      color: 'from-blue-500 to-cyan-500',
      target: language === 'es' ? 'Meta: 5K+' : 'Goal: 5K+',
      link: 'https://discord.gg/infraux'
    }
  ];

  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold mb-4">
            <StarIcon className="h-4 w-4" />
            {language === 'es' ? '100% Open Source' : '100% Open Source'}
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Apache 2.0</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {language === 'es' 
              ? 'Únete a la Comunidad Open Source' 
              : 'Join the Open Source Community'
            }
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <a
                key={stat.label}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Value */}
                <div className="relative">
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                    {formatNumber(stat.value)}
                    {stat.value === 0 && (
                      <span className="text-lg font-normal text-slate-400 ml-1">
                        {language === 'es' ? 'pronto' : 'soon'}
                      </span>
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                  
                  {/* Target */}
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    {stat.target}
                  </div>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {language === 'es' 
              ? '¿Quieres contribuir? ' 
              : 'Want to contribute? '
            }
            <a 
              href="https://github.com/infraux/infraux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              {language === 'es' ? 'Visita nuestro GitHub' : 'Visit our GitHub'}
            </a>
            {' '}
            {language === 'es' ? 'o ' : 'or '}
            <a 
              href="https://discord.gg/infraux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              {language === 'es' ? 'únete a Discord' : 'join Discord'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}