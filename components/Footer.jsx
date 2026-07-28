export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-muted/10 dark:border-dark-muted/10 mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-lg flex items-center justify-center text-white text-sm font-bold">
                MK
              </div>
              <span className="font-display font-bold">CircuitCanvas</span>
            </div>
            <p className="text-sm text-light-muted dark:text-dark-muted">
              Hardware-first portfolio of Mohammad Khalayleh
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sitemap.xml" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
                  Robots
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-semibold mb-4">Status</h4>
            <p className="text-sm text-light-muted dark:text-dark-muted">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full" />
                System Online
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-light-muted/10 dark:border-dark-muted/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-light-muted dark:text-dark-muted">
          <p>© {currentYear} Mohammad Khalayleh. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-light-text dark:hover:text-dark-text transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-light-text dark:hover:text-dark-text transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
