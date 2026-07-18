import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { siteConfig } from '@/config/site'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppButton'
import '@/app/globals.css'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })

  const baseUrl = 'https://kenylorena.ao' // DHDS_VITRINE_ADMIN: Update with real domain

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale === 'pt' ? '' : locale}`,
      languages: {
        'pt': `${baseUrl}/`,
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
        'zh': `${baseUrl}/zh`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: baseUrl,
      siteName: siteConfig.name,
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    verification: {
      // DHDS_VITRINE_ADMIN: Add Google Search Console verification
      // google: 'verification-token',
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'pt' | 'en' | 'fr' | 'zh')) {
    notFound()
  }

  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  // Schema.org — Restaurant + LocalBusiness
  const schemaOrgRestaurant = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'FoodEstablishment', 'LocalBusiness'],
    name: siteConfig.name,
    description: siteConfig.description[locale as 'pt' | 'en' | 'fr' | 'zh'],
    image: '/images/hero-restaurante.jpeg',
    logo: '/images/logo.jpeg',
    telephone: siteConfig.whatsapp,
    // DHDS_VITRINE_ADMIN: Update with real address and coordinates
    // address: {
    //   '@type': 'PostalAddress',
    //   addressCountry: 'AO',
    //   addressLocality: 'Luanda',
    // },
    servesCuisine: ['Angolan', 'International'],
    priceRange: '$$',
    hasMap: '',
    sameAs: [
      // DHDS_VITRINE_ADMIN: Add social media URLs
    ],
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Marcellus&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgRestaurant) }}
        />
        {/* DHDS_VITRINE_ADMIN: Add Google Analytics / Meta Pixel here */}
      </head>
      <body className="bg-bg-deep text-cream antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
