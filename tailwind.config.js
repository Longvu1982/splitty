/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-orange': '#ff714b',
        'accent-orange-light': '#ebbe61',
        primary: '#242424',
        success: '#238b40',
        fail: '#be3951'
      },
      backgroundColor: {
        'accent-orange': '#ff714b',
        'accent-orange-light': '#ebbe61',
        primary: '#242424',
        success: '#ceffd0',
        fail: '#ffe1e1 '
      }
    }
  },
  plugins: []
};
