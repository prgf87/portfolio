import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.globalwebsystems.co.uk/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },   
    {
      url: 'https://nc-news.globalwebsystems.co.uk/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },   
  ]
}
