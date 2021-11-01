const { colors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./_includes/**/*.{js,ts,jsx,tsx}",
    "./_layouts/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      nav: "1000px",
      lg: "1024px",
      xl: "1380px"
    },
    colors: {
      primary: "#202124",
      light_primary: "#3c4043",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      hint: "#5f6368",
      dark_hint: "#bcbfc2",
      hint_bg: "#F8F9FA"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
