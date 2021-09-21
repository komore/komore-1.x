module.exports = {
  testMatch: ['**/modules/web/permission/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-permission',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-permission',
  testEnvironment: 'node'
};
