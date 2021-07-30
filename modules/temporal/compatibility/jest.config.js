module.exports = {
  testMatch: ['**/modules/temporal/compatibility/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/temporal-compatibility',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal-compatibility'
};
