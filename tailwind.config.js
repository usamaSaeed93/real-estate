/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
    building:"url('/Images/png/banner.png')"
      },
     fontFamily:{
      Manrope:['Manrope', 'sans-serif'],
      Inter:['Inter','sans-serif'],
      inter:['Inter','sans-serif']
     }
    },
  },
  plugins: [],
}
