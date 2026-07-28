'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FolderOpen, X } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

const FILTERS = ['All', 'Hardware', 'Web', 'Mobile', 'Java'];
const GITHUB_PROFILE_URL = 'https://github.com/mohammedkhalayleh';
const PROJECTS_WITHOUT_MEDIA = new Set(['tms', 'pms', 'sprite-animation']);
const STATUS_STYLES = {
  Live: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  Completed: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  'In Progress': 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
  'Academic Project': 'bg-violet-500/10 text-violet-700 dark:text-violet-300',
  'FPGA Implemented': 'bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark',
};

function GitHubIcon({ size = 16 }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12 2.9a9.1 9.1 0 0 0-2.88 17.65c.46.09.62-.2.62-.43v-1.7c-2.53.55-3.06-1.07-3.06-1.07-.41-1.05-1.01-1.33-1.01-1.33-.82-.56.06-.55.06-.55.91.06 1.38.93 1.38.93.8 1.39 2.11.99 2.63.76.08-.6.32-1 .57-1.23-2.02-.23-4.15-1.01-4.15-4.5 0-1 .35-1.81.93-2.45-.1-.23-.4-1.16.09-2.41 0 0 .76-.24 2.5.93a8.65 8.65 0 0 1 4.55 0c1.73-1.17 2.49-.93 2.49-.93.5 1.25.19 2.18.1 2.41.57.64.92 1.45.92 2.45 0 3.5-2.14 4.26-4.17 4.49.33.29.62.85.62 1.72v2.55c0 .24.16.53.63.43A9.1 9.1 0 0 0 12 2.9Z" /></svg>;
}

function StatusBadge({ status }) {
  return <span className={cn('rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]', STATUS_STYLES[status])}>{status}</span>;
}

function ProjectMedia({ project, featured }) {
  if (PROJECTS_WITHOUT_MEDIA.has(project.id)) return null;
  const image = project.coverImage || project.screenshots?.[0]?.src || project.gif;
  if (!image) return null;
  return <div className={cn('relative aspect-[16/9] overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900', featured && 'lg:w-1/2 lg:border-b-0 lg:border-l')}><Image src={image} alt={project.screenshots?.[0]?.alt || `${project.title} preview`} fill sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'} className="object-contain" /></div>;
}

function ProjectDetailsModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const screenshots = PROJECTS_WITHOUT_MEDIA.has(project?.id) ? [] : project?.screenshots || [];
  const temporaryDetails = {
    tms: {
      overview: 'Temporary example: summarize the trip-management workflow and the problem this project was designed to support.',
      implementation: 'Temporary example: add the confirmed React.js and Firebase features, responsibilities, and implementation decisions here.',
      results: 'Temporary example: replace this note with confirmed outcomes, screenshots, or lessons learned.',
    },
    pms: {
      overview: 'Temporary example: summarize the project-management workflow supported by the desktop application.',
      implementation: 'Temporary example: add the confirmed Java and Oracle Database functionality, responsibilities, and design decisions here.',
      results: 'Temporary example: replace this note with confirmed outcomes, screenshots, or lessons learned.',
    },
    'sprite-animation': {
      overview: 'Temporary example: summarize the animation behavior and visual interaction demonstrated by this project.',
      implementation: 'Temporary example: add the confirmed Java, graphics, and animation implementation details here.',
      results: 'Temporary example: replace this note with confirmed outcomes, screenshots, or lessons learned.',
    },
  }[project?.id];
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && screenshots.length > 1) setIndex((value) => (value + 1) % screenshots.length);
      if (event.key === 'ArrowLeft' && screenshots.length > 1) setIndex((value) => (value - 1 + screenshots.length) % screenshots.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [project, onClose, screenshots.length]);
  if (!project) return null;
  const screenshot = screenshots[index];
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4" role="dialog" aria-modal="true" aria-label={`${project.title} details`} onMouseDown={onClose}><div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl dark:bg-dark-surface" onMouseDown={(event) => event.stopPropagation()}><button type="button" onClick={onClose} className="absolute right-6 top-6 z-10 rounded-full bg-slate-950/75 p-2 text-white focus-visible:ring-2 focus-visible:ring-primary-light" aria-label="Close project details"><X size={20} /></button><div className="pr-12"><p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-light dark:text-secondary-dark">{project.category}</p><h2 className="mt-2 text-2xl font-bold text-light-text dark:text-dark-text">{project.title}</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-light-muted dark:text-dark-muted">{project.description || project.purpose}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">{technology}</span>)}</div></div>{temporaryDetails && <div className="mt-6 grid gap-3 sm:grid-cols-3">{Object.entries(temporaryDetails).map(([label, value]) => <section key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/50"><h3 className="text-xs font-bold uppercase tracking-[0.12em] text-secondary-light dark:text-secondary-dark">{label}</h3><p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted">{value}</p></section>)}</div>}{screenshot && <div className="mt-6"><Image src={screenshot.src} alt={screenshot.alt} width={1600} height={900} className="max-h-[60vh] w-full object-contain" /></div>}{screenshots.length > 1 && <div className="mt-3 flex justify-between"><button type="button" onClick={() => setIndex((value) => (value - 1 + screenshots.length) % screenshots.length)} className="button-ghost" aria-label="Previous screenshot"><ChevronLeft size={18} /> Previous</button><button type="button" onClick={() => setIndex((value) => (value + 1) % screenshots.length)} className="button-ghost" aria-label="Next screenshot">Next <ChevronRight size={18} /></button></div>}</div></div>;
}

