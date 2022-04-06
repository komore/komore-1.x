module.exports = {
  testMatch: ['**/modules/cicd/provider/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cicd-provider',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cicd-provider',
  testEnvironment: 'node'
};
