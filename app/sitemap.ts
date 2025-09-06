import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vividalis.dev'
  return [
    { url: `${base}/`, priority: 1 },
    // add more URLs here if you create more pages
  ]
}
