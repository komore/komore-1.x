module.exports = {
  testMatch: ['**/modules/integration/gitlab/src/**/*.spec.ts'],
  name: 'integration-gitlab',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-gitlab',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
