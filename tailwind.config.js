/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#f7f7f7",
      grey: "#d9d9d9",
    },
    fontFamily: {
      serif: "['Source Serif Pro', 'sans-serif']",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
