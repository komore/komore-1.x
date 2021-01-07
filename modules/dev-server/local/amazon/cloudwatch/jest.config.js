module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/cloudwatch/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-cloudwatch',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-cloudwatch'
};
