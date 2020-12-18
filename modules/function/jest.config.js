module.exports = {
  testMatch: ['**/modules/function/src/**/*.spec.ts'],
  name: 'function',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/function',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
