module.exports = {
  testMatch: ['**/modules/web/http/testing/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-http-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-http-testing',
  testEnvironment: 'node'
};
