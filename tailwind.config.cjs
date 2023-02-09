/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s 1 steps(27)",
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
      },
    },
  },
  plugins: [],
};
