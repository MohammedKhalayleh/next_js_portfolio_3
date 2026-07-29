'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

function normalizeImages(images, projectTitle) {
  if (!Array.isArray(images)) return [];

  return images
    .map((image, index) => {
      const src = typeof image === 'string' ? image.trim() : image?.src?.trim();
      if (!src || !src.startsWith('/assets/projects/')) return null;
      return {
        src,
        alt: typeof image === 'object' && typeof image.alt === 'string' && image.alt.trim()
          ? image.alt.trim()
          : `${projectTitle} screenshot ${index + 1}`,
        caption: typeof image === 'object' && typeof image.caption === 'string'
          ? image.caption.trim()
          : '',
      };
    })
    .filter(Boolean);
}

export default function ProjectGallery({ projectId, projectTitle, images }) {
  const screenshots = normalizeImages(images, projectTitle);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();
  const activeImage = screenshots[activeIndex];
  const hasMultiple = screenshots.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [projectId]);

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'nearest' });
  }, [activeIndex, prefersReducedMotion]);

  if (!activeImage) return null;

  const select = (nextIndex) => setActiveIndex((nextIndex + screenshots.length) % screenshots.length);
  const previous = () => select(activeIndex - 1);
  const next = () => select(activeIndex + 1);
  const onKeyDown = (event) => {
    if (!hasMultiple) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); previous(); }
    if (event.key === 'ArrowRight') { event.preventDefault(); next(); }
  };

  return <section className="mt-7 min-w-0" aria-labelledby={`${projectId}-screenshots`} onKeyDown={onKeyDown}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 id={`${projectId}-screenshots`} className="text-sm font-bold text-light-text dark:text-dark-text">Project Screenshots</h3>
      <p className="text-xs font-semibold tabular-nums text-light-muted dark:text-dark-muted" aria-live="polite">{activeIndex + 1} / {screenshots.length}</p>
    </div>
    <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950/60">
      <div className="relative flex aspect-[16/10] min-h-48 items-center justify-center sm:aspect-[16/9]">
        <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 768px) 94vw, (max-width: 1200px) 80vw, 950px" className={cn('object-contain p-1.5 sm:p-3', !prefersReducedMotion && 'animate-fade-in')} />
      </div>
    </div>
    <p className="mt-3 min-h-5 text-sm leading-relaxed text-light-muted dark:text-dark-muted" aria-live="polite">{activeImage.caption}</p>
    {hasMultiple && <>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button type="button" onClick={previous} className="button-ghost inline-flex min-h-11 items-center gap-1.5 px-3 focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark" aria-label="Previous screenshot"><ChevronLeft size={18} /> Previous</button>
        <button type="button" onClick={next} className="button-ghost inline-flex min-h-11 items-center gap-1.5 px-3 focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark" aria-label="Next screenshot">Next <ChevronRight size={18} /></button>
      </div>
      <div className="mt-4 flex max-w-full snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {screenshots.map((screenshot, index) => <button key={screenshot.src} ref={(node) => { thumbnailRefs.current[index] = node; }} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show screenshot ${index + 1}: ${screenshot.alt}`} aria-current={index === activeIndex ? 'true' : undefined} className={cn('relative h-16 w-24 shrink-0 snap-start overflow-hidden rounded-lg border-2 bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 dark:bg-slate-900 dark:focus-visible:ring-primary-dark', index === activeIndex ? 'border-primary-light dark:border-primary-dark' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600')}><Image src={screenshot.src} alt="" fill sizes="96px" className="object-cover" />{index === activeIndex && <span className="absolute inset-x-0 bottom-0 bg-primary-light/90 py-0.5 text-[10px] font-bold text-white dark:bg-primary-dark dark:text-dark-bg">Selected</span>}</button>)}
      </div>
    </>}
  </section>;
}
