module.exports = {
  testMatch: ['**/modules/application/src/**/*.spec.ts'],
  name: 'command',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/application',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
