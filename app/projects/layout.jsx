import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main id="main-content" className="relative z-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
