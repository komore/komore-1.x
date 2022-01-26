module.exports = {
  testMatch: ['**/modules/element/parser/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-parser',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-parser',
  testEnvironment: 'jsdom'
};
