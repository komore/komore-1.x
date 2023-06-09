module.exports = {
  testMatch: ['**/modules/cli/lint/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cli-lint',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cli-lint',
  testEnvironment: 'node'
};
