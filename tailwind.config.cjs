/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s 1 steps(27)",
        bgshift: "bgshift 60s linear infinite",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
            "border-right-width": "2px",
          },
          "80%": {
            width: "27ch",
            "border-right-width": "2px",
          },
          "100%": {
            width: "27ch",
            "border-right-width": "0px",
          },
        },
        bgshift: {
          "0%": {
            "background-position": "center",
          },
          "50%": {
            "background-position": "bottom 0px left 0px",
          },
          "100%": {
            "background-position": "center",
          },
        },
      },
    },
  },
  plugins: [],
};
