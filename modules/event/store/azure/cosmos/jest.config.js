module.exports = {
  testMatch: ['**/modules/event/store/azure/cosmos/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-azure-cosmos',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-azure-cosmos'
};
