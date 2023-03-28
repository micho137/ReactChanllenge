/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'get-schwifty': ['"Get Schwifty"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
