module.exports = {
  testMatch: ['**/modules/web/push/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-push',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-push'
};
