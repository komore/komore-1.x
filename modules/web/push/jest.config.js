module.exports = {
  testMatch: ['**/modules/web/push/src/**/*.spec.ts'],
  name: 'web-push',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-push',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
