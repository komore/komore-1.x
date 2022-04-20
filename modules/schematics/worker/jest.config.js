module.exports = {
  testMatch: ['**/modules/schematics/worker/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-worker',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-worker',
  testEnvironment: 'node'
};
