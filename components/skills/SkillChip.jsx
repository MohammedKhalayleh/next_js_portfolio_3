'use client';

import { cn } from '@/lib/constants';

export default function SkillChip({ skill }) {
  if (!skill || !skill.name) return null;

  return (
    <li
      className={cn(
        'inline-flex max-w-full flex-col gap-1 rounded-2xl border border-slate-200/80 bg-slate-100/90 px-3 py-2 text-left text-[0.92rem] leading-tight text-slate-900 shadow-sm transition duration-200 hover:border-primary-light dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-100',
        skill.level && 'group-hover:border-primary-light'
      )}
      aria-label={
        skill.level
          ? `${skill.name}, ${skill.level}`
          : skill.name
      }
    >
      <span className="font-medium">{skill.name}</span>
      {skill.level && (
        <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          {skill.level}
        </span>
      )}
      {skill.experienceType && (
        <span className="text-[10px] text-slate-500 dark:text-slate-400">
          {skill.experienceType}
        </span>
      )}
    </li>
  );
}
