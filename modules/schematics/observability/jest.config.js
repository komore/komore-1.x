module.exports = {
  testMatch: ['**/modules/schematics/observability/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-observability',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-observability'
};
