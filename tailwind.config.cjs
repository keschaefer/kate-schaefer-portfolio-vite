/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        section: "30rem",
      },
    },
    fontFamily: {
      sans: ["Barlow"],
    },
  },
  plugins: [],
};
