module.exports = {
  testMatch: ['**/modules/event/store/gcloud/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/event-store-gcloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-gcloud',
  testEnvironment: 'node'
};
