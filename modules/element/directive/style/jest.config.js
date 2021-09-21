module.exports = {
  testMatch: ['**/modules/element/directive/style/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-directive-style',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-directive-style',
  testEnvironment: 'node'
};
