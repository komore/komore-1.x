module.exports = {
  testMatch: ['**/modules/runtime/filesystem/operators/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/runtime-filesystem-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'runtime-filesystem-operators',
  testEnvironment: 'node'
};
