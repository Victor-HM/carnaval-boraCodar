/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        red: {
          400: '#E45858'
        },
        purple: {
          700: '#6246EA'
        }
      }
    },
  },
  plugins: [],
}
