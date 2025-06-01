import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cloud-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'electric-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        'emerald-green': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.6s ease-out 0.1s forwards',
        'fade-in-delay-2': 'fade-in 0.6s ease-out 0.2s forwards',
        'fade-in-delay-3': 'fade-in 0.6s ease-out 0.3s forwards',
        'fade-in-delay-4': 'fade-in 0.6s ease-out 0.4s forwards',
        'fade-in-delay-5': 'fade-in 0.6s ease-out 0.5s forwards',
        'fade-in-delay-6': 'fade-in 0.6s ease-out 0.6s forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-up-delay-1': 'slide-up 0.6s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slide-up 0.6s ease-out 0.2s forwards',
        'slide-up-delay-3': 'slide-up 0.6s ease-out 0.3s forwards',
        'slide-up-delay-4': 'slide-up 0.6s ease-out 0.4s forwards',
        'slide-up-delay-5': 'slide-up 0.6s ease-out 0.5s forwards',
        'slide-up-delay-6': 'slide-up 0.6s ease-out 0.6s forwards',
        'bounce-in': 'bounce-in 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 1.5s infinite',
        'subtle-hover': 'subtle-hover 0.3s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'slide-infinite': 'slide-infinite 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
        'slide-left': 'slide-left 30s linear infinite',
        'slide-right': 'slide-right 35s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '50%': { transform: 'scale(1.02) translateY(-5px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'subtle-hover': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-3px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-infinite': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config