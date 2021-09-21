module.exports = {
  testMatch: ['**/modules/integration/amazon/aurora/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-aurora',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-aurora',
  testEnvironment: 'node'
};
