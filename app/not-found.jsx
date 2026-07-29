import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container-main max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-light-text dark:text-dark-text mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-secondary-light dark:text-secondary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="button-primary">
          Return Home
        </Link>
      </div>
    </main>
  );
}
