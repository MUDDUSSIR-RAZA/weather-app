// next.config.js or webpack.config.js
const path = require('path');

module.exports = {
  // ...

  images: {
    domains: ['openweathermap.org'], // Add the domain(s) you want to allow for images
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/videos/', // Customize as per your project structure
          outputPath: 'static/videos/', // Customize as per your project structure
        },
      },
    });
    

    return config;
  },
};
