module.exports = {
  testMatch: ['**/modules/testing/eslint/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-eslint',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-eslint',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
