module.exports = {
  testMatch: ['**/modules/tools/github/deploy/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/tools-github-deploy',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'tools-github-deploy'
};
