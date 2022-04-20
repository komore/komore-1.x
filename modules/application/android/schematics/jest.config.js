module.exports = {
  testMatch: ['**/modules/application/android/schematics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/application-android-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-android-schematics',
  testEnvironment: 'node'
};
