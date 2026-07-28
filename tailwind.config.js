/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme
        light: {
          bg: '#F6F8F7',
          surface: '#FFFFFF',
          text: '#132033',
          muted: '#5D6B7C',
        },
        // Dark theme
        dark: {
          bg: '#08111F',
          surface: '#0D1B2A',
          text: '#EAF1F4',
          muted: '#9FB0BD',
        },
        // Accents
        primary: {
          light: '#0FA678',
          dark: '#32C99A',
        },
        secondary: {
          light: '#2A7F9E',
          dark: '#4FD1C5',
        },
        accent: {
          warm: '#F3B562',
        },
      },
      fontFamily: {
        display: ['Inter Display', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      animation: {
        'signal-pulse': 'signal-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-glow': 'trace-glow 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.32s cubic-bezier(0.21, 0.46, 0.73, 0.88)',
      },
      keyframes: {
        'signal-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'trace-glow': {
          '0%': { 'box-shadow': '0 0 8px rgba(15, 166, 120, 0.3)' },
          '50%': { 'box-shadow': '0 0 16px rgba(15, 166, 120, 0.6)' },
          '100%': { 'box-shadow': '0 0 8px rgba(15, 166, 120, 0.3)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { 
            opacity: '0',
            transform: 'translateY(16px)',
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        base: '300ms',
        'narrative': '700ms',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
