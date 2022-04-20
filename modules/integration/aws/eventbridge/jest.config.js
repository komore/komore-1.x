module.exports = {
  testMatch: ['**/modules/integration/aws/eventbridge/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-eventbridge',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-eventbridge',
  testEnvironment: 'node'
};
