module.exports = {
  testMatch: ['**/modules/integration/azure/text-analytics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-azure-text-analytics',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-textanalytics'
};
