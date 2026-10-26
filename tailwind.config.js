/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          950: '#151515',
          900: '#181818',
          850: '#1c1c1c',
          800: '#202020',
          750: '#252525',
          700: '#2b2b2b',
        },
      },
      boxShadow: {
        panel: '0 24px 60px -32px rgba(0, 0, 0, 0.9)',
        key: '0 1px 0 0 rgba(255, 255, 255, 0.04) inset',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 260ms ease-out both',
        shake: 'shake 220ms ease-in-out',
      },
    },
  },
  plugins: [],
}
