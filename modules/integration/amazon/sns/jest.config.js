module.exports = {
  testMatch: ['**/modules/integration/amazon/sns/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-sns',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-sns'
};
