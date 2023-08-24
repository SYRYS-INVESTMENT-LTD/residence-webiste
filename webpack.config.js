const CompressionPlugin = require('compression-webpack-plugin');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = function override(config, env) {
  // Set the devtool based on the environment
  config.devtool = env === 'development' ? 'source-map' : false;

  // ... your existing configuration ...

  if (env === 'production') {
    config.plugins.push(
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    );

    // Locate the css-loader rule in your config
    const cssRule = config.module.rules.find(
      (rule) => rule.oneOf && Array.isArray(rule.oneOf)
    );

    // Add PurgeCSS and tailwindcss to the postcss-loader
    if (cssRule) {
      const postcssLoader = cssRule.oneOf.find(
        (rule) => rule.loader && rule.loader.indexOf('postcss-loader') !== -1
      );

      if (postcssLoader) {
        postcssLoader.use.push({
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              tailwindcss(),
              purgecss({
                content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
                defaultExtractor: (content) =>
                  content.match(/[\w-/:]+(?<!:)/g) || [],
              }),
            ],
          },
        });
      }
    }
  }

  return config;
};
