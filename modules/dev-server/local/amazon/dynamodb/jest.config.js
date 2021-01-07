module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/dynamodb/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-dynamodb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-dynamodb'
};
