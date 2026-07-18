'use client'

import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionDivider from '@/components/ui/SectionDivider'
import { scrollToSection } from '@/lib/utils'

export default function ConceptSection() {
  const t = useTranslations('concept')

  return (
    <section
      id="concept"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-deep) 0%, var(--bg-dark) 50%, var(--bg-deep) 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, var(--gold) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="section-overline">{t('overline')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {t('title').split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <em>{line}</em> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              {t('description')}
            </p>
          </ScrollReveal>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Restaurante Card */}
          <ScrollReveal delay={0.1} direction="left">
            <button
              id="concept-card-restaurante"
              onClick={() => scrollToSection('restaurante')}
              className="group relative w-full text-left glass-card p-8 md:p-10 border border-[rgba(232,168,124,0.2)] hover:border-[rgba(232,168,124,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Amber glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(232,168,124,0.08) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="w-12 h-px bg-amber-warm mb-6 group-hover:w-24 transition-all duration-500" />
                <h3
                  className="font-display text-2xl md:text-3xl font-bold text-cream mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('restaurante_title')}
                </h3>
                <p className="text-muted leading-relaxed">{t('restaurante_desc')}</p>
                <div className="mt-8 flex items-center gap-2 text-amber-warm text-sm font-medium">
                  <span>Descobrir</span>
                  <span className="w-6 h-px bg-amber-warm group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </button>
          </ScrollReveal>

          {/* Lounge Card */}
          <ScrollReveal delay={0.2} direction="right">
            <button
              id="concept-card-lounge"
              onClick={() => scrollToSection('lounge')}
              className="group relative w-full text-left glass-card p-8 md:p-10 border border-[rgba(123,94,167,0.2)] hover:border-[rgba(123,94,167,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Violet glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at bottom right, rgba(123,94,167,0.12) 0%, transparent 70%)' }} />

              {/* Smoke particles */}
              <div
                className="smoke-particle absolute"
                style={{ width: '120px', height: '120px', right: '10%', bottom: '0', '--duration': '9s', '--delay': '0s' } as React.CSSProperties}
              />

              <div className="relative z-10">
                <div className="w-12 h-px bg-violet-lounge mb-6 group-hover:w-24 transition-all duration-500" />
                <h3
                  className="font-display text-2xl md:text-3xl font-bold text-cream mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t('lounge_title')}
                </h3>
                <p className="text-muted leading-relaxed">{t('lounge_desc')}</p>
                <div className="mt-8 flex items-center gap-2 text-violet-light text-sm font-medium">
                  <span>Explorar</span>
                  <span className="w-6 h-px bg-violet-lounge group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <SectionDivider />
    </section>
  )
}
