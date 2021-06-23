const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Quicksand", ...defaultTheme.fontFamily.sans],
        "display": ["Comfortaa"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
