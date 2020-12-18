module.exports = {
  testMatch: ['**/modules/api/graphql/src/**/*.spec.ts'],
  name: 'api-graphql',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/api-graphql',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
