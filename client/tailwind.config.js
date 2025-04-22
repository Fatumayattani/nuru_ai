/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fa',
          100: '#e1eff5',
          200: '#a5c4d4',
          300: '#7ba9bf',
          400: '#5c92ac',
          500: '#3d7a96',
          600: '#2e5f78',
          700: '#1f445a',
          800: '#10293c',
          900: '#010e1e',
        },
        secondary: {
          50: '#f7f5fc',
          100: '#eeebf9',
          200: '#bdb2e0',
          300: '#a28dd0',
          400: '#8768c0',
          500: '#6c43b0',
          600: '#55348c',
          700: '#3e2568',
          800: '#271644',
          900: '#100720',
        },
        accent: {
          50: '#f1f9f3',
          100: '#e3f3e7',
          200: '#a8d5ba',
          300: '#80be9b',
          400: '#57a77c',
          500: '#2e905d',
          600: '#237349',
          700: '#185635',
          800: '#0d3a22',
          900: '#021d0e',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};