const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        air: {
          100: "#fd5b21",
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid        '
        16: "repeat(16, minmax(0, 1fr)) ",
        // Complex site-specific column configuration
        header: "50px repeat(2, minmax(0, 1fr)) 80px",
      },
    },
  },
  plugins: [],
};
