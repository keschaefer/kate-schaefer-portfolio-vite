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
        dunes: "url('dunes.jpeg')",
        mountains: "url(mountains.jpeg)",
        chamisa: "url(chamisa.jpeg)",
        mountainLake: "url(mountain_lake.jpeg)",
        cottonwoods: "url(cottonwoods.jpeg)",
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
