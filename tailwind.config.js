/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#EFEADA',
      },
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

