/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        juraRegular: ['Jura Regular'],
        juraBold: ['Jura Bold'],
        juraMedium: ['Jura Medium'],
        juraSemiBold: ['Jura SemiBold'],
        juraLight: ['Jura Light']
      }
    },
  },
  plugins: [],
}