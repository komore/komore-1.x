module.exports = {
  testMatch: ['**/modules/math/trigonometry/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/math-trigonometry',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'math-trigonometry'
};
