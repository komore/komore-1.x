module.exports = {
  testMatch: ['**/modules/element/compiler/scss/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-compiler-scss',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler-scss',
  testEnvironment: 'node'
};
