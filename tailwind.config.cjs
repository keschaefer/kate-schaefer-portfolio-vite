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
        dunes: "url('./src/images/dunes.jpeg')",
        mountains: "url(./src/images/mountains.jpeg)",
        chamisa: "url(./src/images/chamisa.jpeg)",
        mountainLake: "url(./src/images/mountain_lake.jpeg)",
        cottonwoods: "url(./src/images/cottonwoods.jpeg)",
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
