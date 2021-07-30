module.exports = {
  testMatch: ['**/modules/temporal/date-time/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/temporal-datetime',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal-datetime'
};
