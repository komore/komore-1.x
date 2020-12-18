module.exports = {
  testMatch: ['**/modules/web/speech/src/**/*.spec.ts'],
  name: 'web-speech',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-speech',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
