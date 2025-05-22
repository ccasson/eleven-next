/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00c4ff',
        secondary: '#ff00c8',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(0, 196, 255, 0.5)',
        'glow-secondary': '0 0 15px rgba(255, 0, 200, 0.5)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
