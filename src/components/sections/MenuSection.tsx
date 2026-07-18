'use client'

import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { menuCategories, isMenuAvailable } from '@/data/menu'
import { pedidoInformacao } from '@/data/whatsapp'
import type { Locale } from '@/types/dhds-vitrine'

export default function MenuSection() {
  const t = useTranslations('menu')
  const locale = useLocale() as Locale

  return (
    <section
      id="menu"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
    >
      {/* Gold ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, var(--gold) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="section-overline">{t('overline')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-cream mt-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('title')}
            </h2>
          </ScrollReveal>
        </div>

        {/* Category Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                className="flex items-center gap-2 px-5 py-2.5 glass-card border border-[rgba(201,168,76,0.15)] text-muted text-sm font-medium transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <span>{cat.icon}</span>
                <span>{cat.label[locale]}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Coming Soon State */}
        {!isMenuAvailable && (
          <ScrollReveal delay={0.3}>
            <div className="text-center glass-card border border-[rgba(201,168,76,0.15)] p-16 max-w-2xl mx-auto">
              {/* Ornament */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(201,168,76,0.5)">
                  <path d="M12 2L13.5 9.5L21 8L15.5 13.5L20 20L12 17L4 20L8.5 13.5L3 8L10.5 9.5L12 2Z" />
                </svg>
                <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
              </div>

              <h3
                className="font-display text-2xl font-bold text-cream mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('coming_soon')}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {t('coming_soon_desc')}
              </p>
              <Link
                id="menu-whatsapp-cta"
                href={pedidoInformacao(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex"
              >
                {t('cta_whatsapp')}
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
