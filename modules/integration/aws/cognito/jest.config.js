module.exports = {
  testMatch: ['**/modules/integration/aws/cognito/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-cognito',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-cognito',
  testEnvironment: 'node'
};
