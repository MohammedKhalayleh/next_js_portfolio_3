import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignalPath from '@/components/SignalPath';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import { getPortfolioContent, getSkills } from '@/lib/content';

export const metadata = {
  title: 'Mohammad Khalayleh | Computer Engineer',
  description: 'FPGA design, embedded systems, and full-stack development portfolio',
  openGraph: {
    title: 'Mohammad Khalayleh',
    description: 'Computer Engineer - FPGA & Hardware Design | Full-Stack Development',
    type: 'website',
  },
};

export default function Home() {
  const content = getPortfolioContent();
  const skills = getSkills();

  return (
    <>
      <Header />
      <SignalPath />
      <main id="main-content" className="relative z-0">
        <Hero content={content} />
        <AboutSection content={content} />
        <ProjectsSection projects={content.projects} />
        <EducationSection education={content.education} />
        <CertificatesSection certificates={content.certificates} />
        <SkillsSection skills={skills} />
        {/* <ExperienceSection /> */}
        <ContactSection content={content} />
      </main>
      {/* <Footer /> */}
    </>
  );
}
