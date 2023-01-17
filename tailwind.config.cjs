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
        dunes: "url('images/dunes.jpeg')",
        mountains: "url(images/mountains.jpeg)",
        chamisa: "url(images/chamisa.jpeg)",
        mountainLake: "url(images/mountain_lake.jpeg)",
        cottonwoods: "url(images/cottonwoods.jpeg)",
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
