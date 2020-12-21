module.exports = {
  testMatch: ['**/modules/application/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/application',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application'
};
