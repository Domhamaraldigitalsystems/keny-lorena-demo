// ============================================================
// Gallery Data — Imagens reais do projecto
// ============================================================

import type { GalleryImage } from '@/types/dhds-vitrine'

export const galleryImages: GalleryImage[] = [
  // Restaurante
  {
    src: '/images/rest-01.jpeg',
    alt: { pt: 'Interior do Restaurante', en: 'Restaurant Interior', fr: "Intérieur du Restaurant", zh: '餐厅内部' },
    category: 'restaurante',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/rest-02.jpeg',
    alt: { pt: 'Ambiente do Restaurante', en: 'Restaurant Ambience', fr: 'Ambiance du Restaurant', zh: '餐厅氛围' },
    category: 'restaurante',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/rest-cheio.jpeg',
    alt: { pt: 'Restaurante Cheio', en: 'Full Restaurant', fr: 'Restaurant Plein', zh: '客满的餐厅' },
    category: 'restaurante',
    width: 1920,
    height: 1080,
  },
  
  // Lounge
  {
    src: '/images/lounge-all.jpeg',
    alt: { pt: 'Vista Geral do Lounge', en: 'Lounge Overview', fr: 'Vue Générale du Lounge', zh: '休闲区全景' },
    category: 'lounge',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/lounge-cabine.jpeg',
    alt: { pt: 'Cabine Privada — Lounge', en: 'Private Booth — Lounge', fr: 'Cabine Privée — Lounge', zh: '私人包厢 — 休闲区' },
    category: 'lounge',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/lounge-entrada.jpeg',
    alt: { pt: 'Entrada do Lounge', en: 'Lounge Entrance', fr: 'Entrée du Lounge', zh: '休闲区入口' },
    category: 'lounge',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/lounge-shisha.jpeg',
    alt: { pt: 'Shisha Bar', en: 'Shisha Bar', fr: 'Shisha Bar', zh: '水烟吧' },
    category: 'lounge',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/lounge-puffs-shishas.jpeg',
    alt: { pt: 'Lounge Premium', en: 'Premium Lounge', fr: 'Lounge Premium', zh: '高级休闲区' },
    category: 'lounge',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/shisha-experience-01.jpeg',
    alt: { pt: 'Shisha Experience', en: 'Shisha Experience', fr: 'Expérience Shisha', zh: '水烟体验' },
    category: 'shisha',
    width: 1920,
    height: 1080,
  },

  // Cocktails
  {
    src: '/images/cocktail_premium.png',
    alt: { pt: 'Cocktails Exclusivos', en: 'Exclusive Cocktails', fr: 'Cocktails Exclusifs', zh: '独家鸡尾酒' },
    category: 'cocktails',
    width: 1024,
    height: 1024,
  },
  {
    src: '/images/bar-cocktail.jpeg',
    alt: { pt: 'Premium Bar', en: 'Premium Bar', fr: 'Bar Premium', zh: '高级酒吧' },
    category: 'cocktails',
    width: 1920,
    height: 1080,
  },

  // Serviço / Bartenders -> Add to "detalhes" or "lounge". Since the prompt said "Barmans-lounge", I will add it to "detalhes".
  {
    src: '/images/barmans-lounge.jpeg',
    alt: { pt: 'Serviço / Bartenders', en: 'Service / Bartenders', fr: 'Service / Barmans', zh: '服务/调酒师' },
    category: 'detalhes',
    width: 1920,
    height: 1080,
  },

  // Pratos
  {
    src: '/images/prato_gourmet.png',
    alt: { pt: 'Alta Gastronomia', en: 'High Gastronomy', fr: 'Haute Gastronomie', zh: '高级美食' },
    category: 'pratos',
    width: 1024,
    height: 1024,
  },
  {
    src: '/images/prato-sushi.jpeg',
    alt: { pt: 'Especialidades', en: 'Specialties', fr: 'Spécialités', zh: '特色菜' },
    category: 'pratos',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/prato-bife.jpeg',
    alt: { pt: 'Menu Premium', en: 'Premium Menu', fr: 'Menu Premium', zh: '高级菜单' },
    category: 'pratos',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/prato-mufete.jpeg',
    alt: { pt: 'Cozinha Angolana', en: 'Angolan Cuisine', fr: 'Cuisine Angolaise', zh: '安哥拉美食' },
    category: 'pratos',
    width: 1920,
    height: 1080,
  },

  // Detalhes
  {
    src: '/images/detalhes_luxo.png',
    alt: { pt: 'Lifestyle / Ambiente', en: 'Lifestyle / Ambiance', fr: 'Style de vie / Ambiance', zh: '生活方式/氛围' },
    category: 'detalhes',
    width: 1024,
    height: 1024,
  },

  // Eventos
  {
    src: '/images/evento-vip.jpeg',
    alt: { pt: 'Eventos Exclusivos', en: 'Exclusive Events', fr: 'Événements Exclusifs', zh: '独家活动' },
    category: 'eventos',
    width: 1920,
    height: 1080,
  },
  {
    src: '/images/shisha-experience-02.jpeg',
    alt: { pt: 'Eventos Lounge', en: 'Lounge Events', fr: 'Événements Lounge', zh: '休闲活动' },
    category: 'eventos',
    width: 1920,
    height: 1080,
  },
]
