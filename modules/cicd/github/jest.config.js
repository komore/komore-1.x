module.exports = {
  testMatch: ['**/modules/cicd/github/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cicd-github',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cicd-github',
  testEnvironment: 'node'
};
