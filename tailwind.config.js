const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "homepage-hero": "url('/images/hero-image.jpg')",
      }),
      backgroundPosition: {
        "left-40": "40% 0%",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          darkest: "#c2c2c2",
          dark: "#eeeeee",
          DEFAULT: "#f5f5f5",
          light: "#fafafa",
          lightest: "#ffffff",
        },
        secondary: {
          darkest: "#102027",
          dark: "#263238",
          DEFAULT: "#37474f",
          light: "#455a64",
          lightest: "#62727b",
        },
        accent: {
          darkest: "#c68400",
          dark: "#ffb300",
          DEFAULT: "#ffc107",
          light: "#ffca28",
          lightest: "#ffe54c",
        },
      },
      fontFamily: {
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
        body: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first", "last"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
