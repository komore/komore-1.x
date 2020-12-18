module.exports = {
  testMatch: ['**/modules/event/store/azure/cosmosdb/src/**/*.spec.ts'],
  name: 'event-store-azure-cosmosdb',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-azure-cosmosdb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
