module.exports = {
  testMatch: ['**/modules/function/alexa/src/**/*.spec.ts'],
  name: 'function-alexa',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-alexa',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
