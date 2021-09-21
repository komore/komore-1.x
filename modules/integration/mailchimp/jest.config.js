module.exports = {
  testMatch: ['**/modules/integration/mailchimp/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-mailchimp',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-mailchimp',
  testEnvironment: 'node'
};
