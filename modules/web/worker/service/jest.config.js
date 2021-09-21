module.exports = {
  testMatch: ['**/modules/web/worker/service/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/web-worker-service',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-worker-service',
  testEnvironment: 'node'
};
