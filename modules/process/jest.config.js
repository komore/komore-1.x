module.exports = {
  testMatch: ['**/modules/process/src/**/*.spec.ts'],
  name: 'process',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/process',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
