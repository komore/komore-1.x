module.exports = {
  testMatch: ['**/modules/integration/gumroad/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-gumroad',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gumroad',
  testEnvironment: 'node'
};
