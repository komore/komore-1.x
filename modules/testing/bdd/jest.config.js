module.exports = {
  testMatch: ['**/modules/testing/bdd/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-bdd',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-bdd',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};
