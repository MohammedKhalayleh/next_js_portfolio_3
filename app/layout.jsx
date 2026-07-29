'use client';

import { useTheme, useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mohammad Khalayleh - Computer Engineer, FPGA Design, Full-Stack Development" />
        <meta name="theme-color" content={theme === 'dark' ? '#08111F' : '#F6F8F7'} />
        <link rel="icon" type="image/x-icon" href="/assets/avatar/favicon.ico" />
        <title>Mohammad Khalayleh | Computer Engineer</title>
      </head>
      <body className={cn(
        'transition-colors duration-300',
        prefersReducedMotion && 'motion-safe-disabled'
      )}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
