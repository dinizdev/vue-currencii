// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnight: '#09090B'
      }
    }
  },

  fontFamily: {
    sans: ['Manrope', 'sans-serif']
  },
  variants: {
    extend: {}
  },
  plugins: []
}
