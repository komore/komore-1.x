module.exports = {
  testMatch: ['**/modules/crypto/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/crypto',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'crypto',
  testEnvironment: 'node'
};
