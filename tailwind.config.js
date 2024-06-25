/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC1C24",
        backgorundColor: "#4A0508"
      },
      backgroundImage: {
        fondo: "url(./src/assets/Fondo.jpg)"
        
      }
    },
  },
  plugins: [],
}

