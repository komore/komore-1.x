module.exports = {
  testMatch: ['**/modules/event/store/web/indexeddb/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-web-indexeddb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-web-indexeddb',
  testEnvironment: 'node'
};
