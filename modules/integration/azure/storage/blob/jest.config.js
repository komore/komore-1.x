module.exports = {
  testMatch: ['**/modules/integration/azure/storage/blob/src/**/*.spec.ts'],
  name: 'integration-azure-storage-blob',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-azure-storage-blob',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
