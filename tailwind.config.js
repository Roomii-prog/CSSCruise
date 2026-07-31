/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#031b4e',
        gold: '#f6c100',
        ice: '#f7f9fc',
      },
    },
  },
  plugins: [],
};
