module.exports = {
  testMatch: ['**/modules/integration/stripe/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-stripe',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-stripe',
  testEnvironment: 'node'
};
