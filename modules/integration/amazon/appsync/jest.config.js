module.exports = {
  testMatch: ['**/modules/integration/amazon/appsync/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-amazon-appsync',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-appsync'
};
