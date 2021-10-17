module.exports = {
  testMatch: ['**/modules/integration/perspective/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-perspective',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-perspective',
  testEnvironment: 'node'
};
