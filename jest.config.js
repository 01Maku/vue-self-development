// jest.config.js
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.spec.js', '**/*.spec.ts', '**/__tests__/*.(js|ts)'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
