module.exports = {
  testMatch: ['**/modules/observability/provider/browser/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-provider-browser',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-provider-browser'
};
