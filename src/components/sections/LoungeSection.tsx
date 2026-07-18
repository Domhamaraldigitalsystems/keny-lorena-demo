'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { scrollToSection } from '@/lib/utils'
import type { Locale } from '@/types/dhds-vitrine'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const loungeSlides = [
  { src: '/images/lounge-all.jpeg', alt: 'Vista Geral do Lounge' },
  { src: '/images/lounge-cabine.jpeg', alt: 'Cabine Privada' },
  { src: '/images/lounge-entrada.jpeg', alt: 'Entrada do Lounge' },
  { src: '/images/lounge-shisha.jpeg', alt: 'Shisha Bar' },
]

export default function LoungeSection() {
  const t = useTranslations('lounge')
  const locale = useLocale() as Locale
  const [current, setCurrent] = useState(0)

  function prev() { setCurrent((c) => (c === 0 ? loungeSlides.length - 1 : c - 1)) }
  function next() { setCurrent((c) => (c === loungeSlides.length - 1 ? 0 : c + 1)) }

  return (
    <section
      id="lounge"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-deep)' }}
    >
      {/* Violet ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(123,94,167,0.3) 0%, transparent 60%)' }}
        />
        {/* Animated smoke particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="smoke-particle absolute"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              right: `${5 + i * 12}%`,
              bottom: `${5 + i * 10}%`,
              '--duration': `${8 + i * 2.5}s`,
              '--delay': `${i * 2}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content — left on desktop for this section */}
          <div className="order-2 lg:order-1 lg:pr-8">
            <ScrollReveal delay={0.1}>
              <span className="section-overline" style={{ color: 'var(--violet-light)' }}>{t('overline')}</span>
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
              <div className="w-16 h-px mb-6" style={{ background: 'var(--violet-lounge)' }} />
              <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                {t('description')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  id="lounge-reserva-btn"
                  onClick={() => scrollToSection('reservas')}
                  className="btn-gold"
                  style={{ background: 'linear-gradient(135deg, var(--violet-dark), var(--violet-lounge), var(--violet-light))' }}
                >
                  {t('cta_reserva')}
                  <ArrowRight size={16} />
                </button>
                <Link
                  id="lounge-whatsapp-btn"
                  href={`https://wa.me/244935894648?text=${encodeURIComponent('Olá! Gostaria de reservar um espaço no Lounge & Shisha Bar Keny Lorena.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ borderColor: 'rgba(123,94,167,0.4)' }}
                >
                  {t('cta_whatsapp')}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Slider — right */}
          <ScrollReveal direction="right" className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              {loungeSlides.map((slide, i) => (
                <motion.div
                  key={slide.src}
                  className="absolute inset-0"
                  animate={{
                    opacity: i === current ? 1 : 0,
                    scale: i === current ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.5)] to-transparent" />
                </motion.div>
              ))}

              {/* Controls */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                <button
                  id="lounge-slider-prev"
                  onClick={prev}
                  aria-label="Slide anterior"
                  className="w-10 h-10 glass-card border border-[rgba(123,94,167,0.3)] flex items-center justify-center text-cream hover:text-violet-light hover:border-violet-lounge transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  id="lounge-slider-next"
                  onClick={next}
                  aria-label="Próximo slide"
                  className="w-10 h-10 glass-card border border-[rgba(123,94,167,0.3)] flex items-center justify-center text-cream hover:text-violet-light hover:border-violet-lounge transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                {loungeSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? '24px' : '8px',
                      height: '4px',
                      borderRadius: '2px',
                      background: i === current ? 'var(--violet-light)' : 'rgba(155,126,199,0.3)',
                    }}
                  />
                ))}
              </div>

              {/* Violet accent */}
              <div className="absolute top-0 right-0 w-1 h-32" style={{ background: 'linear-gradient(to bottom, var(--violet-lounge), transparent)' }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
