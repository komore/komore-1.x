module.exports = {
  testMatch: ['**/modules/dev-server/cloudtail/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/devserver-cloudtail',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-cloudtail'
};
