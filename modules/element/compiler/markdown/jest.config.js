module.exports = {
  testMatch: ['**/modules/element/compiler/markdown/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-compiler-markdown',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler-markdown'
};
