module.exports = {
  testMatch: ['**/modules/integration/aws/lambda/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-lambda',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-lambda',
  testEnvironment: 'node'
};
