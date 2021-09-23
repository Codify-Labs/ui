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
        }

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
