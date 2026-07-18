// ============================================================
// DHDS Vitrine — Configuração Global do Site
// Editar este ficheiro para adaptar a outro restaurante.
// ============================================================

import type { DHDSSiteConfig } from '@/types/dhds-vitrine'

export const siteConfig: DHDSSiteConfig = {
  name: 'Keny Lorena Restaurant & Premium Shisha Lounge',
  tagline: {
    pt: 'Restaurant & Premium Shisha Lounge',
    en: 'Restaurant & Premium Shisha Lounge',
    fr: 'Restaurant & Premium Shisha Lounge',
    zh: '餐厅与高级水烟吧',
  },
  description: {
    pt: 'Uma experiência gastronómica e de lazer premium em Angola.',
    en: 'A premium dining and leisure experience in Angola.',
    fr: 'Une expérience gastronomique et de loisir premium en Angola.',
    zh: '安哥拉顶级美食与休闲体验。',
  },
  whatsapp: '+244935894648',
  instagram: undefined, // DHDS_VITRINE_ADMIN: Preencher com URL do Instagram
  facebook: undefined,  // DHDS_VITRINE_ADMIN: Preencher com URL do Facebook
  tiktok: undefined,
  address: {
    pt: 'Rua Guilherme Pereira Inglês, Luanda, Angola',
    en: 'Rua Guilherme Pereira Inglês, Luanda, Angola',
    fr: 'Rua Guilherme Pereira Inglês, Luanda, Angola',
    zh: 'Rua Guilherme Pereira Inglês, 罗安达, 安哥拉',
  },
  hours: [
    // DHDS_VITRINE_ADMIN: Preencher com horário real
    // Exemplo:
    // { days: { pt: 'Terça a Domingo', en: 'Tuesday to Sunday', fr: 'Mardi au Dimanche', zh: '周二至周日' }, open: '12:00', close: '00:00' },
    // { days: { pt: 'Segunda', en: 'Monday', fr: 'Lundi', zh: '周一' }, open: '', close: '', closed: true },
  ],
  coordinates: undefined, // DHDS_VITRINE_ADMIN: { lat: -8.xxx, lng: 13.xxx }
  primaryColor: '#C9A84C',
  accentColor: '#7B5EA7',
  logo: '/images/logo.jpeg',
}

export const locales = ['pt', 'en', 'fr', 'zh'] as const
export const defaultLocale = 'pt' as const

export const localeNames = {
  pt: '🇵🇹 PT',
  en: '🇬🇧 EN',
  fr: '🇫🇷 FR',
  zh: '🇨🇳 中文',
} as const

export const localeFull = {
  pt: '🇵🇹 Português',
  en: '🇬🇧 English',
  fr: '🇫🇷 Français',
  zh: '🇨🇳 中文',
} as const
