module.exports = {
  testMatch: ['**/modules/query/src/**/*.spec.ts'],
  name: 'query',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/query',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
