const colors = require('tailwindcss/colors')

module.exports = {
     purge: [
       'src/**/*.js',
       'src/**/*.jsx',
       'src/**/*.ts',
       'src/**/*.tsx',
       'public/**/*.html',
     ],
     theme: {
       extend: {
        colors: {
          // Build your palette here
          coolGray: colors.coolGray,
          blueGray: colors.blueGray,
          teal: colors.teal,
          emerald: colors.emerald,
          cyan: colors.cyan,
          ligthBlue: colors.lightBlue
        },
        boxShadow: {
          'first':'0 1.5px 3px rgba(0,0,0,0.16), 0 1.5px 3px rgba(0,0,0,0.23)',
          'sec': '0 6px 12px rgba(0,0,0,0.16), 0 6px 12px rgba(0,0,0,0.23)'
        },
        fontFamily: {
          'gogh': ['gogh-extrabold', 'sans-serif'],
          'klein': ['kleintext-book', 'sans-serif'],
          'moskbold': ['moskextra-bold_800', 'sans-serif']
        },
       },
     },
     variants: {
       extend: {
        fontWeight: ['hover'],
        borderStyle: ['hover'],
       }
     },
     plugins: [],
   }