import { getPortfolioContent } from '@/lib/content';
import ProjectsSection from '@/components/ProjectsSection';

export default function ProjectsPage() {
  const content = getPortfolioContent();
  const projects = content.projects || [];

  return <main className="min-h-screen pt-20"><ProjectsSection projects={projects} /></main>;
}
