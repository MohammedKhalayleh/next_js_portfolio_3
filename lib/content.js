import contentData from '../data/mohammad_portfolio_content.json';
import { PortfolioContentSchema } from './schema.js';

let cachedContent = null;

export function getPortfolioContent() {
  if (cachedContent) {
    return cachedContent;
  }

  try {
    const validated = PortfolioContentSchema.parse(contentData || getDefaultContent());
    cachedContent = validated;
    return validated;
  } catch (error) {
    console.error('Error loading portfolio content:', error);
    return getDefaultContent();
  }
}

export function getSkills() {
  const content = getPortfolioContent();
  return normalizeSkills(content.skills || []);
}

export function normalizeSkills(skills = []) {
  return Array.isArray(skills)
    ? skills
        .map((skill, index) => normalizeSkill(skill, index))
        .filter(Boolean)
    : [];
}

function normalizeSkill(rawSkill, fallbackIndex) {
  if (!rawSkill) return null;

  const skill = typeof rawSkill === 'string' ? { name: rawSkill } : rawSkill;
  const name = typeof skill.name === 'string' ? skill.name.trim() : '';
  if (!name) return null;

  const normalizedCategory = typeof skill.category === 'string' && skill.category.trim()
    ? skill.category.trim()
    : 'Additional Engineering Areas';

  const normalizedLevel = typeof skill.level === 'string' && skill.level.trim()
    ? skill.level.trim()
    : undefined;

  const normalizedExperience = typeof skill.experienceType === 'string' && skill.experienceType.trim()
    ? skill.experienceType.trim()
    : undefined;

  return {
    id: typeof skill.id === 'string' && skill.id.trim()
      ? skill.id.trim()
      : slugify(name) || `skill-${fallbackIndex}`,
    name,
    level: normalizedLevel,
    category: normalizedCategory,
    experienceType: normalizedExperience,
  };
}

function slugify(value) {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getProjectBySlug(slug) {
  const content = getPortfolioContent();
  return content.projects.find(p => p.slug === slug);
}

export function getCertificateById(id) {
  const content = getPortfolioContent();
  return content.certificates.find(c => c.id === id);
}

export function getExperienceVisible() {
  const content = getPortfolioContent();
  return content.experience.filter(e => !e.isPlaceholder);
}

function getDefaultContent() {
  return {
    personal: {
      name: 'Mohammad Khalayleh',
      title: 'Computer Engineer',
      subtitle: 'FPGA & Hardware Design | Full-Stack Development',
      summary: 'Computer Engineering graduate with expertise in FPGA design, embedded systems, and full-stack development.',
      location: 'Jerusalem, Israel',
      availability: 'Available',
    },
    about: {
      label: 'About',
      heading: 'About Me',
      paragraphs: [],
      careerDirection: '',
      highlights: [],
      technicalFocus: [],
    },
    skills: [],
    education: [],
    experience: [],
    projects: [],
    certificates: [],
    languages: [
      { language: 'Arabic', level: 'Native' },
      { language: 'English', level: 'Intermediate' },
      { language: 'Hebrew', level: 'Intermediate' },
    ],
    social: {},
    contact: {},
  };
}
