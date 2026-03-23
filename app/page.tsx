import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Logos from './components/Logos';
import Image from 'next/image';

export const metadata = {
  title: 'Amore Catering Stockholm | Premium Hemlagat Catering',
  description:
    'Premium catering-tjänster i Stockholm. Vi erbjuder färsk, hemlagad mat för företagsevenemang, bröllop och privata fester. Personlig service och gourmet-meny.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      <div className="w-full h-100 relative">
        <Image
          src="/catering-divider.webp"
          alt="Premium Catering Background"
          priority
          fill
          className="object-cover object-center"
        />
      </div>
      {/* About Section */}
      <About />
      <Logos />
      <div className="w-full h-100 relative">
        <Image
          src="/catering-divider.webp"
          alt="Premium Catering Background"
          priority
          fill
          className="object-cover object-center"
        />
      </div>
      {/* Contact Section */}
      <Contact />
      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
