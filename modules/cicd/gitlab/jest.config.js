module.exports = {
  testMatch: ['**/modules/cicd/gitlab/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cicd-gitlab',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cicd-gitlab',
  testEnvironment: 'node'
};
