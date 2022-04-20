module.exports = {
  testMatch: ['**/modules/integration/aws/appsync/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-appsync',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-appsync',
  testEnvironment: 'node'
};
