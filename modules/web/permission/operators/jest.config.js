module.exports = {
  testMatch: ['**/modules/web/permission/operators/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-permission-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-permission-operators'
};
