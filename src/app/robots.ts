import type { MetadataRoute } from 'next'

const baseUrl = 'https://kenylorena.ao' // DHDS_VITRINE_ADMIN: Update with real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
