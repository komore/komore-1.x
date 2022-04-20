module.exports = {
  testMatch: ['**/modules/testing/gherkin/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-gherkin',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-gherkin',
  testEnvironment: 'node'
};
