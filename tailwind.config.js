module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding:{
        '200px':'200px',
        '20px':'20px'
      },
      maxWidth:{
        "1200px":"1200px"
      },
      gap:{
        "50px":'50px'
      },
      colors:{
        "normal":"#10b981",
        "hover":"#34d399"
      },
      margin:{
        "cn": "0 auto"
      },
      lineHeight:{
        "54px":'54px'
      },
      letterSpacing:{
        "min":"-1.92px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
