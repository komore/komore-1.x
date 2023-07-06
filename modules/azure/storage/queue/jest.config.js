module.exports = {
  testMatch: ['**/modules/integration/azure/storage/queue/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-azure-storage-queue',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-storage-queue',
  testEnvironment: 'node'
};
