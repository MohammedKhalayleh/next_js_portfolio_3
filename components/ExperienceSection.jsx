'use client';

import { useReducedMotion } from '@/lib/hooks';
import { formatDate, cn } from '@/lib/constants';
import { getExperienceVisible } from '@/lib/content';

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const experience = getExperienceVisible();

  if (!experience || experience.length === 0) return null;

  const sorted = [...experience].sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container-main">
        <h2 className="mb-12 text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">
          Deployment Log
        </h2>

        <div className="space-y-8">
          {sorted.map((exp, idx) => (
            <div
              key={exp.id}
              className={cn(
                'card relative pl-6 sm:pl-8 border-l-2 border-secondary-light dark:border-secondary-dark',
                !prefersReducedMotion && 'animate-fade-in'
              )}
              style={!prefersReducedMotion ? { animationDelay: `${idx * 50}ms` } : {}}
            >
              <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 bg-secondary-light dark:bg-secondary-dark rounded-full" />

              <div>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                  {exp.title}
                </h3>
                <p className="text-lg font-semibold text-secondary-light dark:text-secondary-dark mt-2">
                  {exp.company}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-3 text-sm text-light-muted dark:text-dark-muted">
                  <span>
                    {formatDate(exp.startDate)} – {exp.isCurrent ? 'Present' : formatDate(exp.endDate)}
                  </span>
                  {exp.isCurrent && (
                    <span className="px-2 py-1 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark text-xs font-mono">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-4 text-light-text dark:text-dark-text">
                  {exp.description}
                </p>

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-light-text dark:text-dark-text flex gap-2">
                        <span className="text-secondary-light dark:text-secondary-dark">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
