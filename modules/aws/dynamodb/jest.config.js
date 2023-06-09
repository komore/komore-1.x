module.exports = {
  testMatch: ['**/modules/integration/aws/dynamodb/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-dynamodb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-dynamodb',
  testEnvironment: 'node'
};
