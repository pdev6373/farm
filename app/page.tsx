import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
