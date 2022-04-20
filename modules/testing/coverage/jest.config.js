module.exports = {
  testMatch: ['**/modules/testing/coverage/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-coverage',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-coverage',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
