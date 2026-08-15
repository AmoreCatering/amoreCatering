import { cuisines } from '@/app/data/cuisines';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ChevronRight,
  UtensilsCrossed,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';

export async function generateStaticParams() {
  return cuisines.map((cuisine) => ({
    slug: cuisine.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cuisine = cuisines.find((c) => c.slug === slug);
  if (!cuisine) return {};

  const canonicalUrl = `https://www.amorecatering.se/catering/${cuisine.slug}`;

  return {
    title: `${cuisine.name} | Amore Catering`,
    description: cuisine.meta,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${cuisine.name} | Amore Catering`,
      description: cuisine.meta,
      url: canonicalUrl,
      siteName: 'Amore Catering',
      locale: 'sv_SE',
      type: 'website',
    },
  };
}

export default async function CuisinePagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cuisine = cuisines.find((c) => c.slug === slug);

  if (!cuisine) {
    return (
      <div className="min-h-screen bg-background">
        <section className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-24 text-center">
          <h1 className="text-3xl font-bold text-title mb-4">
            Cateringtypen hittades inte
          </h1>
          <Link href="/" className="text-primary underline">
            Tillbaka till startsidan
          </Link>
        </section>
      </div>
    );
  }

  const priceFrom = cuisine.priceFrom ?? 195;
  const priceUnit = cuisine.priceUnit ?? 'person';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: cuisine.name,
      description: cuisine.meta || cuisine.description,
      provider: {
        '@type': 'FoodEstablishment',
        name: 'Amore Catering',
        url: 'https://www.amorecatering.se',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Hem',
          item: 'https://www.amorecatering.se',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: cuisine.name,
          item: `https://www.amorecatering.se/catering/${cuisine.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero section */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link
              href="/"
              className="hover:text-primary transition-colors text-accent-muted"
            >
              Hem
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{cuisine.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <UtensilsCrossed className="w-7 h-7 text-primary mt-1 shrink-0" />
            <h1 className="text-3xl md:text-5xl font-bold text-title leading-tight">
              {cuisine.name}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {cuisine.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - What we offer */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <UtensilsCrossed className="w-7 h-7 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-bold text-title">
                Vad erbjuder vi?
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {cuisine.underDescription}
            </p>
            <ul className="space-y-3">
              {cuisine.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Prices & Contact */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-title mb-3">Priser</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  {cuisine.id == 'studentcatering'
                    ? cuisine.priceInfo
                    : `från ${priceFrom} SEK/${priceUnit}`}
                </span>
              </p>
            </div>

            <section className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-title mb-4">
                Boka din catering
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+4683042270"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4.5 h-4.5 text-primary" />
                  <span>08 30 42 70</span>
                </a>
                <a
                  href="mailto:hej@amorecatering.se"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4.5 h-4.5 text-primary" />
                  <span>hej@amorecatering.se</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
