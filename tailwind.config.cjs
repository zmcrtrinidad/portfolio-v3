/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-20": "#9F765F",
        "brown-30": "#c47f58",
        "brown-50": "#83553B",
        "brown-60": "#82563d",
        "brown-100": "#4B3122",
      },
      backgroundImage: (theme) => ({
        "gradient-graybrown": "linear-gradient(90deg, #6c5541 48%, #4b3122 50%)",
      }),
      fontFamily: {
        kronaOne: ["Krona One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        dots: "url('./assets/dots.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    plugins: [],
  }
}