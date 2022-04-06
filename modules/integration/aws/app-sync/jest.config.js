module.exports = {
  testMatch: ['**/modules/integration/amazon/appsync/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-appsync',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-appsync',
  testEnvironment: 'node'
};
