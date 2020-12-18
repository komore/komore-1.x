module.exports = {
  testMatch: ['**/modules/observability/src/**/*.spec.ts'],
  name: 'observability',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/observability',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
