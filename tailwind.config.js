/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14171A',
          soft: '#3A3F45',
        },
        smoke: {
          50: '#FBFBFC',
          100: '#F4F5F7',
          200: '#E7E9EC',
          300: '#D7DAE0',
        },
        blue: {
          50: '#EEF2FF',
          100: '#DCE4FD',
          400: '#4C6FE0',
          500: '#2A4FD9',
          600: '#1D3FC2',
          700: '#17339B',
          950: '#0B1A52',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        container: '1440px',
      },
      boxShadow: {
        soft: '0 2px 24px rgba(20, 23, 26, 0.06)',
        card: '0 12px 40px rgba(20, 23, 26, 0.08)',
        glass: '0 8px 32px rgba(29, 63, 194, 0.12)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
