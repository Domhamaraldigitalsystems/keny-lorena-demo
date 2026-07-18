'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { galleryImages } from '@/data/gallery'
import type { Locale } from '@/types/dhds-vitrine'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

type GalleryFilter = 'all' | 'restaurante' | 'lounge' | 'cocktails' | 'pratos' | 'shisha' | 'eventos' | 'detalhes'

export default function GallerySection() {
  const t = useTranslations('gallery')
  const locale = useLocale() as Locale
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter)

  function openLightbox(idx: number) { setLightbox(idx) }
  function closeLightbox() { setLightbox(null) }
  function prevLightbox() {
    if (lightbox === null) return
    setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1)
  }
  function nextLightbox() {
    if (lightbox === null) return
    setLightbox(lightbox === filtered.length - 1 ? 0 : lightbox + 1)
  }

  const filters: { key: GalleryFilter; label: string }[] = [
    { key: 'all', label: t('filter_all') },
    { key: 'restaurante', label: t('filter_restaurante') },
    { key: 'lounge', label: t('filter_lounge') },
    { key: 'cocktails', label: t('filter_cocktails') },
    { key: 'pratos', label: t('filter_pratos') },
    { key: 'shisha', label: t('filter_shisha') },
    { key: 'eventos', label: t('filter_eventos') },
    { key: 'detalhes', label: t('filter_detalhes') },
  ]

  return (
    <section
      id="galeria"
      className="relative py-24 md:py-32"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
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

          {/* Filter Buttons */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mt-8">
              {filters.map((f) => (
                <button
                  key={f.key}
                  id={`gallery-filter-${f.key}`}
                  onClick={() => setFilter(f.key)}
                  className="text-xs md:text-sm font-medium tracking-wider uppercase transition-all duration-300 px-3 md:px-4 py-2 rounded-full"
                  style={{
                    color: filter === f.key ? 'var(--bg-dark)' : 'var(--muted)',
                    backgroundColor: filter === f.key ? 'var(--gold)' : 'transparent',
                    border: filter === f.key ? '1px solid var(--gold)' : '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => (
              <motion.button
                key={img.src}
                id={`gallery-img-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden aspect-square"
                aria-label={img.alt[locale]}
              >
                <Image
                  src={img.src}
                  alt={img.alt[locale]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-[rgba(8,6,4,0.0)] group-hover:bg-[rgba(8,6,4,0.5)] transition-all duration-500 flex items-center justify-center">
                  <ZoomIn size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[rgba(4,3,2,0.97)] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              id="lightbox-close"
              onClick={closeLightbox}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-muted hover:text-cream transition-colors duration-200 z-10"
            >
              <X size={28} />
            </button>

            <button
              id="lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prevLightbox() }}
              aria-label="Anterior"
              className="absolute left-4 md:left-8 text-muted hover:text-cream transition-colors duration-200 z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt[locale]}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button
              id="lightbox-next"
              onClick={(e) => { e.stopPropagation(); nextLightbox() }}
              aria-label="Próximo"
              className="absolute right-4 md:right-8 text-muted hover:text-cream transition-colors duration-200 z-10"
            >
              <ChevronRight size={36} />
            </button>

            <div className="absolute bottom-4 text-muted text-sm">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
