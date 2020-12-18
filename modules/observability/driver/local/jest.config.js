module.exports = {
  testMatch: ['**/modules/observability/driver/local/src/**/*.spec.ts'],
  name: 'observability-driver-local',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/observability-driver-local',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
