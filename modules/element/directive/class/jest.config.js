module.exports = {
  testMatch: ['**/modules/element/directive/class/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-directive-class',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-directive-class',
  testEnvironment: 'node'
};
