module.exports = {
  testMatch: ['**/modules/observability/gcloud/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-gcloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-gcloud',
  testEnvironment: 'node'
};
