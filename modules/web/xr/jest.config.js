module.exports = {
  testMatch: ['**/modules/web/xr/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-xr',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-xr',
  testEnvironment: 'node'
};
