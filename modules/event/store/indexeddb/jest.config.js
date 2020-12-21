module.exports = {
  testMatch: ['**/modules/event/store/indexeddb/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-indexeddb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-indexeddb'
};
