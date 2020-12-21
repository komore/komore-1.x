module.exports = {
  testMatch: ['**/modules/authorization/rbac/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/authorization-rbac',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-rbac'
};
