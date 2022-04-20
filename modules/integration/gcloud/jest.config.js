module.exports = {
  testMatch: ['**/modules/integration/gcloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-gcloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud',
  testEnvironment: 'node'
};
