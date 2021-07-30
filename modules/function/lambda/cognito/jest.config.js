module.exports = {
  testMatch: ['**/modules/function/lambda/cognito/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/function-lambda-cognito',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-cognito'
};
