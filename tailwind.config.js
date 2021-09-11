const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      purple: colors.violet,
      blue: colors.blue,
      'white': '#FFF',
      'black': '#000',
      'mainTitle': '#2C2E43',
      'subTitle': '#9697A1',
      'label': '#616272',
      'accountButton': '#0011A7',
      'light-blue': { '75': '#6B68F2' },
      'small': '#616272',
      'signIn': '#616272',
      'signInLabel': '#1d4ed8'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'mainTitle': '41px',
      'subTitle': '23px',
      'label': '16px',
      'signIn': '14px',
      '': '14px',
      'accountButton': '16px',
      'small':'11px',
      'xl': '16px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '83px',
      '7xl': '5rem',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      'subTitle': 300,
      'label': 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    boxShadow: {
      xl: '10px 10px 10px 11px rgba(58, 54, 237, 1)',
    },
    lineHeight: {
      'mainTitle': '62px',
      'subTitle': '27px',
      'label': '27px',
      'accountButton': '30px',
      'signIn': '23.44px',
      'rightTitle': '93px',
    },
    borderRadius: {
      'input': '16px',
      'buttonAccount': '8px;',
      'imageButton': '8px'
    },
    borderWidth: {
      'input': '1px',
      'imageButton':'1px'
    },
    width: {
      'input': '375px',
      'buttonAccount': '375px',
      'full': '100%',
      'leftPanel': '375px',
      'hr': '33.3%',
      'imageButton':'25%'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

