module.exports = {
  testMatch: ['**/modules/observability/provider/local/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-provider-local',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-provider-local'
};
