module.exports = {
  testMatch: ['**/modules/element/compiler/css/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-compiler-css',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler-css'
};
