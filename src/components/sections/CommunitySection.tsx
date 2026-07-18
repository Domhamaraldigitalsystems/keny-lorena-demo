'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { Instagram } from 'lucide-react'
import { contact } from '@/data/contact'

export default function CommunitySection() {
  return (
    <section className="relative py-24 bg-bg-deep border-t border-[rgba(201,168,76,0.05)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(201,168,76,0.05)] text-gold mb-6">
            <Instagram size={28} />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
            Acompanhe a Excelência
          </h2>
          <p className="text-muted text-lg font-light max-w-2xl mx-auto mb-12">
            Descubra os bastidores da nossa cozinha, os eventos mais exclusivos e a atmosfera única do Keny Lorena no nosso Instagram oficial.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Instagram feed placeholders para estética */}
            {['rest-01.jpeg', 'lounge-shisha.jpeg', 'rest-02.jpeg', 'lounge-cabine.jpeg'].map((img, i) => (
              <div key={i} className="aspect-square bg-[rgba(14,11,8,0.5)] border border-[rgba(201,168,76,0.1)] relative group overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(201,168,76,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <Instagram size={32} className="text-white drop-shadow-lg" />
                </div>
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/${img}')`, filter: 'grayscale(30%)' }} />
              </div>
            ))}
          </div>

          <a
            href={contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex uppercase tracking-widest text-xs px-8 py-4"
          >
            Seguir @KenyLorena
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
