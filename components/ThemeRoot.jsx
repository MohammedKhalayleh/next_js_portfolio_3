'use client';

import { useReducedMotion, useTheme } from '@/lib/hooks';
import { cn } from '@/lib/constants';

export default function ThemeRoot({ children }) {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return <html lang="en" className={theme === 'dark' ? 'dark' : ''} suppressHydrationWarning><body className={cn('transition-colors duration-300', prefersReducedMotion && 'motion-safe-disabled')} suppressHydrationWarning><a href="#main-content" className="skip-link">Skip to main content</a>{children}</body></html>;
}
