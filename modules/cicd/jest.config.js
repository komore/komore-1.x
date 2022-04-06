module.exports = {
  testMatch: ['**/modules/cicd/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/cicd',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cicd',
  testEnvironment: 'node'
};
