module.exports = {
  testMatch: ['**/modules/observability/driver/local/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-driver-local',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-driver-local'
};
