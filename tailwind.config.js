/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F4E79', // Bleu foncé
          light: '#1F4E79',   // Bleu plus clair
          dark: '#0A1D30',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          dark: '#F3F4F6',
        },
        accent: {
          DEFAULT: '#C9A24D', // Doré
          light: '#E0B973',   // Doré clair
          dark: '#B08D3F',
        }
      },
    },
  },
  plugins: [],
};
