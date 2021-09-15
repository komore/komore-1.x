module.exports = {
  testMatch: ['**/modules/function/lambda/api-gateway/http/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/function-lambda-apigateway-http',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-apigateway-http'
};
