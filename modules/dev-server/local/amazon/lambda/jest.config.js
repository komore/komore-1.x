module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/lambda/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-lambda',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-lambda'
};
