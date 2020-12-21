module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/ses/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/devserver-local-amazon-ses',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon-ses'
};
