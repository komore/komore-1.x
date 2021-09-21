module.exports = {
  testMatch: ['**/modules/authorization/abac/alfa/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/authorization-abac-alfa',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac-alfa',
  testEnvironment: 'node'
};
