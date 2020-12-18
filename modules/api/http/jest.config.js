module.exports = {
  testMatch: ['**/modules/api/http/src/**/*.spec.ts'],
  name: 'api-http',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/api-http',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
