module.exports = {
  testMatch: ['**/modules/function/google/src/**/*.spec.ts'],
  name: 'function-google',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-google',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
