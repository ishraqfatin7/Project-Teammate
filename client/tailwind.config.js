module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: "media",
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1124px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
