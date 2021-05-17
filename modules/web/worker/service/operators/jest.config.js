module.exports = {
  testMatch: ['**/modules/web/worker/service/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/web-worker-service-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-worker-service-operators'
};
