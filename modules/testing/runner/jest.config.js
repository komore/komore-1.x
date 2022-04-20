module.exports = {
  testMatch: ['**/modules/testing/runner/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-runner',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-runner',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
