module.exports = {
  testMatch: ['**/modules/integration/aws/polly/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-polly',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-polly',
  testEnvironment: 'node'
};
