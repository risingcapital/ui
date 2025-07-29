import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Stats from '@/app/components/Stats';
import About from '@/app/components/About';
import Features from '@/app/components/Features';
import Testimonials from '@/app/components/Testimonials';
import BlogSection from '@/app/components/Blog';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <About />
        <Features />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}