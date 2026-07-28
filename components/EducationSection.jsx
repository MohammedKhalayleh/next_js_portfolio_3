'use client';

import { formatDate } from '@/lib/constants';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

export default function EducationSection({ education }) {
  const prefersReducedMotion = useReducedMotion();

  if (!education || education.length === 0) return null;

  const sorted = [...education].sort((a, b) => {
    return new Date(b.endDate) - new Date(a.endDate);
  });

  return (
    <section id="education" className="py-20 px-4 bg-light-surface/50 dark:bg-dark-surface/50">
      <div className="container-main">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-light-text dark:text-dark-text">
            Education
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {sorted.map((edu, idx) => (
            <article
              key={edu.id}
              className={cn(
                'rounded-[1.75rem] border border-light-muted/40 dark:border-dark-muted/40 bg-white/90 dark:bg-dark-surface/90 p-8 shadow-lg shadow-primary-light/5 dark:shadow-primary-dark/10 transition-transform duration-300 hover:-translate-y-1',
                !prefersReducedMotion && 'animate-fade-in'
              )}
              style={!prefersReducedMotion ? { animationDelay: `${idx * 70}ms` } : {}}
            >
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.32em] font-semibold text-primary-light dark:text-primary-dark">
                  {edu.institution}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-light-text dark:text-dark-text">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-sm text-light-muted dark:text-dark-muted">
                  {edu.field}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-semibold text-light-text dark:text-dark-text">
                <span className="rounded-full bg-light-bg dark:bg-dark-bg px-3 py-1">
                  {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                </span>
                {edu.location && idx !== 0 && (
                  <span className="rounded-full bg-light-bg dark:bg-dark-bg px-3 py-1">
                    {edu.location.city}, {edu.location.country}
                  </span>
                )}
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6 space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm leading-6 text-light-text dark:text-dark-text">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary-light dark:bg-primary-dark" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
