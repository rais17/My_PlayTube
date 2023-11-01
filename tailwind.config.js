/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {

      screens: {
        at1408: '1408px',
        at1300: '1300px',
        at1080: '1080px',
        at600: '600px',
        at464: '464px',
        xxs: '0px',
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
