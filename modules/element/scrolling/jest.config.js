module.exports = {
  testMatch: ['**/modules/element/scrolling/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-scrolling',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-scrolling'
};
