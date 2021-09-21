module.exports = {
  testMatch: ['**/modules/authorization/abac/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/authorization-abac',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac',
  testEnvironment: 'node'
};
