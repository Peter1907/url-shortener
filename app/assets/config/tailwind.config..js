/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {
      // extending colors doesn't work with rails so those are just for reference
      colors: {
        'navy': {
          'light': '#302b63',
          'medium': '#24243e',
          'dark': '#0f0c29',
        },
        'light-orange': '#fcd0a1',
        'ice-blue': '#a9fff7',
        'cool-grey': '#7d84b2',
        'rojo': '#de1a1a',
      },
    },
  },
  plugins: [],
};
