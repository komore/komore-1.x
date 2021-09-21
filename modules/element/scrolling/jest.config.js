module.exports = {
  testMatch: ['**/modules/element/scrolling/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-scrolling',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-scrolling',
  testEnvironment: 'node'
};
