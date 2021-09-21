module.exports = {
  testMatch: ['**/modules/payment/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/payment',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'payment',
  testEnvironment: 'node'
};
