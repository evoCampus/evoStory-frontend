/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  lightMode: ['class', '[data-theme="light"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}