module.exports = {
  testMatch: ['**/modules/temporal/interval/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/temporal-interval',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal-interval',
  testEnvironment: 'node'
};
