/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#141F38',
          medium: '#2D3853',
        },
        accent: {
          yellow: '#F59F0A',
          light: '#FBC02D',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F8FAFC',
          200: '#F3F5F7',
          300: '#E1E7EF',
          400: '#CCCCCC',
          500: '#65758B',
          900: '#0F1729',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
