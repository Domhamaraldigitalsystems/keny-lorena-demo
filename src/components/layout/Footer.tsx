'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { contact } from '@/data/contact'
import { siteConfig } from '@/config/site'
import { pedidoInformacao, reservaEvento } from '@/data/whatsapp'
import { Instagram, Facebook, Linkedin, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')
  const tw = useTranslations('whatsapp')

  const year = new Date().getFullYear()

  const quickLinks = [
    { key: 'restaurante', section: 'restaurante' },
    { key: 'lounge', section: 'lounge' },
    { key: 'cardapio', section: 'menu' },
    { key: 'galeria', section: 'galeria' },
    { key: 'reservas', section: 'reservas' },
  ]

  return (
    <footer id="footer" className="bg-[#060402] border-t border-[rgba(201,168,76,0.1)]">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#0E0B08] via-[#1A1510] to-[#0E0B08] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-display text-2xl md:text-3xl font-bold text-cream mb-1"
            >
              Reserve a Sua Experiência
            </h3>
            <p className="text-muted text-sm">{t('tagline')}</p>
          </div>
          <a
            id="footer-whatsapp-cta"
            href={pedidoInformacao('pt')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex-shrink-0"
          >
            <WhatsAppIcon />
            {t('whatsapp_cta')}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-3 mb-5">
              <div className="relative w-[110px] h-[110px] md:w-[115px] md:h-[115px] flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="Keny Lorena" fill className="object-contain" />
              </div>
              <div className="mt-2 md:mt-0">
                <div className="font-display text-2xl md:text-xl font-bold text-cream mb-2 md:mb-0">
                  Keny Lorena
                </div>
                <div className="text-xs text-muted tracking-widest uppercase mb-4 md:mb-2">{t('tagline')}</div>
                <div className="text-[rgba(201,168,76,0.4)] text-[10px] tracking-wide uppercase leading-relaxed md:leading-tight">
                  <span className="block">Arquitetura Digital por DHDS</span>
                  <span className="block">Dom Hamaral Digital Systems</span>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 justify-center md:justify-start mt-4 md:mt-2">
              {contact.social.instagram && (
                <a
                  id="footer-instagram"
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
              )}
              {contact.social.facebook && (
                <a
                  id="footer-facebook"
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>
              )}
              {contact.social.tiktok && (
                <a
                  id="footer-tiktok"
                  href={contact.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              )}
              {contact.social.linkedin && (
                <a
                  id="footer-linkedin"
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
              )}
              <a
                id="footer-whatsapp-icon"
                href={pedidoInformacao('pt')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-muted hover:text-[#25D366] hover:border-[#25D366] transition-all duration-300"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.section)
                      el?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-muted hover:text-gold text-sm transition-colors duration-200"
                  >
                    {tn(link.key as 'restaurante' | 'lounge' | 'cardapio' | 'galeria' | 'reservas')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              {t('contact')}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                <a
                  id="footer-phone"
                  href={`tel:${siteConfig.whatsapp}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {contact.whatsapp || siteConfig.whatsapp}
                </a>
              </li>
              {contact.address.pt && (
                <li className="flex items-start gap-3 text-sm text-muted">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                  <span>{contact.address.pt}</span>
                </li>
              )}
              {!contact.address.pt && (
                <li className="flex items-start gap-3 text-sm text-muted italic">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                  <span>{t('address_coming')}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              {t('hours')}
            </h4>
            {contact.hours.length === 0 ? (
              <p className="text-muted text-sm italic">{t('hours_coming')}</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {(contact.hours as Array<{ days: Record<string, string>; time: string }>).map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Clock size={14} className="mt-0.5 flex-shrink-0 text-gold/50" />
                    <div>
                      <div className="text-cream">{h.days.pt}</div>
                      <div className="text-muted">{h.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(201,168,76,0.08)]">
        <div className="max-w-7xl mx-auto px-6 py-6 pb-28 md:pb-6 flex items-center justify-center">
          <p className="text-muted text-xs text-center">
            {t('copyright').replace('2025', `${year}`)}
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
