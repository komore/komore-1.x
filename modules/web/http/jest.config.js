module.exports = {
  testMatch: ['**/modules/web/http/src/**/*.spec.ts'],
  name: 'web-http',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-http',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
