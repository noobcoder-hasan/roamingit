/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00AEEF',
          primaryDark: '#0089BE',
          accent1: '#FFC107',
          accent2: '#E53935',
          accent3: '#F29900',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        slideInDown: 'slideInDown 1s ease forwards',
        slideInUp: 'slideInUp 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
};
