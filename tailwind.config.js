/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      "pt-sans": ["PT Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
