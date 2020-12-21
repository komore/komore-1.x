module.exports = {
  testMatch: ['**/modules/authorization/abac/alfa/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/authorization-abac-alfa',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization-abac-alfa'
};
