/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      primaryColor: "#8B5FBF",
      textColor: "#333333",
      bg: "#F5F5F5 ",
      lightOffWhite: "#F8F8F8",
      lightGrayText: "#CCCCCC",
      // charcoal: "#000000",
      // charcoal: "#2C1E3D",
      charcoal: "#333333",
    },
    screens: {
      xxm: "360px",
      xm: "413px",
      m: "538px",
      sm: "640px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      // display: ["Cormorant Garamond", "serif"],
      display: ["Playfair Display", "serif"],
    },
    maxWidth: {
      custom: "1000px",
    },

    extend: {},
  },
  plugins: [],
};
