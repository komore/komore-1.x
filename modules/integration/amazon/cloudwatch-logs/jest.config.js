module.exports = {
  testMatch: ['**/modules/integration/amazon/cloudwatch-logs/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-amazon-cloudwatchlogs',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-cloudwatchlogs',
};
