module.exports = {
  testMatch: ['**/modules/integration/aws/sqs/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-sqs',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-sqs',
  testEnvironment: 'node'
};
