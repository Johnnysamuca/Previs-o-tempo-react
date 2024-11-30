/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
