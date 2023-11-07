const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          'light': '#302b63',
          'medium': '#24243e',
          'dark': '#0f0c29',
        },
        'light-orange': '#fcd0a1',
        'ice-blue': '#a9fff7',
        'cool-grey': '#7d84b2',
        'rojo': '#fe1a1a',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        saira: ['Saira Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
