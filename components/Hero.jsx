'use client';

import { useReducedMotion } from '@/lib/hooks';
import ProfileImage from './ProfileImage';
import { cn } from '@/lib/constants';
import { Download, Mail } from 'lucide-react';

function GitHubIcon({ size = 21, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 2.9a9.1 9.1 0 0 0-2.88 17.65c.46.09.62-.2.62-.43v-1.7c-2.53.55-3.06-1.07-3.06-1.07-.41-1.05-1.01-1.33-1.01-1.33-.82-.56.06-.55.06-.55.91.06 1.38.93 1.38.93.8 1.39 2.11.99 2.63.76.08-.6.32-1 .57-1.23-2.02-.23-4.15-1.01-4.15-4.5 0-1 .35-1.81.93-2.45-.1-.23-.4-1.16.09-2.41 0 0 .76-.24 2.5.93a8.65 8.65 0 0 1 4.55 0c1.73-1.17 2.49-.93 2.49-.93.5 1.25.19 2.18.1 2.41.57.64.92 1.45.92 2.45 0 3.5-2.14 4.26-4.17 4.49.33.29.62.85.62 1.72v2.55c0 .24.16.53.63.43A9.1 9.1 0 0 0 12 2.9Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 21, strokeWidth = 1.8, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-11Z" />
      <path d="M8.5 10v4.5M8.5 8v.01M11.5 14.5V10m0 1.8c.35-1.45 4-1.65 4 1.25v1.45" />
    </svg>
  );
}

export default function Hero({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const personal = content?.personal || {};
  const social = content?.social || {};
  const email = social.email || personal.email;
  const socialLinks = [
    { label: 'Email', href: email ? `mailto:${email}` : undefined, icon: Mail },
    { label: 'GitHub', href: social.github, icon: GitHubIcon, external: true },
    { label: 'LinkedIn', href: social.linkedin, icon: LinkedInIcon, external: true },
  ].filter((link) => link.href);

  return (
    <section
      id="home"
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
            <div className="flex flex-wrap items-center gap-3 pt-6 justify-center lg:justify-start">
              {personal.cvFile && (
                <a href={personal.cvFile} target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center gap-2 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
                  <Download aria-hidden="true" size={17} strokeWidth={2} />
                   Resume
                </a>
              )}
              <div className="flex shrink-0 items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'flex size-11 items-center justify-center rounded-xl border border-slate-200/80 bg-light-surface text-light-text shadow-sm outline-none transition duration-200 hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-primary-light hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700/80 dark:bg-dark-surface dark:text-dark-text dark:hover:border-primary-dark/50 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40',
                      prefersReducedMotion && 'transition-none'
                    )}
                  >
                    <Icon aria-hidden="true" size={30} strokeWidth={1} />
                  </a>
                ))}
              </div>
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
