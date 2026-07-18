'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HighlightsSection() {
  const t = useTranslations('menu')

  const highlights = [
    {
      title: 'Alta Culinária',
      desc: 'Criações masterizadas com os ingredientes mais nobres.',
      image: '/images/prato_gourmet.png'
    },
    {
      title: 'Cocktails de Assinatura',
      desc: 'Mixologia de vanguarda e bebidas premium.',
      image: '/images/cocktail_premium.png'
    },
    {
      title: 'Shisha Premium',
      desc: 'Essências exclusivas preparadas pelos nossos mestres.',
      image: '/images/lounge-shisha.jpeg'
    }
  ]

  return (
    <section id="highlights" className="relative py-24 md:py-32 bg-bg-dark border-t border-[rgba(201,168,76,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {t('overline')}
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
            {t('title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={index * 0.2}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm border border-[rgba(201,168,76,0.1)] group-hover:border-gold/50 transition-colors duration-500">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.9)] via-[rgba(8,6,4,0.2)] to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300 text-shadow-premium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed text-shadow-premium font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.6} className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 mb-8">
            <div className="bg-bg-dark px-8 py-4 rounded-full border border-[rgba(201,168,76,0.2)]">
              <p className="text-sm text-muted italic">
                {t('coming_soon_desc')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
