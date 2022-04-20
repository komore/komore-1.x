module.exports = {
  testMatch: ['**/modules/integration/aws/cloudwatch/logs/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-aws-cloudwatch-logs',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-cloudwatch-logs',
  testEnvironment: 'node'
};
