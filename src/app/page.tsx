import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import FAQ from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';
import Features from './components/Features';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}