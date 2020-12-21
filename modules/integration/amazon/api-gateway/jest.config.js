module.exports = {
  testMatch: ['**/modules/integration/amazon/api-gateway/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-amazon-apigateway',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-apigateway'
};
