module.exports = {
  testMatch: ['**/modules/nx/function/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/nx-e2e',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'nx-e2e'
};
