/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  // content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#39446C",
        "color-2": "#202229",
        "color-3": "#FFBE2E",
        "color-4": "#C7F4C2",
        "color-5": "#F8F8F8",
        "color-6": "#959595",
        "color-7": "#EDEFFF",
        "color-8": "#A285D0",
        "color-9": "#F6F6F6",
        "color-10": "#C6C4C4",
      },
      fontFamily: {
        primary: "Roboto",
      },
    },
  },
  plugins: ["postcss-preset-mantine"],
};
