/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Added Inter font
      },
      colors: {
        // Define your custom colors here to make them available as Tailwind classes
        // These are derived from the image you provided
        'knaptix-white': '#FFFFFF',
        'knaptix-light-gray': '#F5F5F5',
        'knaptix-black': '#000000',
        'knaptix-green': '#00B000',
        'knaptix-light-green': '#E0FFE0',
        'knaptix-medium-gray': '#CCCCCC',
      },
    },
  },
  plugins: [],
}
