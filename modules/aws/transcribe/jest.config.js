module.exports = {
  testMatch: ['**/modules/integration/aws/transcribe/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-transcribe',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-transcribe',
  testEnvironment: 'node'
};
