module.exports = {
  testMatch: ['**/modules/functional/arithmetic/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/functional-arithmetic',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'functional-arithmetic'
};
