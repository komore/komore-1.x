module.exports = {
  testMatch: ['**/modules/function/operators/src/**/*.spec.ts'],
  name: 'function-operators',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-operators',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
