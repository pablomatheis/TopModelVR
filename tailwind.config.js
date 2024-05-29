/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
        ".index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              primary: {

              },
              secondary: {
                DEFAULT: colors.neutral[200],
                hover: colors.neutral[300],
                border: colors.neutral[400],
                text: colors.neutral[500],
                dark: colors.neutral[800],
                ['dark-hover']: colors.neutral[900],
                themebgpurple: '#5b2f8d',
                themebgpurpleshadow: '#432369',
                themebgpurpledarkshadow: '#2d1945',
                themebgblue: '#0080c1',
                themebgblueshadow: '#0a4061',
              }
          }
      }
  },
  plugins: [],
}



