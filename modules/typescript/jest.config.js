module.exports = {
  testMatch: ['**/modules/typescript/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/typescript',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'typescript',
  testEnvironment: 'node'
};
