module.exports = {
  testMatch: ['**/modules/nx/e2e/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/nx-e2e',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'nx-e2e'
};
