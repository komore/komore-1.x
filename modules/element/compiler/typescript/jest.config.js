module.exports = {
  testMatch: ['**/modules/element/compiler/typescript/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-compiler-typescript',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler-typescript',
  testEnvironment: 'node'
};
