module.exports = {
  testMatch: ['**/modules/element/directive/show/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-directive-show',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-directive-show',
  testEnvironment: 'node'
};
