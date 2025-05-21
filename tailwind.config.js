/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9333ea",   // violet
        secondary: "#ec4899"  // pink
      }
    }
  },
  plugins: []
};
