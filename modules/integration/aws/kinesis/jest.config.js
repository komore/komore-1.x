module.exports = {
  testMatch: ['**/modules/integration/amazon/kinesis/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-kinesis',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-kinesis',
  testEnvironment: 'node'
};
