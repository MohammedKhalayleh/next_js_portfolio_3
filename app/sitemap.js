import { getPortfolioContent } from '@/lib/content';
import { getSiteUrl } from '@/lib/site-config';

export const dynamic = 'force-static';

const LAST_UPDATED = new Date('2026-07-30T00:00:00.000Z');

export default function sitemap() {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  const projects = getPortfolioContent().projects || [];
  const staticRoutes = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/certificates', changeFrequency: 'monthly', priority: 0.7 },
  ];
  const projectRoutes = projects
    .filter((project) => typeof project.slug === 'string' && project.slug.trim())
    .map((project) => ({ path: `/projects/${project.slug}`, changeFrequency: 'monthly', priority: 0.6 }));

  return [...staticRoutes, ...projectRoutes].map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  }));
}
