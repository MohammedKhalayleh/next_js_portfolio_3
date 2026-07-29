import { getPortfolioContent } from '@/lib/content';

export const metadata = {
  title: 'Certificates & Credentials',
  description: 'Professional certificates and credentials held by Mohammad Khalayleh.',
  alternates: { canonical: '/certificates' },
};

export default function CertificatesPage() {
  const content = getPortfolioContent();
  const certificates = content.certificates || [];

  return (
    <main className="min-h-screen pt-20 px-4 py-20">
      <div className="container-main">
        <h1 className="text-5xl font-bold mb-12 text-light-text dark:text-dark-text">
          Certificates & Credentials
        </h1>

        {certificates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-light-muted dark:text-dark-muted">Certificates coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="card">
                <h2 className="text-xl font-bold text-light-text dark:text-dark-text">
                  {cert.title}
                </h2>
                <p className="text-secondary-light dark:text-secondary-dark mt-2">
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-4">
                    {new Date(cert.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
