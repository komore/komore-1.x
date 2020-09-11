module.exports = {
  testMatch: ['**/modules/function/openfaas/src/**/*.spec.ts'],
  name: 'function-openfaas',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-openfaas',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
