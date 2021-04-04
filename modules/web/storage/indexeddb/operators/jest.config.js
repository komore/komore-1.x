module.exports = {
  testMatch: ['**/modules/web/storage/indexeddb/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/web-storage-indexeddb-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-storage-indexeddb-operators'
};
