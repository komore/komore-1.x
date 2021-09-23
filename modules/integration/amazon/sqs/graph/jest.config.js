module.exports = {
  testMatch: ['**/modules/integration/amazon/sqs/graph/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-amazon-sqs-graph',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-sqs-graph',
  testEnvironment: 'node'
};
