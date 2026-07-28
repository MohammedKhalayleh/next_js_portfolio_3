import { getPortfolioContent } from '@/lib/content';

export default function ProjectsPage() {
  const content = getPortfolioContent();
  const projects = content.projects || [];

  return (
    <main className="min-h-screen pt-20 px-4 py-20">
      <div className="container-main">
        <h1 className="text-5xl font-bold mb-12 text-light-text dark:text-dark-text">
          Project Archive
        </h1>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-light-muted dark:text-dark-muted">Projects coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <h2 className="text-xl font-bold text-light-text dark:text-dark-text">
                  {project.title}
                </h2>
                <p className="text-sm text-light-muted dark:text-dark-muted mt-2">
                  {project.purpose}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
