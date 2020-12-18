module.exports = {
  testMatch: ['**/modules/integration/gcp/cloud-logging/src/**/*.spec.ts'],
  name: 'integration-gcp-cloudlogging',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-gcp-cloud-logging',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
