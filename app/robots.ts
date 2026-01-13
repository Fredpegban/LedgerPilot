
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/app/',
        '/api/',
        '/signin',
        '/get-started'
      ],
    },
    sitemap: 'https://ledgerpilot.io/sitemap.xml',
  };
}
