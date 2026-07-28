'use client';

import { useState } from 'react';
import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/constants';

export default function CertificatesSection({ certificates }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState(null);

  if (!certificates || certificates.length === 0) return null;

  const mapImagePath = (cert) => {
    if (!cert.file) return null;
    const baseName = cert.file.split('/').pop().replace(/\.pdf$/i, '.png');
    return `/assets/certificates/images/${baseName}`;
  };

  return (
    <section id="certificates" className="py-16 px-4 bg-light-surface/50 dark:bg-dark-surface/50">
      <div className="container-main">
        <div className="mb-8">
          <h2 className="text-left text-4xl font-bold text-light-text dark:text-dark-text sm:text-5xl">
            Certifications
          </h2>
          
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 justify-items-center">
          {certificates.map((cert, idx) => {
            const imagePath = mapImagePath(cert);
            return (
              <div
                key={cert.id}
                className={cn(
                  'w-full max-w-[34rem] group relative overflow-hidden rounded-[1.5rem] border border-primary-light/30 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-primary-dark/30 dark:bg-dark-surface',
                  !prefersReducedMotion && 'animate-fade-in'
                )}
                style={!prefersReducedMotion ? { animationDelay: `${idx * 40}ms` } : {}}
              >
                <div className="relative h-64 overflow-hidden bg-light-surface dark:bg-dark-bg sm:h-72 lg:h-80 xl:h-84">
                  {imagePath ? (
                    <img
                      src={imagePath}
                      alt={cert.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center text-sm text-light-muted dark:text-dark-muted">
                      Image not available
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/70 transition duration-300 group-hover:opacity-0" />

                  <div className="absolute inset-x-4 inset-y-0 m-auto flex h-fit max-h-[calc(100%-2rem)] items-center justify-center rounded-[1.5rem] px-4 py-6 text-center text-white opacity-100 transition duration-300 group-hover:opacity-0">
                    <div>
                      <p className="text-base font-semibold leading-tight line-clamp-2">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-sm text-white/80 line-clamp-1">
                        {cert.issuer}
                      </p>
                      {cert.date && (
                        <p className="mt-1 text-xs text-white/60">
                          {new Date(cert.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {imagePath && (
                  <button
                    type="button"
                    onClick={() => setActiveImage(imagePath)}
                    className="absolute inset-x-4 bottom-4 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100"
                  >
                    Preview
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-dark-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-black/70 text-white transition hover:bg-black"
              aria-label="Close preview"
            >
              ×
            </button>
            <img
              src={activeImage}
              alt="Certificate preview"
              className="h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
