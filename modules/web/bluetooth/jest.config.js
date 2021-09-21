module.exports = {
  testMatch: ['**/modules/web/bluetooth/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-bluetooth',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-bluetooth',
  testEnvironment: 'node'
};
