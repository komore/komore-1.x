module.exports = {
  testMatch: ['**/modules/stack/gcloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-gcloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-gcloud',
  testEnvironment: 'node'
};
