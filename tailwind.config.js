/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          secondaryRed: '#DB4444',
          blackColor: '#000000',
          grayColor: '#F5F5F5',
          whiteColor:'#FAFAFA',
          grayBlack : '#4D4D4D'
        },
    },
  },
  plugins: [],
}