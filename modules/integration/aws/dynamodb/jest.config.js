module.exports = {
  testMatch: ['**/modules/integration/aws/dynamodb/src/**/*.spec.ts'],
  name: 'integration-aws-dynamodb',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-dynamodb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
