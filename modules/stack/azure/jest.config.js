module.exports = {
  testMatch: ['**/modules/stack/azure/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-azure',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-azure',
  testEnvironment: 'node'
};
