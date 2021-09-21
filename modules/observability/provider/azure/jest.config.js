module.exports = {
  testMatch: ['**/modules/observability/azure/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/observability-azure',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-azure',
  testEnvironment: 'node'
};
