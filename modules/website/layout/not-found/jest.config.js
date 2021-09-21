module.exports = {
  testMatch: ['**/modules/website/layout/not-found/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/website-layout-notfound',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'website-layout-notfound',
  testEnvironment: 'node'
};
