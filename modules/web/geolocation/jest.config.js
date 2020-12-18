module.exports = {
  testMatch: ['**/modules/web/geolocation/src/**/*.spec.ts'],
  name: 'web-geolocation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-geolocation',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
