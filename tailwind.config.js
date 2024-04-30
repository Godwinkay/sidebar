/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#bd1555",
        "lightpink": "#fa648c"
      },
      fontFamily: {
        "pacifico" : ["Pacifico", "cursive"]
      }
    },
  },
  plugins: [],
}