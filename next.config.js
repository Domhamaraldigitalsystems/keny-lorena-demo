// @ts-check

const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800,
    deviceSizes: [390, 768, 1024, 1280, 1440, 1920],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = withNextIntl(nextConfig)
