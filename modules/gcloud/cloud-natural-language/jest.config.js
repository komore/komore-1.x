module.exports = {
  testMatch: ['**/modules/integration/gcloud/cloud-natural-language/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-cloudnaturallanguage',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-cloudnaturallanguage',
  testEnvironment: 'node'
};
