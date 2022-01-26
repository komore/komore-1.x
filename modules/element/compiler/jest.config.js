module.exports = {
  testMatch: ['**/modules/element/compiler/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-compiler',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-compiler',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['test-helpers.spec.ts']
};
