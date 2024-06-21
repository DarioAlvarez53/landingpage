/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB6B2E",
        backgorundColor: "#FDE9CC"
      },
      backgroundImage: {
        fondo: "url(./src/assets/Fondo.jpg)"
      }
    },
  },
  plugins: [],
}

