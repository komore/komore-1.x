module.exports = {
  testMatch: ['**/modules/function/src/**/*.spec.ts', '!**/modules/function/src/**/*.typing.spec.ts'],
  name: 'function',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/function',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
