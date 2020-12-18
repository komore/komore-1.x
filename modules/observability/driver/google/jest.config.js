module.exports = {
  testMatch: ['**/modules/observability/driver/gcp/src/**/*.spec.ts'],
  name: 'observability-driver-gcp',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/observability-driver-gcp',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
