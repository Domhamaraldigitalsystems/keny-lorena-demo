// ============================================================
// WhatsApp Templates — 5 templates estruturados
// Número: +244 935 894 648
// ============================================================

import type { ReservationRequest, Locale } from '@/types/dhds-vitrine'

export const WHATSAPP_NUMBER = '244935894648'

// ---- Generators ----

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

// Template 1 — Reserva Restaurante
export function reservaRestaurante(data: ReservationRequest, locale: Locale = 'pt'): string {
  const messages: Record<Locale, string> = {
    pt: `Olá, Keny Lorena! 🍽️\n\nGostaria de reservar uma *Mesa no Restaurante*.\n\n👤 Nome: ${data.name}\n📞 Telefone: ${data.phone}\n📅 Data: ${data.date}\n⏰ Hora: ${data.time}\n👥 Pessoas: ${data.guests}${data.notes ? `\n📝 Observações: ${data.notes}` : ''}\n\nAguardo confirmação. Obrigado!`,
    en: `Hello, Keny Lorena! 🍽️\n\nI would like to book a *Restaurant Table*.\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📅 Date: ${data.date}\n⏰ Time: ${data.time}\n👥 Guests: ${data.guests}${data.notes ? `\n📝 Notes: ${data.notes}` : ''}\n\nAwaiting confirmation. Thank you!`,
    fr: `Bonjour, Keny Lorena! 🍽️\n\nJe souhaite réserver une *Table au Restaurant*.\n\n👤 Nom: ${data.name}\n📞 Téléphone: ${data.phone}\n📅 Date: ${data.date}\n⏰ Heure: ${data.time}\n👥 Personnes: ${data.guests}${data.notes ? `\n📝 Remarques: ${data.notes}` : ''}\n\nJ'attends votre confirmation. Merci!`,
    zh: `您好，Keny Lorena！🍽️\n\n我想预订*餐厅座位*。\n\n👤 姓名：${data.name}\n📞 电话：${data.phone}\n📅 日期：${data.date}\n⏰ 时间：${data.time}\n👥 人数：${data.guests}${data.notes ? `\n📝 备注：${data.notes}` : ''}\n\n等待确认。谢谢！`,
  }
  return getWhatsAppLink(messages[locale])
}

// Template 2 — Reserva Lounge/Shisha
export function reservaLounge(data: ReservationRequest, locale: Locale = 'pt'): string {
  const messages: Record<Locale, string> = {
    pt: `Olá, Keny Lorena! 💨\n\nGostaria de reservar um *Espaço no Lounge & Shisha Bar*.\n\n👤 Nome: ${data.name}\n📞 Telefone: ${data.phone}\n📅 Data: ${data.date}\n⏰ Hora: ${data.time}\n👥 Pessoas: ${data.guests}${data.notes ? `\n📝 Observações: ${data.notes}` : ''}\n\nAguardo confirmação. Obrigado!`,
    en: `Hello, Keny Lorena! 💨\n\nI would like to book a *Lounge & Shisha Bar Space*.\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📅 Date: ${data.date}\n⏰ Time: ${data.time}\n👥 Guests: ${data.guests}${data.notes ? `\n📝 Notes: ${data.notes}` : ''}\n\nAwaiting confirmation. Thank you!`,
    fr: `Bonjour, Keny Lorena! 💨\n\nJe souhaite réserver un *Espace Lounge & Shisha Bar*.\n\n👤 Nom: ${data.name}\n📞 Téléphone: ${data.phone}\n📅 Date: ${data.date}\n⏰ Heure: ${data.time}\n👥 Personnes: ${data.guests}${data.notes ? `\n📝 Remarques: ${data.notes}` : ''}\n\nJ'attends votre confirmation. Merci!`,
    zh: `您好，Keny Lorena！💨\n\n我想预订*休闲区及水烟吧*。\n\n👤 姓名：${data.name}\n📞 电话：${data.phone}\n📅 日期：${data.date}\n⏰ 时间：${data.time}\n👥 人数：${data.guests}${data.notes ? `\n📝 备注：${data.notes}` : ''}\n\n等待确认。谢谢！`,
  }
  return getWhatsAppLink(messages[locale])
}

// Template 3 — Pedido de Informação
export function pedidoInformacao(locale: Locale = 'pt'): string {
  const messages: Record<Locale, string> = {
    pt: `Olá! 👋 Gostaria de obter mais informações sobre o *Keny Lorena Restaurante & Shisha Bar*.\n\nPoderia ajudar-me?`,
    en: `Hello! 👋 I would like to get more information about *Keny Lorena Restaurant & Shisha Bar*.\n\nCould you help me?`,
    fr: `Bonjour! 👋 Je souhaite obtenir plus d'informations sur le *Keny Lorena Restaurant & Shisha Bar*.\n\nPouvez-vous m'aider?`,
    zh: `你好！👋 我想了解更多关于*Keny Lorena 餐厅与水烟吧*的信息。\n\n请问您能帮助我吗？`,
  }
  return getWhatsAppLink(messages[locale])
}

// Template 4 — Eventos e Grupos
export function reservaEvento(locale: Locale = 'pt'): string {
  const messages: Record<Locale, string> = {
    pt: `Olá, Keny Lorena! 🎉\n\nGostaria de informações sobre *Eventos e Reservas para Grupos* no vosso espaço.\n\nAguardo contacto. Obrigado!`,
    en: `Hello, Keny Lorena! 🎉\n\nI would like information about *Events and Group Bookings* at your venue.\n\nLooking forward to hearing from you. Thank you!`,
    fr: `Bonjour, Keny Lorena! 🎉\n\nJe souhaite des informations sur les *Événements et Réservations de Groupe* dans votre espace.\n\nDans l'attente de votre retour. Merci!`,
    zh: `您好，Keny Lorena！🎉\n\n我想了解您的场地*活动及团体预订*信息。\n\n期待您的回复。谢谢！`,
  }
  return getWhatsAppLink(messages[locale])
}

// Template 5 — Contacto Geral
export function contactoGeral(locale: Locale = 'pt'): string {
  const messages: Record<Locale, string> = {
    pt: `Olá, Keny Lorena! 👋\n\nEstou a entrar em contacto através do vosso website.`,
    en: `Hello, Keny Lorena! 👋\n\nI'm reaching out through your website.`,
    fr: `Bonjour, Keny Lorena! 👋\n\nJe vous contacte via votre site web.`,
    zh: `您好，Keny Lorena！👋\n\n我通过您的网站与您联系。`,
  }
  return getWhatsAppLink(messages[locale])
}
