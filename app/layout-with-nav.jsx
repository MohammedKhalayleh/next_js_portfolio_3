import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Not Found | CircuitCanvas',
};

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
