'use client';

import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';
import { getPortfolioContent } from '@/lib/content';

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const content = getPortfolioContent();
  const personal = content.personal || {};

  return (
    <section id="about" className="py-20 px-4 bg-light-surface/50 dark:bg-dark-surface/50">
      <div className="container-main">
        <h2 className="text-4xl font-bold mb-12 text-light-text dark:text-dark-text">
          Architecture
        </h2>

        <div className={cn(
          'card space-y-6',
          !prefersReducedMotion && 'animate-fade-in'
        )}>
          <div>
            <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-4">
              Professional Profile
            </h3>
            <p className="text-lg text-light-text dark:text-dark-text leading-relaxed max-w-3xl">
              {personal.summary}
            </p>
          </div>

          {content.languages && content.languages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {content.languages.map((lang) => (
                  <span
                    key={lang.language}
                    className="px-4 py-2 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-medium"
                  >
                    {lang.language}
                    <span className="text-light-muted dark:text-dark-muted ml-2">
                      {lang.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
