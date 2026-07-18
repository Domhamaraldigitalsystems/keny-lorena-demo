'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { reservaEvento } from '@/data/whatsapp'
import { Calendar, Users, Star } from 'lucide-react'

export default function EventsSection() {
  const t = useTranslations('nav') // Usaremos algumas chaves ou hardcode por agora para luxo
  const tw = useTranslations('whatsapp')

  const events = [
    {
      icon: <Users size={24} />,
      title: 'Eventos Corporativos',
      desc: 'Experiências gastronómicas desenhadas para impressionar parceiros e celebrar o sucesso empresarial.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Celebrações Privadas',
      desc: 'Momentos inesquecíveis em ambientes exclusivos, com menus personalizados e serviço dedicado.'
    },
    {
      icon: <Star size={24} />,
      title: 'Experiência VIP',
      desc: 'Serviço de concierge completo, acesso prioritário e tratamento verdadeiramente excecional.'
    }
  ]

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden bg-[rgba(14,11,8,0.5)]">
      {/* Decorações */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <ScrollReveal direction="right">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Eventos <br/><span className="text-gold italic font-serif">Exclusivos</span>
            </h2>
            <p className="text-muted mb-10 text-lg font-light leading-relaxed">
              O Keny Lorena oferece o cenário perfeito para as suas ocasiões mais especiais. A nossa equipa de eventos encarrega-se de cada detalhe para garantir que a sua celebração seja imaculada.
            </p>
            
            <a 
              href={reservaEvento('pt')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              {tw('eventos')}
            </a>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {events.map((evt, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className={`p-8 border border-[rgba(201,168,76,0.15)] bg-[rgba(8,6,4,0.85)] backdrop-blur-md ${i === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="text-gold mb-6 opacity-80">{evt.icon}</div>
                  <h3 className="font-display text-xl font-bold text-cream mb-3">{evt.title}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed">{evt.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
