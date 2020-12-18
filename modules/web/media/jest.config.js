module.exports = {
  testMatch: ['**/modules/web/media/src/**/*.spec.ts'],
  name: 'web-media',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-media',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
