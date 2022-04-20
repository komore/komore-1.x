module.exports = {
  testMatch: ['**/modules/integration/aws/api-gateway/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-apigateway',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-apigateway',
  testEnvironment: 'node'
};
