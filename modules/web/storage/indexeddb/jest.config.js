module.exports = {
  testMatch: ['**/modules/web/storage/indexeddb/src/**/*.spec.ts'],
  name: 'web-storage-indexeddb',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/web-storage-indexeddb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
