module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/service/src/**/*.spec.ts'],
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-service',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-service'
};
