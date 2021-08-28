module.exports = {
  testMatch: ['**/modules/crypto/uuid/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/crypto-uuid',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'crypto-uuid'
};
