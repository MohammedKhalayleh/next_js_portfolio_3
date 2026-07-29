'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/constants';

const PLACEHOLDER = '/assets/projects/project-placeholder.svg';

function imageRecord(value) {
  if (typeof value === 'string' && value.trim()) return { src: value.trim() };
  if (value && typeof value === 'object' && typeof value.src === 'string' && value.src.trim()) return value;
  return null;
}

function selectThumbnail(project) {
  return imageRecord(project.thumbnail) || (Array.isArray(project.images) && project.images.map(imageRecord).find(Boolean)) || null;
}

export default function ProjectThumbnail({ project, featured }) {
  const selected = selectThumbnail(project);
  const [failed, setFailed] = useState(false);
  const isPlaceholder = !selected || failed;
  const src = isPlaceholder ? PLACEHOLDER : selected.src;
  const alt = isPlaceholder ? `Preview coming soon for ${project.title}` : selected.alt || `${project.title} preview`;
  const contain = project.thumbnailFit === 'contain';

  return <div className={cn('relative aspect-video shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900', featured ? 'border-0 lg:w-1/2 lg:border-r lg:border-slate-200/80 lg:dark:border-slate-700/80' : 'border-b border-slate-200/80 dark:border-slate-700/80')}>
    <Image src={src} alt={alt} fill sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px'} className={cn(contain ? (featured ? 'object-contain' : 'object-contain p-2') : 'object-cover object-top')} onError={() => setFailed(true)} />
  </div>;
}
