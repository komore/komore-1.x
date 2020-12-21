module.exports = {
  testMatch: ['**/modules/authorization/abac/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/authorization-abac',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac'
};
