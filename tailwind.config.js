/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cafe: {
          brown: 'var(--color-cafe-brown, #3B2D26)',
          gold: 'var(--color-cafe-gold, #B08D57)',
          cream: 'var(--color-cafe-cream, #F5F1E8)',
          beige: 'var(--color-cafe-beige, #E2DCCE)',
          green: 'var(--color-cafe-green, #4E5D3A)',
          dark: 'var(--color-cafe-dark, #3B2D26)',
          accent: 'var(--color-cafe-accent, #4E5D3A)',
          charcoal: 'var(--color-cafe-charcoal, #2C201A)',
          clay: 'var(--color-cafe-clay, #B86E4B)',
          'btn-text': 'var(--color-cafe-btn-text, #FFFFFF)'
        }
      },
      fontFamily: {
        'agrandir': ['var(--font-headings, "Cormorant Garamond")', 'serif'],
        'inter': ['var(--font-body, "Manrope")', 'sans-serif'],
        'cormorant': ['var(--font-headings, "Cormorant Garamond")', 'serif'],
        'manrope': ['var(--font-body, "Manrope")', 'sans-serif'],
        'noto': ['var(--font-headings, "Cormorant Garamond")', 'serif'],
        'menu': ['var(--font-menu, "Cormorant Garamond")', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};