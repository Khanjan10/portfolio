/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your file structure is different
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9333ea",
        secondary: "#DAD2FF",
        bg: "#9B7EBD",
        text: "#1F1F1F" // optional
      },
    },
  },
  plugins: [],
};
