'use client';

import { useReducedMotion } from '@/lib/hooks';

const icons = {
  email: <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm1.4-.35L10 9.2l5.6-4.05" />,
  linkedin: <><path d="M4 3h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M7 8v5M7 6.25v.01M10 13V8m0 2.15c.35-1.45 4-1.85 4 1.2V13" /></>,
  github: <path d="M10 2.75a7.25 7.25 0 0 0-2.3 14.13c.36.07.5-.15.5-.35v-1.3c-2.03.44-2.46-.86-2.46-.86-.33-.85-.82-1.08-.82-1.08-.67-.45.05-.44.05-.44.74.05 1.13.77 1.13.77.66 1.13 1.72.8 2.14.61.07-.48.26-.8.47-.98-1.62-.18-3.33-.81-3.33-3.62 0-.8.29-1.46.76-1.97-.08-.19-.33-.94.07-1.95 0 0 .62-.2 2.01.75a7 7 0 0 1 3.66 0c1.4-.95 2.01-.75 2.01-.75.4 1.01.15 1.76.07 1.95.47.51.76 1.17.76 1.97 0 2.82-1.72 3.44-3.35 3.62.26.23.5.68.5 1.38v2.04c0 .2.13.43.5.35A7.25 7.25 0 0 0 10 2.75Z" />,
  location: <><path d="M10 17s5-4.55 5-9a5 5 0 1 0-10 0c0 4.45 5 9 5 9Z" /><circle cx="10" cy="8" r="1.5" /></>,
  status: <><circle cx="10" cy="10" r="7" /><path d="M10 6.5v3.75l2.25 1.5" /></>,
};

function Icon({ name }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">{icons[name]}</svg>;
}

export default function ContactSection({ content }) {
  const personal = content?.personal || {};
  const social = content?.social || {};
  const contact = content?.contact || {};
  const prefersReducedMotion = useReducedMotion();
  const email = social.email || personal.email;
  const contactItems = [
    { icon: 'email', label: 'Email', href: email ? `mailto:${email}` : undefined },
    { icon: 'linkedin', label: 'LinkedIn', href: social.linkedin, external: true },
    { icon: 'github', label: 'GitHub', href: social.github, external: true },
  ].filter((item) => item.href);

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 px-4 sm:px-6">
      <div className="container-main">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div className={!prefersReducedMotion ? 'animate-fade-in' : undefined}>
            <h2 id="contact-title" className="text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">Contact</h2>
            <p className="mt-5 max-w-xl text-lg text-light-muted dark:text-dark-muted">{contact.introduction || 'I am open to job opportunities, internships, technical collaborations, and relevant projects where thoughtful hardware and software engineering can make a difference.'}</p>
          </div>

          <div className={`flex flex-wrap items-center gap-4 ${!prefersReducedMotion ? 'animate-fade-in' : ''}`}>
            {contactItems.map((item) => (
              <a
                key={item.label}
                aria-label={item.label}
                title={item.label}
                className={`signal-focus flex h-16 w-16 items-center justify-center rounded-full border border-light-muted/30 bg-light-surface text-light-text shadow-sm hover:-translate-y-1 hover:border-primary-light hover:bg-primary-light hover:text-white hover:shadow-lg hover:shadow-primary-light/25 dark:border-dark-muted/30 dark:bg-dark-surface dark:text-dark-text dark:hover:border-primary-dark dark:hover:bg-primary-dark dark:hover:text-dark-bg dark:hover:shadow-primary-dark/25 ${!prefersReducedMotion ? 'transition-all duration-300 ease-out' : ''}`}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                <Icon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
