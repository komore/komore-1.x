module.exports = {
  testMatch: ['**/modules/testing/processor/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-processor',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-processor',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
