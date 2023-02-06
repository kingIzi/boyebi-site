/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        olea: ["Oleo Script", "cursive"],
      },
      colors: {
        primary: "#055216",
        secondary: "#d5ac2a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
