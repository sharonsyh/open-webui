// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Target the current version of Node.js
        },
        modules: 'commonjs',
      },
    ],
    // If you're using TypeScript
    '@babel/preset-typescript',
    // If you're using React
    '@babel/preset-react',
  ],
  // You can include plugins here if needed
  plugins: [
    // Example plugin
    // '@babel/plugin-proposal-class-properties'
  ],
};

