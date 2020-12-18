module.exports = {
  testMatch: ['**/modules/web/form/src/**/*.spec.ts'],
  name: 'web-form',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-form',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
