module.exports = {
  testMatch: ['**/modules/element/directive/for/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-directive-for',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-directive-for',
  testEnvironment: 'node'
};
