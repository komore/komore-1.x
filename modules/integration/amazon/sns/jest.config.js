module.exports = {
  testMatch: ['**/modules/integration/aws/sns/src/**/*.spec.ts'],
  name: 'integration-aws-sns',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-sns',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
