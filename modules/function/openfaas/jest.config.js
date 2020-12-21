module.exports = {
  testMatch: ['**/modules/function/openfaas/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/function-openfaas',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-openfaas'
};
