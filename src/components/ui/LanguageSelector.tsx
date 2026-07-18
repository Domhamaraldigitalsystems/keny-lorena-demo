'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { localeNames, localeFull, locales } from '@/config/site'
import type { Locale } from '@/types/dhds-vitrine'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function LanguageSelector() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function switchLocale(next: Locale) {
    router.replace(pathname, { locale: next })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        id="language-selector-btn"
        aria-label="Selecionar idioma"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted hover:text-gold transition-colors duration-200 text-sm font-medium"
      >
        <Globe size={14} className="opacity-70" />
        <span>{localeNames[locale]}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 glass-card border border-gold/20 overflow-hidden z-50 shadow-xl">
          {locales.map((loc) => (
            <button
              key={loc}
              id={`lang-${loc}`}
              aria-label={`Mudar para ${localeFull[loc]}`}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 flex items-center justify-between ${
                locale === loc
                  ? 'text-gold bg-gold/5'
                  : 'text-muted hover:text-cream hover:bg-white/5'
              }`}
            >
              <span>{localeFull[loc]}</span>
              {locale === loc && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
