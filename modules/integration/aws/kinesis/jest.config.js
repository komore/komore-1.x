module.exports = {
  testMatch: ['**/modules/integration/aws/kinesis/src/**/*.spec.ts'],
  name: 'integration-aws-kinesis',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-kinesis',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
