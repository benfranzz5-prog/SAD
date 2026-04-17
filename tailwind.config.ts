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
        /* Brand palette — from SAD logo */
        green:       '#1D4B28',   // dark forest green
        'green-dark':'#122E19',   // deeper green
        'green-mid': '#2A6035',   // mid green
        cream:       '#D9CCBA',   // warm cream
        'cream-light':'#F2EDE5',  // light cream sections
        'off-white': '#FAF8F5',   // near-white backgrounds
      },
      fontFamily: {
        script:  ['"Great Vibes"', 'cursive'],
        heading: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['"Barlow"', 'Arial', 'Helvetica', 'sans-serif'],
        condensed: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':        'fadeUp 0.8s ease forwards',
        'fade-up-delay':  'fadeUp 0.8s ease 0.2s forwards',
        'fade-up-delay-2':'fadeUp 0.8s ease 0.4s forwards',
        'fade-in':        'fadeIn 0.6s ease forwards',
        'slide-down':     'slideDown 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
