module.exports = {
  testMatch: ['**/modules/integration/gcp/src/**/*.spec.ts'],
  name: 'integration-gcp',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-gcp',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
