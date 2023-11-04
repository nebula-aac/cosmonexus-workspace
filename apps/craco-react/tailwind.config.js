const kebabcase = require('lodash.kebabcase');
const tokens = require('./tokens/tokens.js');
// console.log(tokens);

/*
const colors = Object.values(tokens.color);
console.log(colors);
*/

/*
const colors = Object.values(tokens.color).map(({ attributes, value }) => [
  attributes.type, value
]);
console.log(colors);
*/

const colors = Object.fromEntries(Object.values(tokens.color).map(({ attributes, value }) => [
  kebabcase(attributes.type), value
]));
console.log(colors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black-light': '#404f48',
    },
    extend: {},
  },
  plugins: [],
}

