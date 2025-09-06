import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vividalis.dev/' // replace when you add a custom domain
  return [
    { url: `${base}/`, priority: 1 },
  ]
}
