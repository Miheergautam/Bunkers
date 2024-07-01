/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* rihno: '#343f71',
        twilight: '#e9d8e4',
        pomegranate: '#f34c19',
        supernova: '#fbc40e', */
        'soft-green': '#CAE4DB',
        'golden-yellow': '#DCAE1D',
        'deep-teal': '#00303F',
        'mist': '#7A9D96',
      },
    },
  },
  plugins: [],
}
