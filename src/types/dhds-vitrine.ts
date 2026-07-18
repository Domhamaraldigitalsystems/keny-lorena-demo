// ============================================================
// DHDS Vitrine — Base Types
// Todos os restaurantes da plataforma partilham estes tipos.
// ============================================================

export type Locale = 'pt' | 'en' | 'fr' | 'zh'

export interface DHDSSiteConfig {
  name: string
  tagline: Record<Locale, string>
  description: Record<Locale, string>
  whatsapp: string
  instagram?: string
  facebook?: string
  tiktok?: string
  address?: Record<Locale, string>
  hours?: BusinessHours[]
  coordinates?: { lat: number; lng: number }
  primaryColor: string
  accentColor: string
  logo: string
}

export interface BusinessHours {
  days: Record<Locale, string>
  open: string
  close: string
  closed?: boolean
}

export interface MenuCategory {
  id: string
  label: Record<Locale, string>
  icon?: string
  items: MenuItem[]
}

export interface MenuItem {
  id: string
  name: Record<Locale, string>
  description?: Record<Locale, string>
  price?: number
  currency?: string
  image?: string
  tags?: string[]
  available: boolean
}

export interface Event {
  id: string
  title: Record<Locale, string>
  description?: Record<Locale, string>
  date: string
  time?: string
  image?: string
  capacity?: number
  price?: number
  available: boolean
}

export interface GalleryImage {
  src: string
  alt: Record<Locale, string>
  category: 'restaurante' | 'lounge' | 'pratos' | 'eventos' | 'cocktails' | 'shisha' | 'detalhes'
  width: number
  height: number
}

export interface ReservationRequest {
  name: string
  phone: string
  email?: string
  type: 'restaurante' | 'lounge'
  date: string
  time: string
  guests: number
  notes?: string
}

// DHDS_VITRINE_ADMIN: Interface para futura integração com painel admin
export interface DHDSAdminConfig {
  apiEndpoint?: string        // Futuro: DHDS Vitrine API
  whatsappBusinessToken?: string // Futuro: WhatsApp Business API
  appyPayMerchantId?: string  // Futuro: AppyPay/Multicaixa Express
  firebaseProjectId?: string  // Futuro: Firebase
}
