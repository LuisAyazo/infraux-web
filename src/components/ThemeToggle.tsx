'use client'

import { useTheme } from '@/components/ThemeProvider' // Corrected path
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline' // Using Heroicons
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder or null during server-side rendering/hydration mismatch
    return <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />;
  }

  const handleToggle = () => {
    // A more explicit toggle: light -> dark -> system -> light
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else { // theme is 'system' or undefined
      setTheme('light')
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-electric-purple]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      {theme === 'light' && <SunIcon className="w-6 h-6 text-[--color-electric-purple]" />}
      {theme === 'dark' && <MoonIcon className="w-6 h-6 text-[--color-electric-purple-light]" />}
      {theme === 'system' && <ComputerDesktopIcon className="w-6 h-6 text-[--color-cloud-blue]" />}
    </button>
  )
}
