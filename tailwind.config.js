const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          mono: [...defaultTheme.fontFamily.mono],
          sans: [...defaultTheme.fontFamily.sans],
        },
        colors: {
          blueGray: defaultColors.blueGray,
          trueGray: defaultColors.trueGray,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
