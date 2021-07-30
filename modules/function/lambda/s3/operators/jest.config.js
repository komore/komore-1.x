module.exports = {
  testMatch: ['**/modules/function/lambda/s3/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/function-lambda-s3-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-s3-operators'
};
