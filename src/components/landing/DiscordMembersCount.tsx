'use client';

import React, { useState, useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DiscordMembersCount() {
  const { language } = useLanguage();
  const [memberCount, setMemberCount] = useState<number>(0);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscordStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // In a real implementation, this would fetch from Discord API or a backend service
        // For now, we'll simulate with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in production, replace with actual Discord API call
        setMemberCount(12543);
        setOnlineCount(3421);
      } catch (err) {
        console.error('Error fetching Discord stats:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback values
        setMemberCount(12500);
        setOnlineCount(3400);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordStats();

    // Update online count periodically to simulate real-time updates
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const variation = Math.floor(Math.random() * 100) - 50;
        return Math.max(3000, Math.min(4000, prev + variation));
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat(language === 'es' ? 'es-ES' : 'en-US').format(num);
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <FaDiscord className="h-8 w-8" />
          Discord
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
            {formatNumber(onlineCount)} {language === 'es' ? 'en línea' : 'online'}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-black mb-2">
          {formatNumber(memberCount)}
        </div>
        <p className="text-indigo-100 text-sm">
          {language === 'es' ? 'Miembros activos' : 'Active members'}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-indigo-100">
            {language === 'es' ? '💬 Canales activos' : '💬 Active channels'}
          </span>
          <span className="font-semibold">45+</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-indigo-100">
            {language === 'es' ? '🌍 Idiomas soportados' : '🌍 Supported languages'}
          </span>
          <span className="font-semibold">12</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-indigo-100">
            {language === 'es' ? '🎯 Tiempo de respuesta' : '🎯 Response time'}
          </span>
          <span className="font-semibold">&lt; 1h</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-indigo-400/30">
        <a
          href="https://discord.gg/infraux"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full justify-center"
        >
          {language === 'es' ? 'Únete a la comunidad' : 'Join the community'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}