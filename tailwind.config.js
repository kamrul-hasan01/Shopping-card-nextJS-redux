/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      "pt-sans": ["PT Sans", "sans-serif"],
    },
    extend: {
      colors: {
        darkBlue: "#050717",
        purple: "#8280fd",
        navyBlue: "#182335",
      },
    },
  },
  plugins: [],
};
