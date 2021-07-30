module.exports = {
  testMatch: ['**/modules/temporal/date/functional/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/temporal-date-functional',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal-date-functional'
};
