import { ArrowUp, Mail } from 'lucide-react';
import Link from 'next/link';
import { getPortfolioContent } from '@/lib/content';

function GitHubIcon({ size = 18 }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12 2.9a9.1 9.1 0 0 0-2.88 17.65c.46.09.62-.2.62-.43v-1.7c-2.53.55-3.06-1.07-3.06-1.07-.41-1.05-1.01-1.33-1.01-1.33-.82-.56.06-.55.06-.55.91.06 1.38.93 1.38.93.8 1.39 2.11.99 2.63.76.08-.6.32-1 .57-1.23-2.02-.23-4.15-1.01-4.15-4.5 0-1 .35-1.81.93-2.45-.1-.23-.4-1.16.09-2.41 0 0 .76-.24 2.5.93a8.65 8.65 0 0 1 4.55 0c1.73-1.17 2.49-.93 2.49-.93.5 1.25.19 2.18.1 2.41.57.64.92 1.45.92 2.45 0 3.5-2.14 4.26-4.17 4.49.33.29.62.85.62 1.72v2.55c0 .24.16.53.63.43A9.1 9.1 0 0 0 12 2.9Z" /></svg>;
}

function LinkedInIcon({ size = 18 }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M5.1 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.3 8.8h3.6v11.7H3.3V8.8Zm5.8 0h3.4v1.6h.1c.5-.9 1.6-2 3.8-2 4 0 4.8 2.6 4.8 6.1v6H17.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.4H9.1V8.8Z" /></svg>;
}

const QUICK_LINKS = [
  { label: 'Home', href: '/#home' }, { label: 'About', href: '/#about' },
  { label: 'Education', href: '/#education' }, { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' }, { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const content = getPortfolioContent();
  const personal = content.personal || {};
  const social = content.social || {};
  const email = social.email || personal.email;
  const currentYear = new Date().getFullYear();
  const linkClass = 'text-sm text-light-muted transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:text-dark-muted dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40';

  return (
    <footer className="mt-20 border-t border-light-muted/10 bg-light-surface dark:border-dark-muted/10 dark:bg-dark-surface">
      <div className="container-main py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-light-text dark:text-dark-text">{personal.name}</p>
            <p className="mt-2 text-sm font-semibold text-primary-light dark:text-primary-dark">Computer Engineering Graduate</p>
            <p className="mt-3 text-sm leading-relaxed text-light-muted dark:text-dark-muted">Focused on FPGA, Design Verification, Software Development, and Systems.</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-light-text dark:text-dark-text">Quick Links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              {QUICK_LINKS.map((link) => <li key={link.label}><Link href={link.href} className={linkClass}>{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-light-text dark:text-dark-text">Connect</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {email && <a href={`mailto:${email}`} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-light-muted transition hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700 dark:text-dark-muted dark:hover:border-primary-dark/50 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40" aria-label="Email"><Mail size={18} /></a>}
              {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-light-muted transition hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700 dark:text-dark-muted dark:hover:border-primary-dark/50 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40" aria-label="LinkedIn"><LinkedInIcon /></a>}
              {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-light-muted transition hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700 dark:text-dark-muted dark:hover:border-primary-dark/50 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40" aria-label="GitHub"><GitHubIcon /></a>}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-light-muted/10 pt-6 text-sm text-light-muted dark:border-dark-muted/10 dark:text-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {personal.name}. All rights reserved.</p>
          <Link href="/#home" className="inline-flex h-9 w-9 items-center justify-center self-start rounded-lg border border-slate-200 transition hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/40 dark:border-slate-700 dark:hover:border-primary-dark/50 dark:hover:text-primary-dark dark:focus-visible:ring-primary-dark/40 sm:self-auto" aria-label="Back to top" title="Back to top"><ArrowUp size={17} /></Link>
        </div>
      </div>
    </footer>
  );
}
