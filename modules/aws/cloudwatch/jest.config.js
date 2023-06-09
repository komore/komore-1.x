module.exports = {
  testMatch: ['**/modules/integration/aws/cloudwatch/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-cloudwatch',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  name: 'integration-aws-cloudwatch',
  testEnvironment: 'node'
};
