module.exports = {
  testMatch: ['**/modules/integration/aws/cloudwatch-logs/src/**/*.spec.ts'],
  name: 'integration-aws-cloudwatch-logs',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-cloudwatch-logs',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
