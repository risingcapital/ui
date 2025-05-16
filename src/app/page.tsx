import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Features from '@/app/components/Features';
import Testimonials from '@/app/components/Testimonials';
import Stats from '@/app/components/Stats';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import BlogSection from './components/Blog';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Stats />
        <BlogSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}