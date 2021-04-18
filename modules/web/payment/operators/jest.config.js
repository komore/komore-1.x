module.exports = {
  testMatch: ['**/modules/web/payment/operators/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../..coverage/web-payment-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-payment-operators'
};
