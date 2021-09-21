module.exports = {
  testMatch: ['**/modules/integration/gitlab/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-gitlab',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gitlab',
  testEnvironment: 'node'
};
