import { getPortfolioContent, getProjectBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription || project.overview,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export function generateStaticParams() {
  return (getPortfolioContent().projects || [])
    .filter((project) => typeof project.slug === 'string' && project.slug.trim())
    .map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 px-4 py-20">
      <div className="container-main max-w-4xl">
        <header className="mb-12">
          <Link href="/projects" className="text-primary-light dark:text-primary-dark hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-4 text-light-text dark:text-dark-text">
            {project.title}
          </h1>
          <p className="text-xl text-light-muted dark:text-dark-muted">
            {project.purpose}
          </p>
        </header>

        <div className="space-y-12">
          {/* Executive Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-light-text dark:text-dark-text">
              Overview
            </h2>
            <div className="card space-y-4">
              <p className="text-light-text dark:text-dark-text leading-relaxed">
                {project.overview}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-primary-light dark:text-primary-dark">Role</p>
                  <p className="text-light-text dark:text-dark-text">{project.role}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-light dark:text-primary-dark">Status</p>
                  <p className="text-light-text dark:text-dark-text">{project.status}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              Engineering Problem
            </h2>
            <div className="card">
              <p className="text-light-text dark:text-dark-text leading-relaxed">
                {project.problem}
              </p>
            </div>
          </section>

          {/* Constraints & Requirements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              Constraints & Requirements
            </h2>
            <div className="card">
              <p className="text-light-text dark:text-dark-text leading-relaxed">
                {project.constraints}
              </p>
            </div>
          </section>

          {/* More sections */}
          {project.architecture && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
                System Architecture
              </h2>
              <div className="card">
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </section>
          )}

          {project.verification && (
            <section>
              <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
                Verification & Testing
              </h2>
              <div className="card">
                <p className="text-light-text dark:text-dark-text leading-relaxed">
                  {project.verification}
                </p>
              </div>
            </section>
          )}

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <section className="flex gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                  Live Demo
                </a>
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
