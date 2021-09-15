module.exports = {
  testMatch: ['**/modules/function/lambda/sns/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/function-lambda-sns',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-sns'
};
