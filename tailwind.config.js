/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroboys': "url('/heroboys.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
