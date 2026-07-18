import type { MetadataRoute } from 'next'
import { locales } from '@/config/site'

const baseUrl = 'https://kenylorena.ao' // DHDS_VITRINE_ADMIN: Update with real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.map((locale) => ({
    url: locale === 'pt' ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: locale === 'pt' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, l === 'pt' ? baseUrl : `${baseUrl}/${l}`])
      ),
    },
  }))

  return routes
}
