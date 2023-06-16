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
      },
      backgroundImage: {
        'hero': "url('/src/Assets/Images/HeroGradient.png')",
      }
    },
  },
  plugins: [],
}