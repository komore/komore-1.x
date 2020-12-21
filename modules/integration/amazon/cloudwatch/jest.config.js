module.exports = {
  testMatch: ['**/modules/integration/amazon/cloudwatch/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-amazon-cloudwatch',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  name: 'integration-amazon-cloudwatch',
};
