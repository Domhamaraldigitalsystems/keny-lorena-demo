'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contact } from '@/data/contact'
import { useTranslations } from 'next-intl'

export default function ContactLocationSection() {
  const t = useTranslations('footer')

  return (
    <section id="contact-location" className="relative py-24 md:py-32 bg-bg-dark border-t border-[rgba(201,168,76,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
            Localização & Contactos
          </h2>
          <p className="text-muted text-lg font-light">
            Onde a excelência encontra a sua morada.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Informações */}
          <ScrollReveal direction="right" className="space-y-12">
            <div>
              <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <MapPin size={16} /> Morada
              </h3>
              <p className="text-cream text-lg font-light leading-relaxed">
                {contact.address.pt || "A nossa localização premium será revelada em breve."}
              </p>
            </div>

            <div>
              <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <Phone size={16} /> Linha de Concierge
              </h3>
              <p className="text-cream text-lg font-light">
                {contact.whatsapp}
              </p>
            </div>

            <div>
              <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <Clock size={16} /> Horários
              </h3>
              {contact.hours.length === 0 ? (
                <p className="text-cream text-lg font-light italic">
                  Disponível por marcação prévia.
                </p>
              ) : (
                <ul className="space-y-3">
                  {(contact.hours as any[]).map((h, i) => (
                    <li key={i} className="flex justify-between items-center text-lg font-light">
                      <span className="text-muted">{h.days.pt}</span>
                      <span className="text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollReveal>

          {/* Mapa Decorativo / Em breve */}
          <ScrollReveal direction="left" className="h-full min-h-[400px] flex flex-col gap-6">
            <div className="w-full h-[400px] border border-[rgba(201,168,76,0.2)] bg-[rgba(14,11,8,0.85)] relative overflow-hidden group">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Guilherme%20Pereira%20Ingl%C3%AAs,%20Luanda,%20Angola&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Keny Lorena Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(8,6,4,0.8)]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.google.com/maps?dirflg=d&daddr=Rua+Guilherme+Pereira+Inglês,+Luanda,+Angola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold flex-1 text-center justify-center flex items-center gap-2"
              >
                <MapPin size={16} /> Obter Direções
              </a>
              <a 
                href="https://maps.google.com/maps?q=Rua+Guilherme+Pereira+Inglês,+Luanda,+Angola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost flex-1 text-center justify-center flex items-center gap-2"
              >
                Abrir no Google Maps
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
