module.exports = {
  testMatch: ['**/modules/application/cli/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/application-cli',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-cli',
  testEnvironment: 'node'
};
