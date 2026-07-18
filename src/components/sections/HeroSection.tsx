'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

export default function HeroSection() {
  const t = useTranslations('hero')
  const [hovered, setHovered] = useState<'restaurante' | 'lounge' | null>(null)
  const titleChars = 'Keny Lorena'.split('')

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
      aria-label="Hero — Keny Lorena"
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Restaurante Side */}
        <motion.div
          animate={{ width: hovered === 'lounge' ? '30%' : hovered === 'restaurante' ? '70%' : '50%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden flex-shrink-0"
          onMouseEnter={() => setHovered('restaurante')}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered('restaurante')}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero-restaurante.jpeg"
              alt="Restaurante Keny Lorena"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,rgba(8,6,4,0.4)_70%,rgba(8,6,4,0.8)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,6,4,0.6)] via-[rgba(8,6,4,0.2)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.8)] via-[rgba(8,6,4,0.1)] to-transparent" />
          <motion.div
            animate={{ opacity: hovered === 'restaurante' ? 1 : 0.4 }}
            className="absolute bottom-8 left-6 md:left-10"
          >
            <span className="section-overline">{t('restaurante_cta')}</span>
          </motion.div>
        </motion.div>

        {/* Lounge Side */}
        <motion.div
          animate={{ width: hovered === 'restaurante' ? '30%' : hovered === 'lounge' ? '70%' : '50%' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden flex-shrink-0"
          onMouseEnter={() => setHovered('lounge')}
          onMouseLeave={() => setHovered(null)}
          onTouchStart={() => setHovered('lounge')}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero-lounge.jpeg"
              alt="Lounge & Shisha Bar Keny Lorena"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,rgba(8,6,4,0.4)_70%,rgba(8,6,4,0.8)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(8,6,4,0.6)] via-[rgba(8,6,4,0.2)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.8)] via-[rgba(8,6,4,0.1)] to-transparent" />
          {/* Smoke particles */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="smoke-particle"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                left: `${15 + i * 20}%`,
                bottom: `${10 + i * 15}%`,
                '--duration': `${7 + i * 2}s`,
                '--delay': `${i * 1.5}s`,
              } as React.CSSProperties}
            />
          ))}
          <motion.div
            animate={{ opacity: hovered === 'lounge' ? 1 : 0.4 }}
            className="absolute bottom-8 right-6 md:right-10 text-right"
          >
            <span className="section-overline">{t('lounge_cta')}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Split Line */}
      <div className="split-line" />

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-overline mb-8 md:mb-6 block"
        >
          {t('badge')}
        </motion.div>

        <h1
          className="font-display text-[45px] sm:text-6xl md:text-8xl lg:text-9xl font-bold text-cream leading-[1.1] md:leading-none mb-6 md:mb-4 text-shadow-premium flex flex-wrap justify-center gap-[0.3em]"
          style={{ fontFamily: 'Playfair Display, serif' }}
          aria-label="Keny Lorena"
        >
          {'Keny Lorena'.split(' ').map((word, wordIdx) => (
            <span key={wordIdx} className="whitespace-nowrap flex">
              {word.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (wordIdx * 4 + i) * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-cream/95 text-xs sm:text-sm md:text-base tracking-[0.25em] md:tracking-[0.35em] uppercase mb-12 md:mb-10 font-semibold text-shadow-premium px-4"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto px-4 sm:px-0 w-full sm:w-auto"
        >
          <button id="hero-cta-restaurante" onClick={() => scrollToSection('restaurante')} className="btn-gold text-[13px] sm:text-sm w-full sm:w-auto h-[50px] sm:h-auto justify-center">
            {t('restaurante_cta')}
          </button>
          <button id="hero-cta-lounge" onClick={() => scrollToSection('lounge')} className="btn-ghost text-[13px] sm:text-sm w-full sm:w-auto h-[50px] sm:h-auto justify-center">
            {t('lounge_cta')}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => scrollToSection('concept')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted hover:text-gold transition-colors duration-300 pointer-events-auto"
        aria-label={t('scroll')}
      >
        <span className="text-xs tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