function ProjectCard({ project, featured, onDetails, prefersReducedMotion, index }) {
  const hasMedia = Boolean(project.coverImage || project.screenshots?.[0]?.src || project.gif);
  return (
    <article
      className={cn(
        'h-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-light-surface shadow-sm shadow-slate-300/10 transition duration-200 hover:-translate-y-0.5 hover:border-primary-light/40 hover:shadow-xl dark:border-slate-700/80 dark:bg-dark-surface dark:shadow-slate-950/10 dark:hover:border-primary-dark/50',
        featured && 'lg:col-span-2',
        featured && hasMedia && 'lg:flex lg:flex-row-reverse',
        !prefersReducedMotion && 'animate-fade-in'
      )}
      style={!prefersReducedMotion ? { animationDelay: `${index * 50}ms` } : undefined}
    >
      <ProjectMedia project={project} featured={featured && hasMedia} />
      <div className={cn('flex h-full flex-col p-5', featured && hasMedia && 'lg:w-1/2')}>
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary-light dark:text-secondary-dark">{project.category}</p>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-3 text-xl font-bold text-light-text dark:text-dark-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted">{project.description || project.purpose}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">{technology}</span>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button type="button" onClick={() => onDetails(project)} className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-primary-light/50 hover:bg-primary-light/5 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-primary-dark/50 dark:hover:bg-primary-dark/10 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40">
            <FolderOpen size={16} />
            Details
          </button>
          <a href={project.githubUrl || GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:border-slate-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white dark:focus-visible:ring-primary-dark" aria-label={project.githubUrl ? `View the GitHub repository for ${project.title}` : `View GitHub profile for ${project.title}`}>
            <GitHubIcon />
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary col-span-2 min-h-10 w-full px-3 py-2 text-sm">
              Preview
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects }) {
  const prefersReducedMotion = useReducedMotion();
  const [filter, setFilter] = useState('All');
  const [detailsProject, setDetailsProject] = useState(null);
  const tabs = useRef([]);
  if (!projects?.length) return null;
  const visibleProjects = projects.filter((project) => filter === 'All' || project.category === filter);
  const moveTab = (event, index) => { if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? FILTERS.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : FILTERS.length - 1)) % FILTERS.length; setFilter(FILTERS[next]); tabs.current[next]?.focus(); };
  return <section id="projects" aria-labelledby="projects-heading" className="px-4 py-20"><div className="container-main"><div className="mb-8 flex items-center justify-between gap-4"><h2 id="projects-heading" className="text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">Projects</h2><Link href="/projects" className="button-ghost">View All</Link></div><div role="tablist" aria-label="Project categories" className="mb-8 flex flex-wrap gap-2">{FILTERS.map((item, index) => <button key={item} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" aria-selected={filter === item} tabIndex={filter === item ? 0 : -1} onClick={() => setFilter(item)} onKeyDown={(event) => moveTab(event, index)} className={cn('rounded-full px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark', filter === item ? 'bg-primary-light text-white dark:bg-primary-dark dark:text-dark-bg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800')}>{item}</button>)}</div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} featured={filter === 'All' && project.featured} onDetails={setDetailsProject} prefersReducedMotion={prefersReducedMotion} index={index} />)}</div></div><ProjectDetailsModal project={detailsProject} onClose={() => setDetailsProject(null)} /></section>;
}
