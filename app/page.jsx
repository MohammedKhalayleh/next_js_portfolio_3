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
import StructuredData from '@/components/StructuredData';
import { getPortfolioContent, getSkills } from '@/lib/content';
import { getSiteUrl, siteConfig } from '@/lib/site-config';

export default function Home() {
  const content = getPortfolioContent();
  const skills = getSkills();
  const siteUrl = getSiteUrl();
  const personal = content.personal || {};
  const structuredData = siteUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: siteUrl,
        name: siteConfig.defaultTitle,
        mainEntity: {
          '@type': 'Person',
          name: siteConfig.owner,
          url: siteUrl,
          jobTitle: siteConfig.title,
          description: siteConfig.description,
          ...(personal.profileImage ? { image: new URL(personal.profileImage, siteUrl).toString() } : {}),
          sameAs: [siteConfig.github, siteConfig.linkedin].filter(Boolean),
          knowsAbout: [
            'FPGA Design',
            'SystemVerilog',
            'Hardware Verification',
            'Embedded Systems',
            'Software Development',
            'Computer Networks',
          ],
        },
      }
    : null;

  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
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
      <Footer />
    </>
  );
}
