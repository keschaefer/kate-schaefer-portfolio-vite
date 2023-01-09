/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        section: "40rem",
      },
      backgroundImage: {
        hero: "url('./src/images/crested_butte_vintage.jpeg')",
        hero2: "url('./src/images/crested_butte_black_and_white.jpeg')",
        hero3: "url('./src/images/dunes_black_and_white.jpeg')",
      },
    },
    fontFamily: {
      sans: ["Barlow"],
    },
  },
  plugins: [],
};
