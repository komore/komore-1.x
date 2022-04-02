module.exports = {
  testMatch: ['**/modules/stack/google/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-google',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-google',
  testEnvironment: 'node'
};
