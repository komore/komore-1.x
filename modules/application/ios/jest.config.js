module.exports = {
  testMatch: ['**/modules/application/ios/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/application-ios',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-ios',
  testEnvironment: 'node'
};
