module.exports = {
  testMatch: ['**/modules/dev-server/local/amazon/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/devserver-local-amazon',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-local-amazon'
};
