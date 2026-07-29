import { getPortfolioContent } from '@/lib/content';
import ProjectsSection from '@/components/ProjectsSection';

export const metadata = {
  title: 'Projects',
  description: 'Selected FPGA, hardware, software, systems, and networking projects by Mohammad Khalayleh.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const content = getPortfolioContent();
  const projects = content.projects || [];

  return <main className="min-h-screen pt-20"><ProjectsSection projects={projects} /></main>;
}
