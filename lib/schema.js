import { z } from 'zod';

const CertificateSchema = z.object({
  id: z.string(),
  title: z.string(),
  issuer: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  file: z.string().optional(),
  preview: z.string().optional(),
  displayOriginal: z.boolean().default(true),
});

const ProjectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  category: z.enum(['Hardware', 'Web', 'Mobile', 'Java']),
  purpose: z.string(),
  description: z.string().optional(),
  role: z.string().optional(),
  technologies: z.array(z.string()),
  metric: z.string().optional(),
  status: z.enum(['Live', 'Completed', 'In Progress', 'Academic Project', 'FPGA Implemented']),
  caseStudyUrl: z.string().optional(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  coverImage: z.string().optional(),
  screenshots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  gif: z.string().optional(),
  video: z.string().optional(),
  featured: z.boolean().default(false),
  previewEnabled: z.boolean().default(false),
  overview: z.string().optional(),
  problem: z.string().optional(),
  constraints: z.string().optional(),
  architecture: z.string().optional(),
  responsibilities: z.string().optional(),
  implementation: z.string().optional(),
  verification: z.string().optional(),
  results: z.string().optional(),
  challenges: z.string().optional(),
  lessonsLearned: z.string().optional(),
  gallery: z.array(z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  })).optional(),
  relatedProjectIds: z.array(z.string()).optional(),
});

const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.enum(['Proficient', 'Advanced', 'Expert']).optional(),
  category: z.string(),
  relatedProjectId: z.string().optional(),
});

const EducationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  startDate: z.string().regex(/^\d{4}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}$/),
  location: z.object({
    city: z.string(),
    country: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
  }),
  achievements: z.array(z.string()).optional(),
});

const ExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  startDate: z.string().regex(/^\d{4}-\d{2}$/),
  endDate: z.string().regex(/^\d{4}-\d{2}$/).optional(),
  isCurrent: z.boolean().default(false),
  description: z.string(),
  responsibilities: z.array(z.string()).optional(),
  isPlaceholder: z.boolean().default(false),
});

const AboutSchema = z.object({
  label: z.string(),
  heading: z.string(),
  paragraphs: z.array(z.string()).min(1),
  careerDirection: z.string(),
  highlights: z.array(z.object({
    title: z.string(),
    icon: z.enum(['graduation', 'hardware', 'software', 'international']),
  })).min(1),
  technicalFocus: z.array(z.string()).optional(),
});

const PortfolioContentSchema = z.object({
  personal: z.object({
    name: z.string(),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    location: z.string(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    availability: z.enum(['Available', 'Open to Opportunities', 'Not Available']),
    profileImage: z.string().optional(),
    cvFile: z.string().optional(),
  }),
  about: AboutSchema,
  skills: z.array(SkillSchema),
  education: z.array(EducationSchema),
  experience: z.array(ExperienceSchema),
  projects: z.array(ProjectSchema),
  certificates: z.array(CertificateSchema),
  languages: z.array(z.object({
    language: z.string(),
    level: z.enum(['Native', 'Intermediate', 'Basic']),
  })),
  social: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    email: z.string().email().optional(),
  }),
  contact: z.object({
    introduction: z.string().optional(),
    linkedinLabel: z.string().optional(),
    githubLabel: z.string().optional(),
  }).optional(),
});

export { PortfolioContentSchema };

