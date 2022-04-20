module.exports = {
  testMatch: ['**/modules/integration/aws/sns/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-sns',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-sns',
  testEnvironment: 'node'
};
