'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden bg-bg-deep">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-[rgba(201,168,76,0.05)] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-radial from-[rgba(123,94,167,0.05)] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <ScrollReveal direction="right" className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden">
              <div className="absolute inset-0 border border-[rgba(201,168,76,0.2)] m-4 z-20 pointer-events-none" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/founder.jpeg"
                  alt="Keny Lorena - Fundadora"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.95)] via-[rgba(8,6,4,0.1)] to-transparent z-10" />
              
              <div className="absolute bottom-10 left-8 z-20">
                <p className="font-serif italic text-gold text-2xl mb-1">Keny Lorena</p>
                <p className="text-xs uppercase tracking-[0.3em] text-cream/70">{t('founder_title')}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <ScrollReveal direction="left" className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                {t('overline')}
              </span>
            </div>

            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-10 leading-[1.1]"
            >
              {t('title').split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>

            <div className="space-y-6 text-muted font-body font-light leading-relaxed text-sm md:text-base">
              <p>{t('history')}</p>
              <p>{t('philosophy')}</p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-[rgba(201,168,76,0.3)]">
              <p className="font-serif italic text-xl md:text-2xl text-cream/90 leading-relaxed">
                "{t('quote')}"
              </p>
            </blockquote>

            <div className="mt-12">
              <Image 
                src="/images/logo.jpeg" 
                alt="Assinatura Keny Lorena" 
                width={60} 
                height={60} 
                className="rounded-full opacity-80 grayscale mix-blend-screen"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
