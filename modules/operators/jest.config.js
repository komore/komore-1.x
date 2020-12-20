module.exports = {
  testMatch: ['**/modules/operators/src/**/*.spec.ts'],
  name: 'operators',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/operators',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
