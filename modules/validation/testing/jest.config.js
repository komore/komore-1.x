module.exports = {
  testMatch: ['**/modules/validation/testing/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/validation-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'validation-testing',
  testEnvironment: 'node'
};
