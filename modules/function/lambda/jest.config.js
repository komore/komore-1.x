module.exports = {
  testMatch: ['**/modules/function/aws/src/**/*.spec.ts'],
  name: 'function-lambda',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-lambda',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
