module.exports = {
  testMatch: ['**/modules/website/search/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/website-search',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'website-search',
  testEnvironment: 'node'
};
