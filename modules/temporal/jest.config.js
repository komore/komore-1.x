module.exports = {
  testMatch: ['**/modules/temporal/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/temporal',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'temporal',
  setupFilesAfterEnv: ['./test-setup.ts']
};
