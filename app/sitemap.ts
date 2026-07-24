import { MetadataRoute } from 'next';
import { areas } from '@/app/data/areas';
import { cuisines } from '@/app/data/cuisines';

const baseUrl = 'https://www.amorecatering.se';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/integritetspolicy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const cuisinePages: MetadataRoute.Sitemap = cuisines.map((cuisine) => ({
    url: `${baseUrl}/catering/${cuisine.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${baseUrl}/omraden/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...cuisinePages, ...areaPages];
}
