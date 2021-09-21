module.exports = {
  testMatch: ['**/modules/integration/azure/text-analytics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-azure-text-analytics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-textanalytics',
  testEnvironment: 'node'
};
