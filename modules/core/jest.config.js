module.exports = {
  testMatch: ['**/modules/core/src/**/*.spec.ts'],
  name: 'core',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/core',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
