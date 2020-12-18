module.exports = {
  testMatch: ['**/modules/integration/aws/lambda/src/**/*.spec.ts'],
  name: 'integration-aws-lambda',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-lambda',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
