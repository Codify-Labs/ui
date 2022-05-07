module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#017AFF",
          900: "#060A2E",
        },

        gray: {
          primary: "#05192D",
        },
      },
      boxShadow: {
        100: "0px 4.6px 20px 3px rgba(0, 0, 0, 0.025)",
        200: "0px 4px 30px rgba(0, 0, 0, 0.05)",
        300: "0px 4px 50px rgba(0, 0, 0, 0.05)",
        400: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        md: "7px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
