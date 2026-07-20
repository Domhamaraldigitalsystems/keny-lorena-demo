'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-bg-deep border-t border-[rgba(201,168,76,0.05)] overflow-hidden flex items-center justify-center min-h-[500px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-gradient-radial from-[rgba(201,168,76,0.03)] to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-12 md:p-20 border border-[rgba(201,168,76,0.1)] bg-[rgba(14,11,8,0.85)] relative backdrop-blur-md shadow-2xl group transition-all duration-700 hover:border-[rgba(201,168,76,0.2)]">
            <Quote className="absolute top-8 left-1/2 -translate-x-1/2 text-[rgba(201,168,76,0.05)] w-24 h-24 transition-colors duration-700 group-hover:text-[rgba(201,168,76,0.1)]" />
            <p className="font-serif italic text-xl md:text-3xl text-cream/80 leading-relaxed mb-8 relative z-10 font-light">
              {"\u201C"}A aguardar a partilha das experiências dos nossos ilustres convidados.{"\u201D"}
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-[1px] bg-gold/50" />
              <div>
                <p className="text-xs text-gold/60 uppercase tracking-widest">Keny Lorena Community</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
