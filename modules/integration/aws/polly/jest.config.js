module.exports = {
  testMatch: ['**/modules/integration/aws/polly/src/**/*.spec.ts'],
  name: 'integration-aws-polly',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-polly',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
