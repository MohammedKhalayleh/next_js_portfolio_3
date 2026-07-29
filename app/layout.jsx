import '@/styles/globals.css';
import ThemeRoot from '@/components/ThemeRoot';
import { getSiteUrl, siteConfig } from '@/lib/site-config';

const siteUrl = getSiteUrl();

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: siteConfig.defaultTitle, template: `%s | ${siteConfig.owner}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  twitter: { card: 'summary_large_image', title: siteConfig.defaultTitle, description: siteConfig.description },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/assets/avatar/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeRoot>{children}</ThemeRoot>
  );
}
