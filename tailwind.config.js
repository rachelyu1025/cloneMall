/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      border_gray: '#343434',
      btn_gray: '#efefef',
    },
    extend: {},
  },
  plugins: [],
};
