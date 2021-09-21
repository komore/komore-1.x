module.exports = {
  testMatch: ['**/modules/authorization/rbac/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/authorization-rbac',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-rbac',
  testEnvironment: 'node'
};
