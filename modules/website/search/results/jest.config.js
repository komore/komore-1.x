module.exports = {
  testMatch: ['**/modules/website/search/results/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/website-search-results',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'website-search-results',
  testEnvironment: 'node'
};
