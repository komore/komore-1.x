module.exports = {
  testMatch: ['**/modules/yaml/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/yaml',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'yaml',
  testEnvironment: 'node'
};
