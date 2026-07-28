'use client';

'use client';

import { useState } from 'react';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';
import SkillChip from '@/components/skills/SkillChip';

const TAB_DEFINITIONS = [
  {
    key: 'hardware',
    title: 'Hardware',
    categories: ['Hardware Description Languages', 'FPGA Tools'],
  },
  {
    key: 'software',
    title: 'Software',
    categories: ['Programming', 'Web Development'],
  },
  {
    key: 'systems',
    title: 'Systems',
    categories: ['Systems & Networking'],
  },
  {
    key: 'tools-qa',
    title: 'Tools & QA',
    categories: ['Databases', 'Quality Assurance', 'Additional Engineering Areas'],
  },
];

const PROJECT_HIGHLIGHTS = {
  FPGA: 'FPGA-Based Cryptographic System',
  Embedded: 'FPGA-Based Cryptographic System',
};

function normalizeSkill(skill, index) {
  if (!skill) return null;
  const raw = typeof skill === 'string' ? { name: skill } : skill;
  const name = typeof raw.name === 'string' ? raw.name.trim() : '';
  if (!name) return null;

  const category = typeof raw.category === 'string' && raw.category.trim()
    ? raw.category.trim()
    : 'Additional Engineering Areas';

  const level = typeof raw.level === 'string' && raw.level.trim()
    ? raw.level.trim()
    : undefined;

  const experienceType = typeof raw.experienceType === 'string' && raw.experienceType.trim()
    ? raw.experienceType.trim()
    : undefined;

  return {
    id: typeof raw.id === 'string' && raw.id.trim() ? raw.id.trim() : `skill-${index}`,
    name,
    category,
    level,
    experienceType,
  };
}

function normalizeSkills(skills = []) {
  if (!Array.isArray(skills)) return [];
  return skills
    .map((skill, index) => normalizeSkill(skill, index))
    .filter(Boolean);
}

function getTabSkills(skills, categories) {
  return skills.filter((skill) => categories.includes(skill.category));
}

export default function SkillsSection({ skills }) {
  const prefersReducedMotion = useReducedMotion();
  const normalizedSkills = normalizeSkills(skills);
  const [activeTab, setActiveTab] = useState(TAB_DEFINITIONS[0].key);

  if (!normalizedSkills.length) return null;

  const currentTab = TAB_DEFINITIONS.find((tab) => tab.key === activeTab) || TAB_DEFINITIONS[0];
  const tabSkills = getTabSkills(normalizedSkills, currentTab.categories);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4">
      <div className="container-main">
        <div className="rounded-[2rem] border border-slate-200/80 bg-light-surface/95 p-8 shadow-sm shadow-slate-300/10 transition-colors duration-300 dark:border-slate-700/80 dark:bg-dark-surface/95 dark:shadow-slate-950/10">
          <div className="max-w-3xl mb-8">
            <h2 id="skills-heading" className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Skills
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-2 dark:border-slate-700/80 dark:bg-slate-950/80">
              {TAB_DEFINITIONS.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      'rounded-[1.3rem] px-4 py-3 text-sm font-semibold transition duration-200',
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm shadow-slate-300/20 ring-1 ring-primary-light/40 dark:bg-slate-900 dark:text-white dark:ring-primary-dark/30'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900/80'
                    )}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>

            <div className="space-y-8">
              <div />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tabSkills.length > 0 ? (
                  tabSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className={cn(
                        'rounded-[1.8rem] border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-950 dark:text-white',
                        !prefersReducedMotion && 'animate-fade-in'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h4>
                        {skill.level && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.experienceType && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {skill.experienceType}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="rounded-[1.8rem] border border-dashed border-slate-300/70 bg-slate-50 p-8 text-center text-slate-600 dark:border-slate-700/80 dark:bg-slate-950 dark:text-slate-400">
                    No skills found for this category yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
