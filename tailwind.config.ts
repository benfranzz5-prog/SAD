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
        primary: '#FFF8E6',
        secondary: '#0000EE',
        accent: '#EBEDEC',
        bg: '#E8E6E6',
        forest: '#003B20',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', '"DIN Alternate"', '"Arial Narrow"', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'display': ['45px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['57px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body': ['17px', { lineHeight: '1.6' }],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-up-delay': 'fadeUp 0.8s ease 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.4s forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
