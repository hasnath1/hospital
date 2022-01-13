module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "left-right": "left-right 2s linear infinite",
      },
      boxShadow: {
        "3xl": "0 0 10px #dddddd",
      },
    },

    fontFamily: {
      poppins: "'Poppins',sans-serif",
      montserrat: "'Montserrat',sans-serif",
    },
  },
  plugins: [],
};
