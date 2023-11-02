const CracoSwcPlugin = require('craco-swc');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  plugins: [{ plugin: CracoSwcPlugin }],
};