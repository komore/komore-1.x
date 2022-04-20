module.exports = {
  testMatch: ['**/modules/function/gcloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/function-gcloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-gcloud',
  testEnvironment: 'node'
};
