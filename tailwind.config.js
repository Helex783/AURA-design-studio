/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#B8932E',
        }
      }
    },
  },
  plugins: [],
}