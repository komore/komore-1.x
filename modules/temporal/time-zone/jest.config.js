module.exports = {
  testMatch: ['**/modules/temporal/time-zone/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/temporal-timezone',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal-timezone',
  testEnvironment: 'node'
};
