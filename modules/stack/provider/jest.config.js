module.exports = {
  testMatch: ['**/modules/stack/provider/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-provider',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider',
  testEnvironment: 'node'
};
