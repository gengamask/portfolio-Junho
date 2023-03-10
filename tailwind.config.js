/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        '8/10': '80%'
      },
      width: {
        '108': '28rem',
        '112': '30rem',
        '118': '32rem',
      },
      height: {
        'screen70': '70vh',
        '108': '10vh'
      },
      margin: {
        '85': '21rem',
        '86': '22rem'
      },
      minHeight: {
        '20': '20vh',
        '10': '10vh'
      }
    },
  },
  plugins: [],
}
