'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';

// Importera alla logotyper
import radisson from '@/public/radison.png';
import polisen from '@/public/polis.png';
import spotify from '@/public/spotify.png';
import arlanda from '@/public/arlanda-ex.png';
import kry from '@/public/kry.png';
import okq8 from '@/public/okq8.png';
import nordea from '@/public/nordea.jpg';
import seb from '@/public/seb.jpg';
import svevia from '@/public/svevia.png';
import skanska from '@/public/skanska.png';

const logos = [
  radisson,
  polisen,
  spotify,
  arlanda,
  kry,
  okq8,
  nordea,
  seb,
  svevia,
  skanska,
];

export default function Faq() {
  return (
    <section className="py-8 md:py-12 border-t border-b border-border bg-background">
      <h1 className="text-3xl! md:text-4xl! font-bold mb-4 text-primary text-center">
        Våra kunder
      </h1>
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 w-full">
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/5 pl-1">
              <Card className="bg-white ring-0">
                <div className="flex h-32 items-center justify-center p-1">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-full w-full object-contain"
                    priority={index < 5}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
