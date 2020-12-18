module.exports = {
  testMatch: ['**/modules/observability/driver/azure/src/**/*.spec.ts'],
  name: 'observability-driver-azure',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/observability-driver-azure',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
