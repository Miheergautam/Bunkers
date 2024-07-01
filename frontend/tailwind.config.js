/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#CAE4DB',
        'golden-yellow': '#DCAE1D',
        'deep-teal': '#00303F',
        'mist': '#7A9D96',
      },
    },
  },
  plugins: [],
}
