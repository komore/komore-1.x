module.exports = {
  testMatch: ['**/modules/integration/stripe/src/**/*.spec.ts'],
  name: 'integration-stripe',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-stripe',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
