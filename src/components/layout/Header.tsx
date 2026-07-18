'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react'
import LanguageSelector from '@/components/ui/LanguageSelector'
import { scrollToSection } from '@/lib/utils'

export default function Header() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { key: 'restaurante', section: 'restaurante' },
    { key: 'lounge', section: 'lounge' },
    { key: 'cardapio', section: 'menu' },
    { key: 'galeria', section: 'galeria' },
    { key: 'reservas', section: 'reservas' },
  ]

  function handleNav(section: string) {
    setMobileOpen(false)
    scrollToSection(section)
  }

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(8,6,4,0.95)] backdrop-blur-xl border-b border-[rgba(201,168,76,0.1)] py-3'
            : 'bg-gradient-to-b from-[rgba(8,6,4,0.8)] via-[rgba(8,6,4,0.2)] to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Keny Lorena — Início"
          >
            <div className="relative w-[94px] h-[94px] md:w-[121px] md:h-[121px] transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Keny Lorena Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="font-display text-lg md:text-xl font-bold text-cream group-hover:text-gold transition-colors duration-300 hidden sm:block"
            >
              Keny Lorena
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <button
                key={link.key}
                id={`nav-${link.key}`}
                onClick={() => handleNav(link.section)}
                className="text-muted hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {t(link.key as keyof typeof t)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>



          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button
              id="nav-cta"
              onClick={() => handleNav('reservas')}
              className="hidden sm:block btn-gold text-xs py-2.5 px-5"
            >
              {t('cta')}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-btn"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-cream hover:text-gold transition-colors duration-200"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[rgba(8,6,4,0.98)] backdrop-blur-xl flex flex-col justify-center px-8 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Navegação mobile">
          {navLinks.map((link, i) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.section)}
              className="text-left font-display text-3xl font-bold text-muted hover:text-gold transition-colors duration-200"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {t(link.key as keyof typeof t)}
            </button>
          ))}
        </nav>
        <div className="mt-12">
          <button
            id="mobile-nav-cta"
            onClick={() => handleNav('reservas')}
            className="btn-gold w-full justify-center text-sm py-4 mb-6"
          >
            {t('cta')}
          </button>
          

        </div>
      </div>
    </>
  )
}
