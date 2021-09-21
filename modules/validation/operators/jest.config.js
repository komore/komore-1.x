module.exports = {
  testMatch: ['**/modules/validation/operators/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/validation-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'validation-operators',
  testEnvironment: 'node'
};
