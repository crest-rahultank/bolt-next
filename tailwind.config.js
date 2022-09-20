/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'max':'400px'},
      // => @media (min-width: 425px) { ... }
    },
  },
  plugins: [],
}
