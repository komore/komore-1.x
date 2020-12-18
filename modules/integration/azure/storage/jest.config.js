module.exports = {
  testMatch: ['**/modules/integration/azure/storage/src/**/*.spec.ts'],
  name: 'integration-azure-storage',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-azure-storage',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
