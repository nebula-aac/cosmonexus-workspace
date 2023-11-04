const CracoSwcPlugin = require('craco-swc');
const tailwindcss = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
      ]
    }
  },
  plugins: [{ plugin: CracoSwcPlugin }],
};