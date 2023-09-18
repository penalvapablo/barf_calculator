/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      one: "#545871",
      two: "#F7ECEB",
      three: "#EBD0CE",
      four: "#FFFFFF",
      five: "#84889C",
    },
    extend: {
      fontFamily: {
        title: ["Della Respira", ...defaultTheme.fontFamily.sans],
        text: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
