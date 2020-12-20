module.exports = {
  testMatch: ['**/modules/web/authentication/src/**/*.spec.ts'],
  name: 'web-authentication',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-authentication',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
