module.exports = {
  testMatch: ['**/modules/integration/github/src/**/*.spec.ts'],
  name: 'integration-github',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-github',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
