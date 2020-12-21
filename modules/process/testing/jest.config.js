module.exports = {
  testMatch: ['**/modules/process/testing/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/process-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'process-testing'
};
