/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        "main-black": "#0D0D0D",
        "main-white": "#f9f6f6",
        "card-background":"#f9f6f6ca",
        "placeholder-color":"#6C757D"
      }
    },
  },
  plugins: [],
}

