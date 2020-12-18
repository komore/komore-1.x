module.exports = {
  testMatch: ['**/modules/integration/aws/cloudwatch/src/**/*.spec.ts'],
  name: 'integration-aws-cloudwatch',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-cloudwatch',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
