module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/app-sync/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-appsync',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-appsync'
};
