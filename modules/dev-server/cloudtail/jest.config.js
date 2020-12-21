module.exports = {
  testMatch: ['**/modules/dev-server/cloudtail/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/devserver-cloudtail',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-cloudtail'
};
