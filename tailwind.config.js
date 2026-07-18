/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A0782A',
        },
        amber: {
          warm: '#E8A87C',
        },
        violet: {
          lounge: '#7B5EA7',
          light: '#9B7EC7',
          dark: '#5B3E87',
        },
        bg: {
          deep: '#080604',
          dark: '#0E0B08',
          card: '#141009',
          surface: '#1A1510',
        },
        cream: '#F5EDD6',
        muted: '#8A7D6E',
        subtle: '#4A4035',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Marcellus', 'serif'],
        display: ['Marcellus', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        wider: '0.1em',
        tight: '-0.02em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A0782A 100%)',
        'gradient-smoke': 'radial-gradient(ellipse at center, rgba(123,94,167,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'smoke': 'smoke 8s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        smoke: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '0.6' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201, 168, 76, 0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      screens: {
        'xs': '390px',
      },
    },
  },
  plugins: [],
}
