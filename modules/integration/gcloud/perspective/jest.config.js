module.exports = {
  testMatch: ['**/modules/integration/gcloud/perspective/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-perspective',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-perspective',
  testEnvironment: 'node'
};
