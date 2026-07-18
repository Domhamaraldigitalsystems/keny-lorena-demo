'use client'

import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { reservaRestaurante, reservaLounge } from '@/data/whatsapp'
import type { Locale, ReservationRequest } from '@/types/dhds-vitrine'
import { Send, CreditCard, Info, ArrowRight, ArrowLeft } from 'lucide-react'

type ReservationType = 'restaurante' | 'lounge'

export default function ReservaSection() {
  const t = useTranslations('reserva')
  const locale = useLocale() as Locale

  const [step, setStep] = useState(1)
  const [type, setType] = useState<ReservationType>('restaurante')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })

  const isAmber = type === 'restaurante'
  const accentColor = isAmber ? 'var(--amber)' : 'var(--violet-lounge)'
  const accentLight = isAmber ? '#E8C97A' : 'var(--violet-light)'

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleNext() {
    setStep(s => Math.min(s + 1, 3))
  }

  function handlePrev() {
    setStep(s => Math.max(s - 1, 1))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone || !form.date || !form.time) return

    const data: ReservationRequest = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      type,
      date: form.date,
      time: form.time,
      guests: Number(form.guests),
      notes: form.notes,
    }

    const link = type === 'restaurante'
      ? reservaRestaurante(data, locale)
      : reservaLounge(data, locale)

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="reservas"
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Dynamic ambient */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-1000">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: isAmber
              ? 'radial-gradient(ellipse at 30% 70%, rgba(232,168,124,0.25) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at 70% 30%, rgba(123,94,167,0.25) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-overline">{t('overline')}</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-cream mt-4 tracking-premium-wider"
            >
              {t('title')}
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <form
            id="reserva-form"
            onSubmit={handleSubmit}
            className="glass-card border border-[rgba(201,168,76,0.15)] p-8 md:p-14 shadow-2xl relative overflow-hidden"
            noValidate
          >
            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-10 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[rgba(201,168,76,0.1)] -z-10" />
              {[1, 2, 3].map(num => (
                <div 
                  key={num} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${step >= num ? 'bg-gold text-bg-dark shadow-[0_0_15px_rgba(201,168,76,0.4)]' : 'bg-bg-dark border border-[rgba(201,168,76,0.2)] text-muted'}`}
                >
                  {num}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl text-cream mb-2">A Sua Escolha</h3>
                    <p className="text-muted text-sm font-light">Selecione o ambiente para a sua experiência.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setType('restaurante')}
                      className="py-6 px-4 border transition-all duration-500 flex flex-col items-center justify-center gap-3 group"
                      style={{
                        borderColor: type === 'restaurante' ? 'var(--amber)' : 'rgba(201,168,76,0.15)',
                        color: type === 'restaurante' ? 'var(--amber)' : 'var(--muted)',
                        background: type === 'restaurante' ? 'rgba(232,168,124,0.05)' : 'transparent',
                      }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-500">🍽️</span>
                      <span className="text-sm font-medium tracking-wide uppercase">{t('type_restaurante')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setType('lounge')}
                      className="py-6 px-4 border transition-all duration-500 flex flex-col items-center justify-center gap-3 group"
                      style={{
                        borderColor: type === 'lounge' ? 'var(--violet-lounge)' : 'rgba(201,168,76,0.15)',
                        color: type === 'lounge' ? 'var(--violet-light)' : 'var(--muted)',
                        background: type === 'lounge' ? 'rgba(123,94,167,0.05)' : 'transparent',
                      }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-500">💨</span>
                      <span className="text-sm font-medium tracking-wide uppercase">{t('type_lounge')}</span>
                    </button>
                  </div>
                  <button type="button" onClick={handleNext} className="btn-gold w-full justify-center py-4">
                    Continuar <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl text-cream mb-2">Detalhes da Reserva</h3>
                    <p className="text-muted text-sm font-light">Quando teremos a honra da sua visita?</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="reserva-date" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('date')} *</label>
                      <input id="reserva-date" name="date" type="date" value={form.date} onChange={handleChange} required className="form-field py-3" />
                    </div>
                    <div>
                      <label htmlFor="reserva-time" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('time')} *</label>
                      <input id="reserva-time" name="time" type="time" value={form.time} onChange={handleChange} required className="form-field py-3" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="reserva-guests" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('guests')} *</label>
                    <select id="reserva-guests" name="guests" value={form.guests} onChange={handleChange} className="form-field py-3">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                        <option key={n} value={n} style={{ background: 'var(--bg-card)' }}>{n} Convidados</option>
                      ))}
                      <option value="13+" style={{ background: 'var(--bg-card)' }}>12+ Convidados</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={handlePrev} className="btn-ghost flex-1 justify-center py-4">
                      <ArrowLeft size={16} /> Voltar
                    </button>
                    <button type="button" onClick={handleNext} disabled={!form.date || !form.time} className="btn-gold flex-1 justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                      Continuar <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl text-cream mb-2">O Convidado</h3>
                    <p className="text-muted text-sm font-light">Para um serviço verdadeiramente personalizado.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label htmlFor="reserva-name" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('name')} *</label>
                      <input id="reserva-name" name="name" type="text" value={form.name} onChange={handleChange} required className="form-field py-3" placeholder="—" />
                    </div>
                    <div>
                      <label htmlFor="reserva-phone" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('phone')} *</label>
                      <input id="reserva-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required className="form-field py-3" placeholder="+244 —" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="reserva-email" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('email')}</label>
                    <input id="reserva-email" name="email" type="email" value={form.email} onChange={handleChange} className="form-field py-3" placeholder="—" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="reserva-notes" className="block text-xs text-muted mb-2 tracking-wide uppercase">{t('notes')}</label>
                    <textarea id="reserva-notes" name="notes" value={form.notes} onChange={handleChange} rows={2} className="form-field py-3 resize-none" placeholder="—" />
                  </div>

                  <div data-integration="dhds-vitrine-multicaixa" className="mb-8 p-5 border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.03)] rounded-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard size={18} className="text-gold/60" />
                      <span className="text-xs text-muted tracking-wide uppercase">{t('payment_label')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted/70 text-sm font-light">{t('payment_coming')}</span>
                      <span className="text-[10px] px-2 py-1 border border-[rgba(201,168,76,0.3)] text-gold/60 uppercase tracking-widest bg-[rgba(201,168,76,0.05)]">
                        Em Breve
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button type="button" onClick={handlePrev} className="btn-ghost px-6 py-4">
                      <ArrowLeft size={16} />
                    </button>
                    <button type="submit" id="reserva-submit" className="btn-gold flex-1 justify-center py-4" style={{ background: `linear-gradient(135deg, ${accentColor}99, ${accentColor}, ${accentLight})` }}>
                      <Send size={16} /> {t('submit')}
                    </button>
                  </div>
                  
                  <p className="text-center text-muted/50 text-xs mt-6 flex items-center justify-center gap-1.5 font-light">
                    <Info size={12} /> {t('disclaimer')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
