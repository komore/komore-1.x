module.exports = {
  testMatch: ['**/modules/web/storage/src/**/*.spec.ts'],
  name: 'web-storage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-storage',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
