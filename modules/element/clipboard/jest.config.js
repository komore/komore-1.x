module.exports = {
  testMatch: ['**/modules/element/clipboard/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-clipboard',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-clipboard',
  testEnvironment: 'node'
};
