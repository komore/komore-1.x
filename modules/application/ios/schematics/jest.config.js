module.exports = {
  testMatch: ['**/modules/application/ios/schematics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/application-ios-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-ios-schematics',
  testEnvironment: 'node'
};
