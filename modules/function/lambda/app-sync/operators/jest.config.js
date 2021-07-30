module.exports = {
  testMatch: ['**/modules/function/lambda/app-sync/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/function-lambda-appsync-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-appsync-operators'
};
