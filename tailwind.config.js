module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom-loginPage' : '60% 40%',
        'custom-adminPage' : '30% 70%'
      },
      height: {
        'screen-60': '60vh',
        'screen-200': '200vh',
      },
      width: {
        'screen-30': '30vw',
        'screen-70': '70vw',
      },
      colors: {
        'background-blue-car': '#0D28A6',
      }
    },
  },
  plugins: [],
}
