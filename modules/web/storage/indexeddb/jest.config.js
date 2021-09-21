module.exports = {
  testMatch: ['**/modules/web/storage/indexeddb/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-storage-indexeddb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-storage-indexeddb',
  testEnvironment: 'node'
};
