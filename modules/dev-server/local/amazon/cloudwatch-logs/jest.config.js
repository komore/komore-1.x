module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/cloudwatch-logs/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-cloudwatchlogs',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-cloudwatchlogs'
};
