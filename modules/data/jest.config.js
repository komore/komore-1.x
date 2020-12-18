module.exports = {
  testMatch: ['**/modules/data/src/**/*.spec.ts'],
  name: 'data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/data',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
