'use client';

import { Code2, Cpu, Globe2, GraduationCap } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

const HIGHLIGHT_ICONS = {
  graduation: GraduationCap,
  hardware: Cpu,
  software: Code2,
  international: Globe2,
};

function HighlightCard({ title, icon }) {
  const Icon = HIGHLIGHT_ICONS[icon];

  return (
    <li className="flex min-h-14 items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-2 text-[13px] font-semibold leading-snug text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-primary-light/40 hover:shadow-sm dark:border-slate-700/80 dark:bg-slate-950/70 dark:text-slate-100 dark:hover:border-primary-dark/50">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
        <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
      </span>
      <span>{title}</span>
    </li>
  );
}

export default function AboutSection({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const about = content?.about;

  if (!about) return null;

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-light-surface/50 px-4 py-20 dark:bg-dark-surface/50">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:items-start lg:gap-12">
          <div className={cn('max-w-[52.5rem]', !prefersReducedMotion && 'animate-fade-in')}>
            <h2 id="about-heading" className="text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">{about.heading}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className={cn('lg:w-full lg:justify-self-end lg:pt-[4.25rem]', !prefersReducedMotion && 'animate-fade-in')}>
            <ul aria-label="Professional highlights" className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
              {about.highlights.map((highlight) => <HighlightCard key={highlight.title} {...highlight} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
