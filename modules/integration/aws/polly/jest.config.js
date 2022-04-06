module.exports = {
  testMatch: ['**/modules/integration/amazon/polly/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-polly',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-polly',
  testEnvironment: 'node'
};
