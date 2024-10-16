'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Services from '@/components/Services';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 1000,
    });
    AOS.refresh();
  }, []);

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
