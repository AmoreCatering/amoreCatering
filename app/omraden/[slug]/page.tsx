import { areas } from '@/app/data/areas';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ChevronRight,
  MapPin,
  Utensils,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};

  const canonicalUrl = `https://www.amorecatering.se/omraden/${area.slug}`;

  return {
    title: `Catering ${area.name} - Amore Catering`,
    description: area.meta,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Catering ${area.name} - Amore Catering`,
      description: area.meta,
      url: canonicalUrl,
      siteName: 'Amore Catering',
      locale: 'sv_SE',
      type: 'website',
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <section className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-24 text-center">
          <h1 className="text-3xl font-bold text-title mb-4">
            Området hittades inte
          </h1>
          <Link href="/" className="text-primary underline">
            Tillbaka till startsidan
          </Link>
        </section>
      </div>
    );
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Catering i ${area.name}`,
      description: area.meta || area.description,
      provider: {
        '@type': 'FoodEstablishment',
        name: 'Amore Catering',
        url: 'https://www.amorecatering.se',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: area.name,
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
          name: `Catering i ${area.name}`,
          item: `https://www.amorecatering.se/omraden/${area.slug}`,
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
            <span className="text-foreground">Catering i {area.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-7 h-7 text-primary mt-1 shrink-0" />
            <h1 className="text-3xl md:text-5xl font-bold text-title leading-tight">
              Catering i {area.name}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            {area.description}
          </p>
        </div>
      </section>

      <section className="max-w-350 mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Utensils className="w-7 h-7 text-primary mt-1 shrink-0" />
              <h2 className="text-2xl font-bold text-title">
                Vad erbjuder vi i {area.name}?
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {area.underDescription}
            </p>
            <ul className="space-y-3">
              {area.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-title mb-3">Priser</h3>
              <p className="text-muted-foreground leading-relaxed">
                Testa vår goda italienska buffé från{' '}
                <span className="font-semibold text-foreground">
                  195 SEK/person
                </span>{' '}
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
