module.exports = {
  testMatch: ['**/modules/element/accessibility/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-accessibility',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-accessibility',
  testEnvironment: 'node'
};
