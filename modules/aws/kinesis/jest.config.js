module.exports = {
  testMatch: ['**/modules/integration/aws/kinesis/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-kinesis',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-kinesis',
  testEnvironment: 'node'
};
