module.exports = {
  testMatch: ['**/modules/integration/aws/sqs/src/**/*.spec.ts'],
  name: 'integration-aws-sqs',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-sqs',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
