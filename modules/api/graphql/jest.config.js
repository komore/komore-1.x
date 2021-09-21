module.exports = {
  testMatch: ['**/modules/api/graphql/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/api-graphql',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'api-graphql',
  testEnvironment: 'node'
};
