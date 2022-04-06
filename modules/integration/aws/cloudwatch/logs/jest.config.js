module.exports = {
  testMatch: ['**/modules/integration/amazon/cloudwatch/logs/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-amazon-cloudwatch-logs',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-cloudwatch-logs',
  testEnvironment: 'node'
};
