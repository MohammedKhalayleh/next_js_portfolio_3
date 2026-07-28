'use client';

import { cn } from '@/lib/constants';
import SkillChip from '@/components/skills/SkillChip';

export default function SkillDomainCard({ domain, skills = [], featuredProject, prefersReducedMotion }) {
  if (!skills || skills.length === 0) return null;

  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-light-surface/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700/80 dark:bg-dark-surface/95 dark:text-white',
        !prefersReducedMotion && 'animate-fade-in'
      )}
      aria-labelledby={`domain-${domain.key}`}
    >
      <div aria-hidden="true" className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-primary-light/40 to-transparent opacity-40 dark:via-primary-dark/30" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
          {domain.icon}
        </div>
        <div>
          <h3 id={`domain-${domain.key}`} className="text-lg font-semibold text-slate-900 dark:text-white">
            {domain.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {domain.description}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip key={`${domain.key}-${skill.id}`} skill={skill} />
        ))}
      </ul>

      {featuredProject && (
        <div className="mt-5 border-t border-slate-200/80 pt-4 text-sm text-slate-500 dark:border-slate-700/80 dark:text-slate-400">
          <span className="font-semibold text-slate-900 dark:text-white">Featured use:</span>{' '}
          {featuredProject}
        </div>
      )}
    </article>
  );
}
