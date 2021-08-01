module.exports = {
  testMatch: ['**/modules/math/arithmetic/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/math-arithmetic',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'math-arithmetic'
};
