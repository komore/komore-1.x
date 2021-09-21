module.exports = {
  testMatch: ['**/modules/authorization/jwt/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/authorization-jwt',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-jwt',
  testEnvironment: 'node'
};
