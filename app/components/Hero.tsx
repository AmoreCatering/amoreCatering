'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    };

    // Scroll on initial mount and hash change
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  const handleClick = (href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 md:py-40 overflow-hidden">
      <Image
        src="/catering-hero.webp"
        fill
        alt="Premium Catering Background"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <section className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-background">
            Premium Catering i Stockholm
          </h1>
          <p className="text-base md:text-lg mb-8 leading-relaxed text-secondary backdrop-blur-sm bg-foreground/20 p-4 rounded-md">
            Vi levererar autentisk, hemlagad mat med gourmet känsla. Perfekt för
            företagsevenemang, bröllop och privata fester. Lokal, färsk och
            personligt lagad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#kontakt"
              onClick={() => handleClick('#kontakt')}
              className="flex items-center justify-center bg-primary text-background font-medium text-center px-8 py-3 rounded uppercase hover:-translate-y-1 transition-all duration-300"
            >
              boka catering
            </Link>
            <Link
              href="https://order.foodtec.se/gamore-catering/bestall-mat"
              rel="noopener noreferrer"
              target="_blank"
              className="border-2 border-background/60 backdrop-blur-sm text-background font-medium text-center px-8 py-3 rounded uppercase hover:-translate-y-1 hover:border-background transition-all duration-300"
            >
              beställ online
            </Link>
            <Link
              href="/catering/italiano"
              className="border-2 border-background/60 backdrop-blur-sm text-background font-medium text-center px-8 py-3 rounded uppercase hover:-translate-y-1 hover:border-background transition-all duration-300"
            >
              Italiensk Catering
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
