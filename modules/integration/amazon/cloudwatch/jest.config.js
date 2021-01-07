module.exports = {
  testMatch: ['**/modules/integration/amazon/cloudwatch/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-cloudwatch',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  name: 'integration-amazon-cloudwatch',
};
