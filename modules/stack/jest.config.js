module.exports = {
  testMatch: ['**/modules/stack/src/**/*.spec.ts'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/stack',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack'
};
