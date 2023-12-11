/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
    "./src/**/**/**/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#A70B0B",
      gray: require("tailwindcss/colors").gray,
      cyan: require("tailwindcss/colors").cyan,
      sky: require("tailwindcss/colors").sky,
      indigo: require("tailwindcss/colors").indigo,
      emerald: require("tailwindcss/colors").emerald,
      yellow: require("tailwindcss/colors").yellow,
      rose: require("tailwindcss/colors").rose,
      green: require("tailwindcss/colors").green,
      slate: require("tailwindcss/colors").slate,
      red: require("tailwindcss/colors").red,
      blue: require("tailwindcss/colors").blue,
      amber: require("tailwindcss/colors").amber,
      white: require("tailwindcss/colors").white,
    },
    extend: {},
  },
  plugins: [],
};
