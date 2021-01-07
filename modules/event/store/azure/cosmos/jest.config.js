module.exports = {
  testMatch: ['**/modules/event/store/azure/cosmos/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/event-store-azure-cosmos',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-azure-cosmos'
};
