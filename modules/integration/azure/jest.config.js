module.exports = {
  testMatch: ['**/modules/integration/azure/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-azure',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure',
  testEnvironment: 'node'
};
