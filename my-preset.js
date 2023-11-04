/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/views/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
    './src/services/**/*.{ts,tsx,js,jsx}',
  ],
  safelist: [
    {
      pattern:
        /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: '',
        secondary: '',
        tertiary: '',
      },
      fontFamily: {},
=======
        primary: '#23BD32',
        secondary: '#555',
        tertiary: '#545454',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
>>>>>>> origin/master
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  },
};
