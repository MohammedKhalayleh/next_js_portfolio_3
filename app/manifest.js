import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: 'Mohammad Khalayleh',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F6F8F7',
    theme_color: '#0FA678',
    icons: [{ src: '/assets/avatar/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
