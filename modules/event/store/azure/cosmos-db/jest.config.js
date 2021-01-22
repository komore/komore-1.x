module.exports = {
  testMatch: ['**/modules/event/store/azure/cosmos-db/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/event-store-azure-cosmosdb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-azure-cosmosdb'
};
