module.exports = {
  testMatch: ['**/modules/function/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/function',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function'
};
