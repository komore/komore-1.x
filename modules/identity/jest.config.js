module.exports = {
  testMatch: ['**/modules/identity/src/**/*.spec.ts'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/identity',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity'
};
