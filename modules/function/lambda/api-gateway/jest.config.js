module.exports = {
  testMatch: ['**/modules/function/lambda/api-gateway/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/function-lambda-apigateway',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-apigateway'
};
