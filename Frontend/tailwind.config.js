/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#FF6767",
        customWhite: "FFFFFF",
        inputFontColor: "#999999",
        signupFontColor: "#212427",
        headerBgColor: "#F8F8F8",
        SearchColor: "#A1A3AB",
        DateColor: "#3ABEFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
