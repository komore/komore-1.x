module.exports = {
  testMatch: ['**/modules/integration/aws/s3/src/**/*.spec.ts'],
  name: 'integration-aws-s3',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-s3',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
