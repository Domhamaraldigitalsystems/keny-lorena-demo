'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { scrollToSection } from '@/lib/utils'
import type { Locale } from '@/types/dhds-vitrine'
import { ArrowRight } from 'lucide-react'

export default function RestauranteSection() {
  const t = useTranslations('restaurante')
  const locale = useLocale() as Locale

  return (
    <section
      id="restaurante"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              {/* Main image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/rest-01.jpeg"
                  alt="Restaurante Keny Lorena"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.4)] to-transparent" />
            </div>

            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-2/5 h-48 md:h-64 overflow-hidden border-2 border-[rgba(232,168,124,0.3)] shadow-2xl">
              <Image
                src="/images/rest-02.jpeg"
                alt="Interior Restaurante"
                fill
                className="object-cover object-center"
                sizes="200px"
              />
            </div>

            {/* Gold accent line */}
            <div className="absolute top-0 left-0 w-1 h-32" style={{ background: 'linear-gradient(to bottom, var(--amber), transparent)' }} />
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pl-8">
            <ScrollReveal delay={0.1}>
              <span className="section-overline">{t('overline')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-cream mt-4 mb-6 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {t('title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="w-16 h-px mb-6" style={{ background: 'var(--amber)' }} />
              <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                {t('description')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  id="restaurante-reserva-btn"
                  onClick={() => scrollToSection('reservas')}
                  className="btn-gold"
                  style={{ background: 'linear-gradient(135deg, #A0782A, var(--amber), #E8C97A)' }}
                >
                  {t('cta_reserva')}
                  <ArrowRight size={16} />
                </button>
                <Link
                  id="restaurante-whatsapp-btn"
                  href={`https://wa.me/244935894648?text=${encodeURIComponent('Olá! Gostaria de reservar uma mesa no Restaurante Keny Lorena.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {t('cta_whatsapp')}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
