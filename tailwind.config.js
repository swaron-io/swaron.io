/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral_gray: "#E5E5E5",
      gray: "#686868",
      high_gray: "#1E1E1E",
      blue: "#2563EB",
      light_blue: "#0066FF",
      white: "#FFFFFF",
      red: "#FF0000",
      white_ice: "#DDDDDD",
      white_blue: "#5398FF",
      mid_white_blue: "#5D9BFC"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: { inactive: '0px 2px 4px 2px rgba(0, 0, 0, 0.15)', interaction: '0px 2px 6px 4px rgba(0, 0, 0, 0.15)', }
    },
  },
  plugins: [],
};
