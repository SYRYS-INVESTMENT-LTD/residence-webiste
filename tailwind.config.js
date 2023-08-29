/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interlight: ['INTERDISPLAYLIGHT', 'sans-serif'],
        aeonik: ['Aeonik', 'sans-serif'],
        aeonikmedium: ['AeonikMedium', 'sans-serif'],
        aeonikbold: ['AeonikBold', 'sans-serif'],
        generalsans: ['GeneralSans', 'sans-serif'],
        generalsansmedium: ['GeneralSansMedium', 'sans-serif'],
        generalsansbold: ['GeneralSansBold', 'sans-serif'],
        generalsanssemibold: ['GeneralSansSemiBold', 'sans-serif'],
        generalsanslight: ['GeneralSansLight', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/Assets/Images/HeroGradient1.png')",
        'who': "url('/src/Assets/Images/Whoarewe.png')",
        'listbg2': "url('/src/Assets/Images/listingsbg5.png')",
      }
    },
  },
  plugins: [],
}