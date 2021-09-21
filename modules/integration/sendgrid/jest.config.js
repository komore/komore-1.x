module.exports = {
  testMatch: ['**/modules/integration/sendgrid/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-sendgrid',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-sendgrid',
  testEnvironment: 'node'
};
