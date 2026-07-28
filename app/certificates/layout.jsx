import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CertificatesLayout({ children }) {
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
