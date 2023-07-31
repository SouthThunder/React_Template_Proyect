/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}