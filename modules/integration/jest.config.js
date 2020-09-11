module.exports = {
  testMatch: ['**/modules/integration/src/**/*.spec.ts'],
  name: 'integration',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/integration',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
