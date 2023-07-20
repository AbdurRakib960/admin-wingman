/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
    screens: {
      xs: "375px",
      sm: "680px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1680px",
      "3xl": "1920px",
      "max-xs": { max: "374px" },
      "max-sm": { max: "679px" },
      "max-md": { max: "767px" },
      "max-lg": { max: "1023px" },
      "max-xl": { max: "1199px" },
      "max-2xl": { max: "1439px" },
      "max-3xl": { max: "1679px" },
      "max-4xl": { max: "1919px" },
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
    // colors
    colors: {
      primary: "#F92C5D",
      "primary-pink-400": "#C7234A",
      "primary-pink-200": "#FA567D",
      "primary-pink-150": "#FDABBE",
      "primary-pink-100": "#FED5DF ",
      "secondary-yellow": "#FFC266",
      "secondary-orange": "#FF5C51",
      "secondary-purple": "#AD6CFF",
      "secondary-green": "#72D871",
      "neautral-500": "#202124",
      "neautral-400": "#2E3134",
      "neautral-300": "#3C4043",
      "neautral-200": "#5F6368",
      "neautral-150": "#80868B",
      "neautral-100": "#9AA0A6",
      "neautral-50": "#BDC1C6",
      "neautral-20": "#DADCE0",
      "neautral-10": "#E8EAED",
      "background-dark": "#110C19",
      "status-green-400": "#57A657",
      "status-green-300": "#72D871",
      "status-yellow-400": "#ED9C21",
      "status-yellow-300": "#FFC266",
      "status-orange": "#FC6C62",
      "text-primary": "#FDFCFF",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
          ".scrollbar-default": {
            "-ms-overflow-style": "auto",
            "scrollbar-width": "auto",
            "&::-webkit-scrollbar": {
              display: "block",
            },
          },
        },
        ["responsive"]
      );
    },
    require("@tailwindcss/line-clamp"),
  ],
};
