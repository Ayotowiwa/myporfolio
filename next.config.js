const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/assets/`, // Adjust this line
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
