
import { MetadataRoute } from 'next';
import { guides } from '../lib/content/guides';
import { templates } from '../lib/content/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ledgerpilot.io';

  const staticRoutes = [
    '',
    '/how-it-works',
    '/features',
    '/pricing',
    '/vat-mtd',
    '/accountants',
    '/security',
    '/contact',
    '/bookkeeping-software-uk',
    '/receipt-scanning-bookkeeping',
    '/bank-reconciliation',
    '/mtd-vat-software',
    '/resources',
    '/tools',
    '/compare'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const guideRoutes = guides.map(guide => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const templateRoutes = templates.map(template => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...guideRoutes, ...templateRoutes];
}
