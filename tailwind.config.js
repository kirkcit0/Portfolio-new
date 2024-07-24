/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', './publix/index.html'],
  darkMode: 'class',
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
