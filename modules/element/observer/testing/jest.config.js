module.exports = {
  testMatch: ['**/modules/web/observer/testing/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-observer-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-observer-testing',
  testEnvironment: 'node'
};
