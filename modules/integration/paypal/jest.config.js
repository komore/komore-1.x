module.exports = {
  testMatch: ['**/modules/integration/paypal/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-paypal',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-paypal',
  testEnvironment: 'node'
};
