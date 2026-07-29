const siteConfig = {
  name: 'Mohammad Khalayleh Portfolio',
  owner: 'Mohammad Khalayleh',
  title: 'Computer Engineer',
  defaultTitle: 'Mohammad Khalayleh | Computer Engineer',
  description: 'Portfolio of Mohammad Khalayleh, a Computer Engineer specializing in FPGA design, SystemVerilog, hardware verification, embedded systems, software development, systems, and networking.',
  locale: 'en_US',
  github: 'https://github.com/mohammedkhalayleh',
  linkedin: 'https://linkedin.com/in/mohammad-khalayleh',
};

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    try {
      return new URL(configuredUrl).origin;
    } catch {
      return null;
    }
  }

  return process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : null;
}

export { siteConfig };
