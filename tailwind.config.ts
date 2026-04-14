import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        accent: 'var(--color-accent)',
        cream: 'var(--color-cream)',
        silver: 'var(--color-silver)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 10vw, 9rem)',
        'display': 'clamp(2.5rem, 6vw, 6rem)',
        'heading': 'clamp(1.75rem, 3.5vw, 3rem)',
        'subheading': 'clamp(1.25rem, 2.5vw, 2rem)',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 10rem)',
        'section-sm': 'clamp(2rem, 4vw, 5rem)',
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.5em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      aspectRatio: {
        'portrait': '3 / 4',
        'cinema': '21 / 9',
        'card': '4 / 3',
      },
      gridTemplateColumns: {
        'editorial': '1fr 2fr',
        'editorial-rev': '2fr 1fr',
        'services': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      boxShadow: {
        'glow-accent': '0 0 40px -10px var(--color-accent)',
        'glow-cream': '0 0 40px -10px var(--color-cream)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}

export default config
