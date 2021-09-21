module.exports = {
  testMatch: ['**/modules/integration/amazon/sqs/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-sqs',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-sqs',
  testEnvironment: 'node'
};
