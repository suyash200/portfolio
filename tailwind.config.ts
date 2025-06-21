// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // This utility uses a CSS variable for the line color
        'app-grid-pattern': 'linear-gradient(to right, var(--tw-grid-line-color) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-grid-line-color) 1px, transparent 1px)',
      },
      backgroundSize: {
        // This utility sets the size of your grid cells
        'grid-cell': '70px 70px', // Match the 70px from your HTML
      },
    },
  },
  plugins: [],
}
