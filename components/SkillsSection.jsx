'use client';

import { useRef, useState } from 'react';
import SkillCard from '@/components/skills/SkillCard';
import { SKILL_TABS } from '@/components/skills/skillsData';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTabId, setActiveTabId] = useState(SKILL_TABS[0].id);
  const tabRefs = useRef([]);
  const activeTab = SKILL_TABS.find((tab) => tab.id === activeTabId) ?? SKILL_TABS[0];

  const selectTab = (index) => {
    const tab = SKILL_TABS[index];
    setActiveTabId(tab.id);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event, index) => {
    const lastIndex = SKILL_TABS.length - 1;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectTab(index === lastIndex ? 0 : index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectTab(index === 0 ? lastIndex : index - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      selectTab(lastIndex);
    }
  };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-4 py-20">
      <div className="container-main">
        <h2 id="skills-heading" className="mb-12 text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">
          Skills
        </h2>

        <div className="rounded-[2rem] border border-slate-200/80 bg-light-surface/95 p-5 shadow-sm shadow-slate-300/10 transition-colors duration-300 sm:p-8 dark:border-slate-700/80 dark:bg-dark-surface/95 dark:shadow-slate-950/10">
          <div className="space-y-6">
            <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2 rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-2 dark:border-slate-700/80 dark:bg-slate-950/80">
              {SKILL_TABS.map((tab, index) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    ref={(element) => { tabRefs.current[index] = element; }}
                    id={`${tab.id}-tab`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${tab.id}-panel`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(tab.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={cn(
                      'rounded-[1.15rem] px-3.5 py-2.5 text-sm font-semibold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-primary-light/50 dark:focus-visible:ring-primary-dark/50',
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm shadow-slate-300/20 ring-1 ring-primary-light/40 dark:bg-slate-900 dark:text-white dark:ring-primary-dark/30'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900/80',
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div
              id={`${activeTab.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeTab.id}-tab`}
              className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            >
              {activeTab.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} prefersReducedMotion={prefersReducedMotion} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
