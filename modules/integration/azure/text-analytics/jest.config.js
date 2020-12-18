module.exports = {
  testMatch: ['**/modules/integration/azure/text-analytics/src/**/*.spec.ts'],
  name: 'integration-azure-text-analytics',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-azure-text-analytics',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
