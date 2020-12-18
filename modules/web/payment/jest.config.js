module.exports = {
  testMatch: ['**/modules/web/payment/src/**/*.spec.ts'],
  name: 'web-payment',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-payment',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
