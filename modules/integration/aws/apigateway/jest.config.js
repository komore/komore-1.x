module.exports = {
  testMatch: ['**/modules/integration/aws/transcribe/src/**/*.spec.ts'],
  name: 'integration-aws-transcribe',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-transcribe',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
