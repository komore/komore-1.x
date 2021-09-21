module.exports = {
  testMatch: ['**/modules/function/lambda/cloud-front/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/function-lambda-cloudfront',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-cloudfront',
  testEnvironment: 'node'
};
