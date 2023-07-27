/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfprobold: ['SFPRODISPLAYBOLD', 'sans-serif'],
        sfpromedium: ['SFPRODISPLAYMEDIUM', 'sans-serif'],
        sfproregular: ['SFPRODISPLAYREGULAR', 'sans-serif'],
        sfprosemibold: ['SFPRODISPLAYSEMIBOLD', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/src/Assets/Images/HeroGradient.png')",
        'who': "url('/src/Assets/Images/Whoarewe.png')",
        'listbg': "url('/src/Assets/Images/listingsbg.svg')",
        'listbg2': "url('/src/Assets/Images/listingsbg3.png')",
      }
    },
  },
  plugins: [],
}