module.exports = {
  testMatch: ['**/modules/integration/google/perspective/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-google-perspective',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-perspective',
  testEnvironment: 'node'
};
