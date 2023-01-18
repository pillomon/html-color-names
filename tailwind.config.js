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
      backgroundSize: {
        '5/1': '500%',
      },
      backgroundImage: {
        'text-pattern':
          'linear-gradient(to left, #2ecc71, #3498db, #9b59b6, #f39c12)',
      },
      fontFamily: {
        magilio: ['Magilio Regular', 'sans-serif'],
      },
      spacing: {
        '1/10': '10%',
      },
      animation: {
        text: 'text 5s linear infinite',
      },
      keyframes: {
        text: {
          '0%': {
            'background-position': '0 100%',
          },
          '50%': {
            'background-position': '100% 0',
          },
          '100%': {
            'background-position': '0 100%',
          },
        },
      },
    },
  },
  plugins: [],
};
