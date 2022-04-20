module.exports = {
  testMatch: ['**/modules/integration/adyen/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-adyen',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-adyen',
  testEnvironment: 'node'
};
