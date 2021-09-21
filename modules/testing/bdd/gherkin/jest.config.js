module.exports = {
  testMatch: ['**/modules/testing/bdd/gherkin/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/testing-bdd-gherkin',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-bdd-gherkin',
  testEnvironment: 'node'
};
