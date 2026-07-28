'use client';

import { useReducedMotion } from '@/lib/hooks';
import ProfileImage from './ProfileImage';
import { cn } from '@/lib/constants';

export default function Hero({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const personal = content?.personal || {};

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden"
    >
      {/* Background grid accent */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-main w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,380px)] gap-12 items-center">
          {/* Left Content */}
          <div
            className={cn(
              'space-y-5 text-center lg:text-left max-w-2xl mx-auto lg:mx-0',
              !prefersReducedMotion && 'animate-fade-in'
            )}
          >
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-primary-dark">
                {personal.title}
              </p>
              <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted mt-2">
                {personal.subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-lg leading-relaxed text-light-text dark:text-dark-text max-w-xl">
              {personal.summary}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              {personal.cvFile && (
                <a href={personal.cvFile} target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center gap-2 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9 2a1 1 0 00-1 1v6H6.414a1 1 0 00-.707 1.707l3.293 3.293a1 1 0 001.414 0l3.293-3.293A1 1 0 0013.586 9H11V3a1 1 0 00-1-1z" />
                    <path d="M4 14a1 1 0 011-1h10a1 1 0 011 1v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                  </svg>
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Right Media */}
          <div className={cn(
            'flex justify-center lg:justify-end',
            !prefersReducedMotion && 'animate-fade-in animation-delay-200'
          )}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden border border-primary-light/20 dark:border-primary-dark/20 shadow-2xl shadow-primary-light/10 dark:shadow-primary-dark/10 bg-light-surface/90 dark:bg-dark-surface/90 p-4">
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-primary-light/10 via-transparent to-secondary-light/10 opacity-80 pointer-events-none" />
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-white dark:bg-black shadow-inner shadow-black/5">
                <ProfileImage
                  src={personal.profileImage}
                  alt={personal.name}
                  size="full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
