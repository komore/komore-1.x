module.exports = {
  testMatch: ['**/modules/web/router/src/**/*.spec.ts'],
  name: 'web-router',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-router',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
