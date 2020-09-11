module.exports = {
  testMatch: ['**/modules/event/azure/cosmosdb/src/**/*.spec.ts', '!**/modules/event/azure/cosmosdb/src/**/*.typing.spec.ts'],
  name: 'event-azure-cosmosdb',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-azure-cosmosdb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
