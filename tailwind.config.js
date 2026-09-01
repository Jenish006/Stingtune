/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#E53E3E',
        darkBg: '#09090B',
        panelBg: '#121215',
        lightBg: '#F7F6F2',
        subtleGray: '#8A8A93'
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}