module.exports = {
  testMatch: ['**/modules/element/compiler/processor/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-compiler-processor',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler-processor',
  testEnvironment: 'node'
};
