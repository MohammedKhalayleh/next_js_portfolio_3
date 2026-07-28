import {
  Boxes,
  Braces,
  Cpu,
  Database,
  Flame,
  GitBranch,
  MonitorCog,
  Network,
  Router,
  ShieldCheck,
  Terminal,
  TestTube2,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/constants';

const ICONS = {
  code: Braces,
  cpu: Cpu,
  testing: TestTube2,
  tool: Wrench,
  web: Boxes,
  database: Database,
  flame: Flame,
  terminal: Terminal,
  server: MonitorCog,
  git: GitBranch,
  network: Network,
  router: Router,
  security: ShieldCheck,
};

export default function SkillCard({ skill, prefersReducedMotion }) {
  const Icon = ICONS[skill.icon];

  return (
    <div
      className={cn(
        'group flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3.5 py-3 shadow-sm shadow-slate-300/10 transition duration-200 hover:-translate-y-0.5 hover:border-primary-light/40 hover:shadow-md focus-within:border-primary-light focus-within:ring-2 focus-within:ring-primary-light/20 dark:border-slate-700/80 dark:bg-slate-950/70 dark:hover:border-primary-dark/50 dark:focus-within:border-primary-dark dark:focus-within:ring-primary-dark/20',
        !prefersReducedMotion && 'animate-fade-in',
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
        <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
      </span>
      <span className="min-w-0 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
        {skill.name}
      </span>
    </div>
  );
}
