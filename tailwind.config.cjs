/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        section: "30rem",
        image: "20rem",
      },
      backgroundImage: {
        dunes: "url('./public/images/dunes.jpeg')",
        mountains: "url(./public/images/mountains.jpeg)",
        chamisa: "url(./public/images/chamisa.jpeg)",
        mountainLake: "url(./public/images/mountain_lake.jpeg)",
        cottonwoods: "url(./public/images/cottonwoods.jpeg)",
      },
    },
    fontFamily: {
      sans: ["Barlow"],
    },
    color: {
      grayBg: "#2d2e2d40",
    },
  },
  plugins: [],
};
