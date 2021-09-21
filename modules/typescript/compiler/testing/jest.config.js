module.exports = {
  testMatch: ['**/modules/typescript/compiler/testing/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/typescript-compiler-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'typescript-compiler-testing',
  testEnvironment: 'node'
};
