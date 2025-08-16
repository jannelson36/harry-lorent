import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const routes = ['', '/#about', '/#experience', '/#projects', '/#skills', '/#education', '/#testimonials', '/#contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.6,
  }));
}