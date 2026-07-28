'use client';

import { cn } from '@/lib/constants';

const expertiseIcons = {
  verilog: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9h8M8 12h8M8 15h8" />
    </svg>
  ),
  fpga: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h10v16H7z" />
      <path d="M11 8h2v8h-2z" />
      <path d="M14 11c0-2 2-2 2-2s-1 1-1 2c0 2-2 2-2 2s1 0 1-2z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="M7 9h4l4 6v-6h2" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8V4z" />
      <path d="M16 20H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h8v8z" />
      <circle cx="9" cy="7" r="1" fill="currentColor" />
      <circle cx="15" cy="17" r="1" fill="currentColor" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
};

export default function PrimaryExpertise({ skills = [], prefersReducedMotion }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="rounded-[2rem] border border-slate-200/80 bg-light-surface/95 p-5 shadow-sm shadow-slate-300/10 transition-colors duration-300 dark:border-slate-700/80 dark:bg-dark-surface/95 dark:shadow-slate-950/10">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Primary expertise</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        Focus areas that highlight core hardware, FPGA, and systems engineering strengths.
      </p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className={cn(
              'group rounded-[1.8rem] border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-950 dark:text-white',
              !prefersReducedMotion && 'animate-fade-in'
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                {expertiseIcons[skill.id] || expertiseIcons.default}
              </div>
              {skill.level && (
                <span className="rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:border-slate-700/80 dark:bg-slate-900 dark:text-slate-300">
                  {skill.level}
                </span>
              )}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
            {skill.experienceType && (
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {skill.experienceType}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
