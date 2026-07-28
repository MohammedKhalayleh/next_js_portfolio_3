'use client';

import Link from 'next/link';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

export default function ProjectsSection({ projects }) {
  const prefersReducedMotion = useReducedMotion();

  if (!projects || projects.length === 0) return null;

  // Show only featured projects on homepage
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container-main">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-light-text dark:text-dark-text">
            Projects
          </h2>
          <Link href="/projects" className="button-ghost">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, idx) => (
            <article
              key={project.id}
              className={cn(
                'card group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary-light dark:hover:border-primary-dark',
                !prefersReducedMotion && 'animate-fade-in'
              )}
              style={!prefersReducedMotion ? { animationDelay: `${idx * 100}ms` } : {}}
            >
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark font-mono">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-secondary-light dark:text-secondary-dark font-mono uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>

                {/* Purpose */}
                <p className="text-sm text-light-text dark:text-dark-text line-clamp-2">
                  {project.purpose}
                </p>

                {/* Role & Metric */}
                <div className="space-y-2 text-sm">
                  <p className="text-light-muted dark:text-dark-muted">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                  {project.metric && (
                    <p className="text-primary-light dark:text-primary-dark">
                      ✓ {project.metric}
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4">
                  {project.caseStudyUrl && (
                    <Link href={`/projects/${project.slug}`} className="button-ghost text-sm flex-1">
                      Case Study
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-ghost text-sm flex-1">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
