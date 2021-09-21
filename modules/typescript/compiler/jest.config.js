module.exports = {
  testMatch: ['**/modules/typescript/compiler/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/typescript-compiler',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'typescript-compiler',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
