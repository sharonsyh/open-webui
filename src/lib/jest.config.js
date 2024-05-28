// jest.config.js
module.exports = {
  // ...other configurations
  transformIgnorePatterns: [
    "node_modules/(?!(svelte-jest)/)"
  ],
  transform: {
    '^.+\\.js$': 'babel-jest', 
    '^.+\\.svelte$': ['svelte-jest', { preprocess: true }],
  },
  moduleNameMapper: {
    '^\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
  },
};
