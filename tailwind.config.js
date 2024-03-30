/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#56dfbf',
          opacity: '#56dfbfd4',
          ligth: '#5AF2CE',
          300: '#50d5b6',
          400: '#46bca1',
        },
        secondary: {
          DEFAULT: '#c3ccca',
          opacity: '#c3cccad4',
          ligth: '#dce2e1',
          300: '#adb3b2',
          400: '#a1a4a3',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
