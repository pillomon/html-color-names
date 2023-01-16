/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1024px',
      },
      fontFamily: {
        anton: ['Anton Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
