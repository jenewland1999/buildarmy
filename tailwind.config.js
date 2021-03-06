const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

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
