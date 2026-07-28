'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/hooks';
import { SECTIONS } from '@/lib/constants';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-xs border-b border-light-muted/10 dark:border-dark-muted/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-main flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl text-light-text dark:text-dark-text hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            aria-label="Mohammad Khalayleh"
          >
            <span className="w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-lg flex items-center justify-center text-white text-sm font-bold">
              MK
            </span>
            <span className="hidden sm:inline">MK</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {SECTIONS.slice(0, 6).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  activeSection === section.id
                    ? 'text-primary-light dark:text-primary-dark'
                    : 'text-light-text dark:text-dark-text hover:text-primary-light dark:hover:text-primary-dark'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 18.386a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <BurgerMenu isOpen={menuOpen} onToggle={setMenuOpen} />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 dark:bg-black/50 transition-opacity duration-300 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
