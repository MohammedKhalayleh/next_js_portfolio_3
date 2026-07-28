'use client';

import { useEffect, useRef } from 'react';
import { SECTIONS } from '@/lib/constants';

export default function BurgerMenu({ isOpen, onToggle }) {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      // Focus management
      if (menuRef.current) {
        const firstLink = menuRef.current.querySelector('a');
        firstLink?.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onToggle]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => onToggle(!isOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors flex flex-col gap-1 h-10 w-10 justify-center items-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <span
          className={`w-5 h-0.5 bg-current transition-all duration-200 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-5 h-0.5 bg-current transition-all duration-200 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-5 h-0.5 bg-current transition-all duration-200 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed right-0 top-16 w-[88vw] max-w-xs max-h-[calc(100vh-4rem)] overflow-y-auto bg-light-surface dark:bg-dark-surface border-l border-light-muted/10 dark:border-dark-muted/10 shadow-xl lg:hidden z-40 animate-slide-up"
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <nav className="p-6 flex flex-col gap-1">
            {SECTIONS.slice(0, 6).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-3 rounded-lg text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-colors duration-200 font-medium"
                onClick={() => onToggle(false)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
